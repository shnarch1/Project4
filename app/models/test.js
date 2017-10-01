var mongoose = require('mongoose');
require('./course').Course
var Course = mongoose.model('Course');

mongoose.connect('mongodb://localhost:27017/school');
mongoose.connection.on('open', function() {
 	console.log('Mongoose connected.');
	
	var python = new Course({name: 'Python',
							 description: 'Python Descritopn',
							 image_url: 'public/images/python.png'});
	python.save();

	var js = new Course({name: 'Java Script',
							 description: 'Java Script Descritopn',
							 image_url: 'public/images/js.png'});
	js.save();

	Course.find({}, function(err, courses){
		console.log(courses.length);
		console.log(courses);
	})

});
