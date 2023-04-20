const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Todo = require('../models/todo');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});

router.post('/todos', async (req, res) => {
  const { title } = req.body;
  const todo = new Todo({ title });
  await todo.save();
  res.redirect('/');
});

router.post('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  todo.completed = !todo.completed;
  await todo.save();
  res.redirect('/');
});

router.post('/todos/:id/delete', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.redirect('/');
});

module.exports = router;
