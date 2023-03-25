const express = require('express');
const bodyParser = require('body-parser');
const { taskList } = require('./data');
const { tasks } = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const host = process.env.HOST || 'http://localhost';
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

const complete = ['finish reading the book'];

app.use('/tasks', tasks);

app.get('/', function (req, res) {
  res.render('index', { task: taskList, complete });
});


if (require.main === module) {
  app.listen(3000, function () {
    console.log(`server is running on port ${host}:${port}`);
  });
}

module.exports = app;
