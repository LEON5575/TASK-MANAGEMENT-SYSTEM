const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');
const { verifyToken } = require('../config/jwt');

router.post('/project/:projectId', verifyToken, taskController.addTaskToProject);
router.patch('/:taskId', verifyToken, taskController.updateTaskStatus);
router.get('/project/:projectId/stats', verifyToken, taskController.getStats);
router.get('/my-tasks', verifyToken, taskController.getUserTasks);
router.delete('/tasks/:id',verifyToken,taskController.deleteTask)
//router.delete('/tasks/:id', taskController.deleteTask);


module.exports = router;
