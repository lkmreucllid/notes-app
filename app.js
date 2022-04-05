const chalk = require('chalk')
const yargs = require('yargs')
const addNotes = require('./notes.js')

//Customizing yargs
yargs.version('1.1.0')

//add, remove, read, list all the notes

//Create Add
yargs.command({
    command: 'add',
    describe:'Add new Note',
    handler:function (){
        console.log('Adding a new Note!')
    }

})

//Create Remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a Note!')
    }
})

//Create a Read
yargs.command({
    command:'read',
    describe:'show a single note by id',
    handler:function(){
        console.log('Showing a single note by id provided')
    }
})

//Create List all Notes
yargs.command({
    command: 'list',
    describe:'List all the notes',
    handler:function(){console.log('Time to List all the notes!')}
})

console.log(yargs.argv)