const express = require('express');
const { taskList } = require('../data');
const router = express.Router();

router.get('/', (req, res) => {
  //res.json(taskList);
})

// post route for adding new task
router.post('/', function (req, res) {
  const { task } = req.body;
  taskList.push(task);
  res.status(201).send(task + ' - task added');
});

module.exports = router;
