const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId; 
require('../models/student')
const Student = mongoose.model('Student');

exports.addStudent = function(req, res){
	var new_student = new Student(req.body);
	if( typeof req.file == 'undefined' ) {
		new_student.image_url = "public/images/students/default.png";
	}
	else new_student.image_url = req.file.path;
	
	new_student.save()
			  .then((course) => {
						res.send(course);
					},
					(err) => {
						res.status(400).send(err);
					}
					);
}