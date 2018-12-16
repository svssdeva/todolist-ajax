var express = require("express");
var router = express.Router();
var db = require("../models/");
var helper = require("../helper/todos");

router.route("/")
.get(helper.getTodos)
.post(helper.createTodo)

router.route("/:todoId")
.get(helper.getTodo)
.put(helper.updateTodos)
.delete(helper.deleteTodos)

module.exports = router;