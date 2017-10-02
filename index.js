const express = require('express')
const mongoose = require('mongoose');

const multer = require('multer');
const upload = multer({dest: 'public/images'});

const courses = require('./app/controllers/courses')

const app = express()

//Routes
app.get('/course', courses.getAll);
app.get('/course/:id', courses.getById);
app.post('/course', upload.single('course_image'), courses.addCourse);
app.post('/course/:id', upload.single('course_image'), courses.updateCourse);
app.delete('/course/:id', courses.deleteCourse);

connect_mongo()
	.on('error', console.log)
	.on('disconnect', connect_mongo)
	.on('open', listen)

function connect_mongo(){
	return mongoose.connect('mongodb://localhost:27017/school').connection;
}

function listen(){
	app.listen(3000);
  	console.log('School app started on port 3000');
}