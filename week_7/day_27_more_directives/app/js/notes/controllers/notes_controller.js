'use strict';
module.exports = function(app) {
  app.controller('NotesController', NotesController);

};

function NotesController() {
  this.notes = [{body: 'first note', _id: 2}];
  this.addNote = function(title, body) {
    let newNote = {title, body};
    this.notes.push(newNote);
  };
}
