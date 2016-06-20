'use strict';
const angular = require('angular');

const app = angular.module('NotesApp', []);

app.controller('NotesController', ['$http', NotesController]);

function NotesController($http) {
<<<<<<< HEAD
  this.smokeTest = 'hello';
  this.$http = $http;
  this.notes = [{'body':'test notes'}];
=======
  this.smokeTest = 'HELLO';
  this.$http = $http;
  this.notes = [{body: 'test note'}];
>>>>>>> 22696d5e3d959c8bbfa41d9bb122fd726c3d36ce

}

NotesController.prototype.getNotes = function() {
  this.$http.get('http://localhost:3000/')
<<<<<<< HEAD
  .then((res)=> {
    this.notes = res.data.data;
  }, (err)=> {
    console.log(err);
  })
=======
    .then((res) => {
      this.notes = res.data.data;
    }, (err) => {
      console.log(err);
    });
>>>>>>> 22696d5e3d959c8bbfa41d9bb122fd726c3d36ce
};

NotesController.prototype.addNote = function() {
  this.$http.post('http://localhost:3000/', this.newNote)
<<<<<<< HEAD
  .then((res)=> {
    this.notes.push(res.data);
    this.newNote = null;
  }, (err)=> {
    console.log(err);
  });
=======
    .then((res) => {
      this.notes.push(res.data);
      this.newNote = null;
    }, (err) => {
      console.log(err);
    });
>>>>>>> 22696d5e3d959c8bbfa41d9bb122fd726c3d36ce
};

NotesController.prototype.deleteNote = function(note) {
  this.$http.delete('http://localhost:3000/' + note._id)
    .then(() => {
      let index = this.notes.indexOf(note);
      this.notes.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
};

NotesController.prototype.updateNote = function(note, updatedNote) {
  let arrayNote = this.notes[this.notes.indexOf(note)];
  arrayNote.body = updatedNote;
};
