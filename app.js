const chalk = require('chalk')
const yargs = require('yargs')
const addNotes = require('./notes.js')

const command = process.argv[2]

if(command === 'add'){
    console.log('Adding Notes')
}else if(command === 'remove'){
    console.log('Removing Notes!...')
    console.log(process.argv[3])
}

console.log(yargs.argv)