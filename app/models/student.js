const mongoose = require('mongoose');
const schema = mongoose.Schema;

const student_schema = new schema({
	name:  {
		type: String,
		required: true,
		maxlength: 20
	},
	phone:  {
		type: String,
		required: true,
		maxlength: 20
	},
	email:  {
		type: String,
		required: true,
		maxlength: 254
	},
	image_url: {
		type: String,
		required: true,
	},
	courses_list: [{type: mongoose.Schema.Types.ObjectId, ref: 'Course'}],
});
student_schema.index({ email: 1, phone: -1 }, {unique: true});

mongoose.model('Student', student_schema, 'students');