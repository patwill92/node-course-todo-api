var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true // trims unnecessary spaces
  },
  completed: {
    type: Boolean,
    default: false // default value
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
