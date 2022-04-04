const chalk = require('chalk')
const addNotes = require('./notes.js')

const writeNotes = addNotes()
console.log(writeNotes)
console.log(chalk.green.bold(
    'Hello World!'
))
console.log(chalk.white.bgGreen('Success!'))
console.log(chalk.red.bgBlack('Error!'))
