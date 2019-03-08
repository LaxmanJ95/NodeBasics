const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName:{type: String, required: true,},
    lastName:{type: String, required: true,},
    userName: {type: String, required: true, max: 100},
    password: {type: String, required: true},
});

module.exports = mongoose.model('User', UserSchema);