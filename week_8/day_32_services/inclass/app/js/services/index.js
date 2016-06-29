module.exports = function(app) {
<<<<<<< HEAD
  require('./first_service')(app); // calling the service immediately since requiring the service immediately returns a function
=======
  require('./first_service')(app);
  require('./cowsay_service')(app);
<<<<<<< HEAD
>>>>>>> f68413e27681351669ac28f36e5a08010c36eb09
=======
  require('./error_service')(app);
>>>>>>> ed9462d66697cfece5d2641874d5a2762f068376
};
