const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const app = express();

morgan.token("body", (req, res) => JSON.stringify(req.body));
// tiny + body
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"));
app.use(cors());
app.use(express.json());
app.use(express.static("build"));

let persons = [
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    },
    {
        "name": "Mikko Mikkonen",
        "number": "040 123 4567",
        "id": 5
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(p => p.id === id);
    if (person) {
        res.json(person);
    } else {
        res.sendStatus(404);
    }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    if (persons.every(p => p.id !== id)) {
        // There is nothing to delete
        res.sendStatus(404);
        return;
    }

    persons = persons.filter(p => p.id !== id);
    res.sendStatus(200);
});

app.post('/api/persons', (req, res) => {
    const newPerson = req.body;

    if (!newPerson) {
        return res.status(400).json({ error: "content missing"});
    }

    if (!newPerson.name) {
        return res.status(400).json({ error: "Missing name."});
    }

    if (!newPerson.number) {
        return res.status(400).json({ error: "Missing number."});
    }

    if (persons.some(p => p.name === newPerson.name)) {
        return res.status(400).json({ error: "Name must be unique."});
    }

    newPerson.id = Math.round(Math.random() * Math.pow(2, 16)); // Id from range 0-65535
    persons.push(newPerson);

    res.json(newPerson);
});

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people.</p><p>${new Date()}</p>`);
});

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});