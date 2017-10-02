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
	Course.find({_id:course_object_id}, function(err, course){
		if (err) throw new Error(err);
		res.send(course);
	})
}

exports.addCourse = function(req, res){
	var new_course = new Course(req.body);
	if( typeof req.file == 'undefined' ) {
		new_course.image_url = "public/images/default.png";
	}
	else new_course.image_url = req.file.path;
	
	new_course.save()
			  .then((course) => {
						res.send(course);
					},
					(err) => {
						res.status(400).send(err);
					}
					);
}

exports.deleteCourse = function(req, res){
	Course.findByIdAndRemove(req.params.id, function(err, doc){
		if (err) {
			res.status(400).send(err);
		}
		else{
			console.log(doc)
			res.send(doc);
		}
	});

}

exports.updateCourse = function(req, res){
	//can not use Model update or findOneAndUpdate method
	//because it does not respect validators!

	Course.findById(req.params.id, function(err, course_to_update){
		if (err) {
			res.status(400).send(err);
		}
		course_to_update.name = req.body.name || course_to_update.name;
		course_to_update.description = req.body.description || course_to_update.description;
		course_to_update.image_url = req.body.image_url || course_to_update.image_url;
		course_to_update.save()
						.then((course) => {
								res.send(course);
							 },
							 (err) => {
								res.status(400).send(err);
							 }
					);
	});
// 	course_object_id = new ObjectId(req.params.id);
// 	var query = {'_id':course_object_id};
// 	Course.findOneAndUpdate(query, req.body, {upsert:true}, function(err, doc){
// 	    if (err) res.send(500, { error: err });
// 	    res.send(doc);
// 	});

// 	Tank.findById(id, function (err, tank) {
//   tank.size = 'large';
//   tank.save(function (err) {
//    // Document updated, do something with it
//   });
// });

}