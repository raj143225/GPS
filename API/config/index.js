"use strict";
var configVariables = require('./config');

module.exports= {
    getDbConnection :function() {
        return 'mongodb://' + configVariables.username +
            ':' + configVariables.password +
            '@ds135394.mlab.com:35394/nodetodosample';
    }
};