'use strict';
const angular = require('angular');

const app = angular.module('NotesApp', []);

app.controller('NotesController', NotesController);

function NotesController() {
  this.smokeTest = 'hello';
  this.notes = [{'body':'test notes'}];
}

NotesController.prototype.addNote = function() {
  this.notes.push(this.newNote);
  this.newNote = null;
};

NotesController.prototype.deleteNote = function(note) {
  let index = this.notes.indexOf(note);
  this.notes.splice(index,1);
};

NotesController.prototype.updateNote;
