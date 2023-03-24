const express = require('express');
const { taskList } = require('../data');
const router = express.Router();

router.get('/', (req, res) => {
  //res.json(taskList);
  res.send(200);
})

// post route for adding new task
router.post('/', function (req, res) {
  const { task } = req.body;
  taskList.push(task);
  res.status(201).send(task + ' - task added');
});

// delete tasks
router.delete('/', function (req, res) {
  const completeTask = req.body.check;

  if (typeof completeTask === 'string') {
    complete.push(completeTask);
    task.splice(task.indexOf(completeTask), 1);
  } else if (typeof completeTask === 'object') {
    for (let i = 0; i < completeTask.length; i++) {
      complete.push(completeTask[i]);
      task.splice(task.indexOf(completeTask[i]), 1);
    }
  }
  res.redirect('/');
});

module.exports = router;
