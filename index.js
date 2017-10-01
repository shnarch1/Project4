const express = require('express')
const mongoose = require('mongoose');

const courses = require('./app/controllers/courses')

const app = express()

app.get('/course', courses.getAll);
app.get('/course/:id', courses.getById);

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