const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {type:String,required: true} ,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
});
module.exports = mongoose.model('Project', projectSchema);
