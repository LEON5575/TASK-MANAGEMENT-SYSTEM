const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');
const { verifyToken } = require('../config/jwt');

//!http://localhost:3000/api/tasks/project/+ project id + title and assignedTo
router.post('/project/:projectId', verifyToken, taskController.addTaskToProject);

//^ http://localhost:3000/api/tasks/ + task id + title and assignedTo + status
router.patch('/:taskId', verifyToken, taskController.updateTaskStatus);

//? http://localhost:3000/api/tasks/project/683e8f5ee34e9c4e32771085/stats + n body and content type
router.get('/project/:projectId/stats', verifyToken, taskController.getStats);

//router.get('/my-tasks', verifyToken, taskController.getUserTasks);

//&delete http://localhost:3000/api/tasks/tasks/ + task_id
router.delete('/tasks/:id',verifyToken,taskController.deleteTask)
module.exports = router;
