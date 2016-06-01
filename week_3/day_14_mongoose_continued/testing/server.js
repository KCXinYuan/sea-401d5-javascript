const express = require('express');
const app = express();
const mongoose = require('mongoose');
<<<<<<< HEAD

const dbPort = process.env.MONGOLAB_URI || 'mongodb://localhost/dev_db';
mongoose.connect(dbPort);
=======
const errorHandler = require('./lib/error_handling')

const dbPort = process.env.MONGOLAB_URI || 'mongodb://localhost/dev_db';

mongoose.connect(dbPort);

>>>>>>> da5fdb28f1708745a565d21c1cb38f79b12ffd3b

const penguinRouter = require('./routes/penguin_routes');

app.use('/penguins', penguinRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('up on 3000');
});

app.listen(3000, ()=> {
  console.log('Animals up on 3000');
});
