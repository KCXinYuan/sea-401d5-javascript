<<<<<<< HEAD
=======
'use strict';
>>>>>>> da5fdb28f1708745a565d21c1cb38f79b12ffd3b

const mongoose = require('mongoose');

const Penguin = mongoose.Schema({
  name: String,
  sealHunter: Boolean,
<<<<<<< HEAD
  sealsKilled:{
=======
  sealsKilled: {
>>>>>>> da5fdb28f1708745a565d21c1cb38f79b12ffd3b
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('penguin', Penguin);
