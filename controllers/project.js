const Task = require('../models/Task');  //*FOR TASK AND PROJECT
const Project = require('../models/Project');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { name, owner } = req.body;
    const project = await Project.create({ name, owner });
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a project with its tasks
exports.getProjectWithTasks = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    // Find tasks where task.project matches project._ids
    const tasks = await Task.find({ project: project._id });
    res.status(200).json({ project, tasks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

