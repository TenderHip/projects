const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const routes = require('./routes/todos');

mongoose.connect('mongodb+srv://dinhpeter:TE5yHopArT5gi9t6@cluster0.68n4kyp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', routes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
