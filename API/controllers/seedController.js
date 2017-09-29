var User = require('../models/userModel');

exports.seedData = function(res) {
    // seed database
    var starterTodos = [
        {
            username: 'test',
            todo: 'Learn Express',
            isDone: false,
            numberOfHours: 5
        },
        {
            username: 'test2',
            todo: 'Learn React',
            isDone: false,
            numberOfHours: 5
        },
        {
            username: 'test3',
            todo: 'Create App',
            isDone: false,
            numberOfHours: 3
        }
    ];
    User.create(starterTodos, function(err, result){
        if (err) throw err;
        res.send(result);
    });
};