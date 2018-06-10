'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
 task:{
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  /*status: {
    type: String,
    default: 'Available'
  }*/
  category: String,
  points: Number,
  assignee: Number, //id of user
  isTimeLimited:{
    type:Boolean,
    default:false
  },
  status: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
 }
});

module.exports = mongoose.model('Tasks', TaskSchema);