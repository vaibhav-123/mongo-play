const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const questionnaireSchema = new mongoose.Schema({
	title: String,
	description: String,
	type: String,
	forms: { type: Array, default: [] },
	createdBy: String, 
	updatedBy: String
});

// Automatically adds createdAt and updatedAt fields 
questionnaireSchema.plugin(timestamps);

module.exports = mongoose.model('questionnaire', questionnaireSchema);