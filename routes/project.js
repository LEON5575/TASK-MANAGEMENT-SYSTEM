const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');

//!http://localhost:3000/api/projects + BODY name+owner + JWT -->POST
router.post('/', projectController.createProject);

//^ http://localhost:3000/api/projects + JWT--> GET
router.get('/', projectController.getAllProjects);

//? http://localhost:3000/api/projects/ + project id
router.get('/:id', projectController.getProjectWithTasks);

module.exports = router;
