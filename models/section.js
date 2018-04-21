// Using Node.js `require()`
const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
	formId: String,
	name: String,
	dataSchema: Object,
	uiSchema: Object,
	formData: Object
});

module.exports = mongoose.model('section', sectionSchema);