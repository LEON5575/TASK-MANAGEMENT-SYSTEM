const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title:   { type: String, required: true },
  status:  { type: String, enum: ['in-progress', 'completed'], default: 'in-progress' },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Task', taskSchema);

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4M2I5OTRiZTk3ZDE1N2RkODUxOTA3ZCIsImlhdCI6MTc0ODczNjMzMSwiZXhwIjoxNzQ5MzQxMTMxfQ.nZb8myxkZvIQtLE86TEWM0EDadLnnh0-IUS8eK73Zsw