const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const task = ['buy a new udemy course', 'practise with kubernetes'];
const complete = ['finish reading the book'];

// post route for adding new task
app.post('/addtask', function (req, res) {
  const newTask = req.body.newtask;
  task.push(newTask);
  res.redirect('/');
});

app.post('/removetask', function (req, res) {
  const completeTask = req.body.check;
  // check for the "typeof" the different completed task, then add into the complete task
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

app.get('/', function (req, res) {
  res.render('index', { task, complete });
});

if (require.main === module) {
  app.listen(3000, function () {
    console.log('server is running on port http://localhost:' + port);
  });
}

module.exports = app;
