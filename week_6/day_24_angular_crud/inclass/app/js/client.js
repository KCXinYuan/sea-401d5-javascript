'use strict';
const angular = require('angular');

const app = angular.module('NotesApp', []);

app.controller('NotesController', NotesController);

function NotesController($http) {
  this.smokeTest = 'hello';
  this.$http = $http;
  this.notes = [{'body':'test notes'}];

}

NotesController.prototype.getNotes = function() {
  this.$http.get('http://localhost:3000/')
  .then((res)=> {
    this.notes = res.data.data;
  }, (err)=> {
    console.log(err);
  })
};

NotesController.prototype.addNote = function() {
  this.$http.post('http://localhost:3000/', this.newNote)
  .then((res)=> {
    this.notes.push(res.data);
    this.newNote = null;
  }, (err)=> {
    console.log(err);
  });
};

NotesController.prototype.deleteNote = function(note) {
  let index = this.notes.indexOf(note);

  this.notes.splice(index, 1);
};

NotesController.prototype.updateNote = function(note, updatedNote) {
  let arrayNote = this.notes[this.notes.indexOf(note)];
  arrayNote.body = updatedNote;
};
