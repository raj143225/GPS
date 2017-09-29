"use strict";
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    numberOfHours: { type: Number, default: 0}
});

var user = mongoose.model('user', userSchema);

module.exports = user;