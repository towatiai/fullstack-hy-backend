// Note: this file is not used with the server

const { addPerson, connect, disconnect, getAll } = require("./db");

if (process.argv.length < 3) {
    console.log("give password as argument");
    process.exit(1);
}

connect();

const name = process.argv[3];
const number = process.argv[4];


(async () => {
    try {
        if (name && number) {
            await addPerson(name, number);
            console.log(`Added ${name} number ${number} to phonebook.`);
        } else {
            const persons = await getAll();
            persons.forEach(p => console.log(`${p.name} ${p.number}`));
        }
    } catch(e) {
        console.error(e);
    } finally {
        console.log("disconnecting");
        disconnect();
    }
})();

