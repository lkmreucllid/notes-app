const tasks = {
    tasks: [{
        text: 'Grocey Shopping',
        completed: true
    }, {
        text: 'Clean Yard',
        completed: true
    }, {
        text: 'Film Course',
        completed: false
    }],
    getTaskToDo: function() {
        return this.tasks.filter((task) => task.completed === false)

    }
}

console.log(tasks.getTaskToDo())