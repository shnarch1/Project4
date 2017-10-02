const mongoose = require('mongoose');
const schema = mongoose.Schema;

const course_schema = new schema({
	name:  {
		type: String,
		required: true,
		maxlength:20
	},
	description: String,
	image_url: {
		type: String,
		required: true,
	},
	students_list: [{student_id: String}],
});


mongoose.model('Course', course_schema, 'courses');
