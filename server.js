var express = require('express');
var _ = require('lodash');
var db = require('./db');
var schema = require('./schema');
var bodyParser = require('body-parser');
var app = express();
 
// parse application/json
app.use(bodyParser.json())
 
// Get all Questionnaire
app.post('/questionnaire', function (req, res) {

	var questionnaireInstance = new db.questionnaire(req.body);

	questionnaireInstance.save().then((questionnaire) => {
		res.json(questionnaire);
	}).catch((error) => {
		res.status(500);
	});
});

// Get all Questionnaire
app.get('/questionnaire', function (req, res) {

	db.questionnaire.find().then((result) => {
		res.json(result);
	}).catch((error) => {
		res.send(500)
	});
});

// Get one Questionnaire by Id
app.get('/questionnaire/:id', function (req, res) {

	db.questionnaire.findOne({_id: req.params.id}).then((questionnaire) => {
		return Promise.all([db.form.find({_id: { $in : questionnaire.forms }}), questionnaire]);
	}).then(values => {
		var questionnaireForms = values[0];
		var questionnaire = values[1];
		questionnaire.forms = questionnaireForms;
		res.json(questionnaire);
	}).catch((error) => {
		console.log(error);
		res.status(500).send();
	});
});

app.post('/form', function (req, res) {

	var formInstance = new db.form(req.body);

	db.questionnaire.findOne({ _id: req.body.questionnaireId }, function (err, questionnaire){
		
		if (questionnaire) {
			formInstance.save().then((form) => {
				return Promise.all([questionnaire.update({ $push: { forms: form._id } }), form]);
			}).then(values => {
				var form = values[1];
				res.json(form);
			}).catch((error) => {
				console.log(error);
				res.status(500).send();
			});
		} else {
			res.status(400).send();
		}
	});
});

app.get('/form', function (req, res) {

	db.form.find().then((forms) => {
		res.json(forms);
	}).catch((error) => {
		console.log(error);
		res.status(500).send();
	});
});

app.get('/form/:id', function (req, res) {

	/*db.form.findOne({_id: req.params.id}).then((form) => {
		return Promise.all([db.section.find({_id: { $in : form.sections }}), form]);
	}).then(values => {
		var formSections = values[0];
		var form = values[1];
		form.sections = formSections;
		res.json(form);
	}).catch((error) => {
		console.log(error);
		res.status(500).send();
	});*/

	db.form.findOne({_id: req.params.id}).then((form) => {
		res.json(form);
	}).catch((error) => {
		console.log(error);
		res.status(500).send();
	});
});

app.post('/section', function (req, res) {

	var sectionInstance = new db.section(req.body);

	db.form.findOne({ _id: req.body.formId }, function (err, form){
		
		if (form) {
			sectionInstance.save().then((section) => {
				return Promise.all([form.update({ $push: { sections: section._id } }), section]);
			}).then(values => {
				var section = values[1];
				res.json(section);
			}).catch((error) => {
				console.log(error);
				res.status(500).send();
			});
		} else {
			res.status(400).send();
		}
	});
});

app.get('/section/:formId', function (req, res) {

	db.form.findOne({_id: req.params.formId}).then((form) => {
		return Promise.all([db.section.find({_id: { $in : form.sections }}), form]);
	}).then(values => {
		var formSections = values[0];
		var form = values[1];

		_.each(formSections, (formSection) => {
			form.dataSchema.properties = {};
			form.formData = {};
			form.uiSchema = {};
			form.dataSchema.properties[formSection.name] = formSection.dataSchema;
			form.uiSchema[formSection.name] = formSection.uiSchema;
			form.formData[formSection.name] = formSection.formData;
		})

		res.json(form);
	}).catch((error) => {
		console.log(error);
		res.status(500).send();
	});
});

app.get('/section/:formId/:sectionName', function (req, res) {

	db.section.findOne({formId: req.params.formId, name: req.params.sectionName}).then((section) => {
		res.json(section);
	}).catch((error) => {
		console.log(error);
		res.status(500).send();
	});
});

app.listen(3000);