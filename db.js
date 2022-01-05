const mongoose = require('mongoose');
require("dotenv").config();


function connect(password) {
    password = password ?? process.env.MONGO_PASSWORD;

    if (!password) {
        console.log("Please add password to .env file with key 'MONGO_PASSWORD'");
        process.exit(1);
    }

    const url = `mongodb+srv://fullstack:${password}@cluster0.qgq84.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

    mongoose.connect(url);
}

function disconnect() {
    mongoose.connection.close();
}

const personSchema = new mongoose.Schema({
    name: String,
    number: String
});

const Person = mongoose.model('Person', personSchema);

async function addPerson(name, number) {
    console.log("adding person")
    await (new Person({ name, number })).save();
}

async function getAll() {
    console.log("getall")
    return await Person.find({});
}

module.exports = {
    connect, disconnect, Person, addPerson, getAll
}