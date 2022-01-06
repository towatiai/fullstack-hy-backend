// Because switch-case should be indented!
/* eslint-disable indent */
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const db = require("../db");
// Note that this connection requires .env file with password.
db.connect();

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

morgan.token("body", (req) => JSON.stringify(req.body));
// tiny + body
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"));

function errorHandler(error, request, response, next) {
    console.error(error.name, error.message);

    switch (error.name) {
        case "CastError":
            return response.status(400).send({ error: "malformatted id" });
        case "ValidationError":
            return response.status(400).send({ error: error.message });
    }

    next(error);
}

function unknownEndpoint(request, response) {
    response.status(404).send({ error: "unknown endpoint" });
}

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", async (req, res) => {
    res.json(await db.getAll());
});

app.get("/api/persons/:id", async (req, res, next) => {
    try {
        const person = await db.getPerson(req.params.id);
        if (person) {
            res.json(person);
        } else {
            res.sendStatus(404);
        }
    } catch (e) {
        next(e);
    }

});

app.delete("/api/persons/:id", (req, res, next) => {
    try {
        db.deletePerson(req.params.id);
    } catch (e) {
        next(e);
    }

    res.sendStatus(200);
});

function checkContent(newPerson, res) {
    if (!newPerson) {
        return res.status(400).json({ error: "content missing" });
    }

    if (!newPerson.name) {
        return res.status(400).json({ error: "Missing name." });
    }

    if (!newPerson.number) {
        return res.status(400).json({ error: "Missing number." });
    }
}

app.post("/api/persons", async (req, res, next) => {
    const newPerson = req.body;
    checkContent(newPerson, res);
    try {
        const person = await db.addPerson(newPerson.name, newPerson.number);
        res.json(person);
    } catch (e) {
        next(e);
    }
});

app.put("/api/persons/:id", async (req, res, next) => {
    const newPerson = req.body;
    checkContent(newPerson, res);
    try {
        const person = await db.updatePerson(req.params.id, newPerson);
        res.json(person);
    } catch (e) {
        next(e);
    }


});

app.get("/info", async (req, res) => {
    const persons = await db.getAll();
    res.send(`<p>Phonebook has info for ${persons.length} people.</p><p>${new Date()}</p>`);
});

app.use(unknownEndpoint);
app.use(errorHandler);

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});