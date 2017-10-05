const mongoose = require('mongoose');
const schema = mongoose.Schema;

const course_schema = new schema({
	name:  {
		type: String,
		required: true,
		maxlength:20,
		unique: true
	},
	description: String,
	image_url: {
		type: String,
		required: true,
	},
	students_list: [{student_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'}}],
});


mongoose.model('Course', course_schema, 'courses');
