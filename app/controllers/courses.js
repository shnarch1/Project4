const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId; 
require('../models/course')
const Course = mongoose.model('Course');

exports.getAll = function(req, res){
	Course.find({}, function(err, courses){
		if (err) throw new Error(err);
		res.send(courses);
	})
}

exports.getById = function(req, res){
	course_object_id = new ObjectId(req.params.id);
	console.dir(course_object_id);
	Course.find({_id:course_object_id}, function(err, course){
		if (err) throw new Error(err);
		res.send(course);
	})
}