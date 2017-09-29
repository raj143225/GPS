var express = require('express');
var router = express.Router();
var seedApi = require('../controllers/seedController');

router.get('/seedData', function(req, res) {
    seedApi.seedData(res)
});

module.exports = router;