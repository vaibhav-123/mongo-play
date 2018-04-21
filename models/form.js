// Using Node.js `require()`
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
	name: String,
	isPublished: {
        type: Boolean,
        default: false
    },
	dataSchema: Object,
	uiSchema: Object,
	sections: Array
});

module.exports = mongoose.model('form', formSchema);