module.exports = function(app) {
  require('./first_service')(app); // calling the service immediately since requiring the service immediately returns a function
};
