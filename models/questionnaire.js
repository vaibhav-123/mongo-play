// Using Node.js `require()`
const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
	title: String,
	description: String,
	type: String,
	forms: Array
});

module.exports = mongoose.model('questionnaire', questionnaireSchema);