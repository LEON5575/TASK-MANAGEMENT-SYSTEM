const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');

router.post('/', projectController.createProject);
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectWithTasks);

module.exports = router;
