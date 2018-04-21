//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/mongo_play';

mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
//var db = mongoose.connection;

var db = {};

db.questionnaire = require(__dirname + "/models/questionnaire.js");
db.form = require(__dirname + "/models/form.js");
db.section = require(__dirname + "/models/section.js");

module.exports = db;
