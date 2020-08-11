const { Router } = require("express");
const router = Router();

const taskscontroller = require("../controllers/tasksController");

router.get('/tasks', taskscontroller.getTasks);
router.get('/task/:id', taskscontroller.getTask);
router.post('/task', taskscontroller.createTask);
router.put('/task/:id', taskscontroller.updateTask);
router.delete('/task/:id', taskscontroller.deleteTask);

module.exports = router;