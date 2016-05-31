const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dbPort = process.env.MONGOLAB_URI || 'mongodb://localhost/dev_db';
mongoose.connect(dbPort);

const penguinRouter = require('./routes/penguin_routes');

app.use('/penguins', penguinRouter);

app.use((err, req, res, next) => {
  res.status(500).json({message: err.message});
});

app.listen(3000, ()=> {
  console.log('Animals up on 3000');
});
