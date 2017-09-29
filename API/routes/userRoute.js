var express = require('express');
var router = express.Router();
var userApi = require('../controllers/apiController');


router.get('/todos/:username', function(req, res) {
    var promise = userApi.getUserTodos(req.params.username);
    promise.then(function(data){
        res.send(data);
    }, function(error){
        res.status(500).send({error: error});
    });
});

router.get('/todo/:id', function(req, res) {
    userApi.getTodo(req, res);
});

router.post('/todo', function(req, res) {
    userApi.addUpdateTodo(req, res);
});

router.delete('/todo/:id', function(req, res) {
    userApi.deleteTodo(req, res);
});

module.exports = router;