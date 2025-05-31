const Task = require('../models/Task');

exports.addTaskToProject = async (req, res) => {
  try {
    const { title, assignedTo } = req.body;
    const { projectId } = req.params;

    const task = await Task.create({
      title,
      project: projectId,
      assignedTo: assignedTo || req.userId  // default to current user
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.taskId,
      { status: req.body.status },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStats = async (req, res) => {
  try {
    const tasks = await Task.find({
      project: req.params.projectId,
      status: { $in: ['completed', 'in-progress'] } // Match both statuses
    });

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Get all tasks assigned to the current user
exports.getUserTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.userId }).populate('project');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//delete the task

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};