const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const sectionSchema = new mongoose.Schema({
	formId: { type: String, required: true},
	name: { type: String, required: true},
	dataSchema: { type: Object, required: true},
	uiSchema: { type: Object, required: true},
	createdBy: String, 
	updatedBy: String
});

// Automatically adds createdAt and updatedAt fields 
sectionSchema.plugin(timestamps);

module.exports = mongoose.model('section', sectionSchema);