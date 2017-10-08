const express = require('express')
const mongoose = require('mongoose');

const multer = require('multer');
const courses_upload = multer({dest: 'public/images/courses'});
const students_upload = multer({dest: 'public/images/students'});

const courses = require('./app/controllers/courses')
const students = require('./app/controllers/students')

const app = express()

//Routes
app.get('/course', courses.getAll);
app.get('/course/:id', courses.getById);
app.post('/course', courses_upload.single('course_image'), courses.addCourse);
app.post('/course/:id', courses_upload.single('course_image'), courses.updateCourse);
app.delete('/course/:id', courses.deleteCourse);

app.get('/student/:id', students.getById);
app.post('/student', students_upload.single('student_image'), students.addStudent);
app.post('/student/:id', students_upload.single('student_image'), students.updateStudent);
app.delete('/student/:id', students.deleteStudent);

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