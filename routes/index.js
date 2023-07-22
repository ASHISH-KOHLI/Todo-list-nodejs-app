const express =  require("express");

const router = express.Router();

const homeController = require('../controller/homecontroller');
router.get('/',homeController.home);
router.post('/create_todo', homeController.createTodo);
console.log('router is loaded')
module.exports = router;  