var mongoose = require('mongoose');
var schema = mongoose.Schema;

var course_schema = new schema({
  name:  String,
  description: String,
  image_url:   String,
  students_list: [{student_id: String}],
});

var Course = mongoose.model('Course', course_schema);

module.exports = {
  Course: Course
}