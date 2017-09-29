"use strict";
var User = require('../models/userModel');
var bodyParser = require('body-parser');

exports.getUserTodos = function(username) {
    return new Promise((resolve, reject) => {
        User.find({ username: username }, function(err, todos){
            if(err){
                reject({error: err});
            }
            else {
                resolve(Object.assign([], todos));
            }
        });
    });
};

exports.getTodo = function(req, res) {
    User.find({ _id: req.params.id },
        function(err, todo){
            if(err) throw err;

            res.json(todo);
        });
};

exports.addUpdateTodo = function(req, res) {
    if(req.body.id) { //Updates if ID exists
        User.findByIdAndUpdate(req.body.id, {
            todo: req.body.todo, isDone: req.body.isDone,
            numberOfHours: req.body.numberOfHours
        }, function(err, todo) {
            if(err) throw err;
            res.json('Updated');
        })
    } else { //Creates a new Todo
        var newTodo = User({
            username: 'test',
            todo: req.body.todo,
            isDone: req.body.isDone,
            numberOfHours: req.body.numberOfHours
        });

        newTodo.save(function(err) {
            if(err) throw err;
            res.json('Added');
        });
    }
};

exports.deleteTodo = function(req, res) {
    User.findByIdAndRemove(req.body.id, function(err){
        if(err) throw err;
        res.json('Deleted');
    });
};