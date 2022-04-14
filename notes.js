const chalk = require('chalk')
const fs = require('fs')


const getNotes = () => {
    return 'Your notes....'
}


const addNote = (title, body) => {
    const notes = loadNotes()
        // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New Note Added!')
    } else {
        console.log('Title already Exists!')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red('No Note found for the specified Title'))
    } else {
        console.log(chalk.white.bgGreen('removing notes'))
        saveNotes(notesToKeep)
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green('Your Notes'))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const notesFound = notes.find((notes) => notes.title === title)

    if (notesFound) {
        console.log(chalk.yellow(notesFound.title))
        console.log(chalk.inverse(notesFound.body))
    } else { console.log(chalk.red.bold('No Note Found')) }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}