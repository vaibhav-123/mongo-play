const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const formSchema = new mongoose.Schema({
	name: { type: String, required: true},
	isPublished: { type: Boolean, default: false },
	dataSchema: { type: Object, required: true},
	uiSchema: { type: Object, default: {} },
	sections: { type: Array, default: [] },
	createdBy: String, 
	updatedBy: String,
	publishedBy: String
});

// Automatically adds createdAt and updatedAt fields 
formSchema.plugin(timestamps);

module.exports = mongoose.model('form', formSchema);