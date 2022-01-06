const mongoose = require("mongoose");
const Person = require("./models/Person");

async function connect() {
    try {
        const url = process.env.MONGO_URL;
        await mongoose.connect(url);
        console.log("Connected to MongoDB.");
    } catch(e) {
        console.error("Error conecting to MongoDB:", e.message);
    }
}

async function disconnect() {
    try {
        await mongoose.connection.close();
        console.log("Disconnected.");
    } catch(e) {
        console.error("Error disconnecting from MongoDB:", e.message);
    }
}

async function addPerson(name, number) {
    const person = new Person({ name, number });
    await person.save();
    return person;
}

async function getPerson(id) {
    return await Person.findById(id);
}

async function getAll() {
    return await Person.find({});
}

async function deletePerson(id) {
    await Person.findByIdAndRemove(id);
}

async function updatePerson(id, person) {
    return await Person.findByIdAndUpdate(id, person, { new: true });
}

module.exports = {
    connect, disconnect,
    Person,
    addPerson, getAll, getPerson, deletePerson, updatePerson
};