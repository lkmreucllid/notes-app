const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customizing yargs
yargs.version('1.1.0')

//add, remove, read, list all the notes

//Create Add
yargs.command({
    command: 'add',
    describe: 'Add new Note',
    builder: {
        title: {
            describe: 'Note Title',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }

})

//Create Remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create a Read
yargs.command({
    command: 'read',
    describe: 'show a single note by id',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//Create List all Notes
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler() { notes.listNotes() }
})

//console.log(yargs.argv)
yargs.parse()