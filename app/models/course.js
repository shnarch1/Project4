const mongoose = require('mongoose');
const schema = mongoose.Schema;

const course_schema = new schema({
  name:  String,
  description: String,
  image_url:   String,
  students_list: [{student_id: String}],
});

mongoose.model('Course', course_schema, 'courses');
