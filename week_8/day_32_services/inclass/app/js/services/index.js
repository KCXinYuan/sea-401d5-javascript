module.exports = function(app) {
<<<<<<< HEAD
  require('./first_service')(app); // calling the service immediately since requiring the service immediately returns a function
=======
  require('./first_service')(app);
  require('./cowsay_service')(app);
>>>>>>> f68413e27681351669ac28f36e5a08010c36eb09
};
