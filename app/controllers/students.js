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
			  .then((student) => {
						res.send(student);
					},
					(err) => {
						res.status(400).send(err);
					}
					);
}

exports.getById = function(req, res){
	student_object_id = new ObjectId(req.params.id);
	Student.find({_id:student_object_id}, function(err, student){
		if (err) {
			res.status(400).send(err)
		}
		res.send(student);
	})
}

exports.deleteStudent = function(req, res){
	Student.findByIdAndRemove(req.params.id, function(err, doc){
		if (err) {
			res.status(400).send(err);
		}
		else{
			res.send(doc);
		}
	});

}

exports.updateStudent = function(req, res){
	//can not use Model update or findOneAndUpdate method
	//because it does not respect validators!

	Student.findById(req.params.id, function(err, student_to_update){
		if (err) {
			res.status(400).send(err);
		}
		student_to_update.name = req.body.name || student_to_update.name;
		student_to_update.description = req.body.description || student_to_update.description;
		// student_to_update.image_url = req.file.path || student_to_update.image_url;
		student_to_update.image_url = (typeof req.file == 'undefined') ? student_to_update.image_url : req.file.path
		student_to_update.save()
						.then((student) => {
								res.send(student);
							 },
							 (err) => {
								res.status(400).send(err);
							 }
					);
	});
}