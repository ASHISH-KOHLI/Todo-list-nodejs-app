const express =  require("express");

const router = express.Router();

const homeController = require('../controller/homecontroller');
router.get('/',homeController.home);

router.post('/create_todo', homeController.createTodo); //controller for creating a todo list task
router.post('/delete_todo',homeController.deleteTodo); //controller for deleting a todo list task
router.get('/editdata',homeController.EditPage); //controller for getting Edit page
router.post('/edit-todolist',homeController.editDetails); //controller for editing todo list
console.log('router is loaded')
module.exports = router;  