'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('controller tests', () => {
  let notesctrl;
  let $httpBackend;

<<<<<<< HEAD
  beforeEach(()=> {
    angular.mock.module('NotesApp');
    angular.mock.inject(function($controller,_$httpBackend_) {
=======
  beforeEach(() => {
    angular.mock.module('NotesApp');
    angular.mock.inject(function($controller, _$httpBackend_) {
>>>>>>> 22696d5e3d959c8bbfa41d9bb122fd726c3d36ce
      notesctrl = new $controller('NotesController');
      $httpBackend = _$httpBackend_;
    });
  });

<<<<<<< HEAD
  afterEach(()=> {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();

  });

  it('should run a test', ()=> {
=======
  afterEach(() => {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should run a test', () => {
>>>>>>> 22696d5e3d959c8bbfa41d9bb122fd726c3d36ce
    expect(false).toBe(false);
  });

  it('should have a notes array', () => {
    expect(Array.isArray(notesctrl.notes)).toBe(true);
  });

<<<<<<< HEAD
  it('should get a list of notes', ()=> {
    $httpBackend.expectGET('http://localhost:3000/')
    .respond(200,{data: [{body: 'test note'}]});
=======
  it('should get a list of notes', () => {
    $httpBackend.expectGET('http://localhost:3000/')
      .respond(200, {data: [{body: 'test note'}]});
>>>>>>> 22696d5e3d959c8bbfa41d9bb122fd726c3d36ce

    notesctrl.getNotes();
    $httpBackend.flush();

    expect(notesctrl.notes[0].body).toBe('test note');
  });
<<<<<<< HEAD
<<<<<<< HEAD
})
=======
=======

  it('should create a note', () => {
    $httpBackend.expectPOST('http://localhost:3000/')
      .respond(200, {data: {body: 'test note'}});

    notesctrl.newNote = {body: 'test note'};
    notesctrl.addNote();
    $httpBackend.flush();

    expect(notesctrl.newNote).toBe(null);
  });

  it('should delete a note', () => {
    let testNote = {body: 'test note', _id:1};
    $httpBackend.expectDELETE('http://localhost:3000/1')
      .respond(200, {message: 'deleted'});

    notesctrl.notes.push(testNote);
    notesctrl.deleteNote(testNote);
    $httpBackend.flush();

    expect(notesctrl.notes.length).toBe(1);
  });
>>>>>>> 11c01b497c8659833398421633249c871f64e064
});





>>>>>>> 22696d5e3d959c8bbfa41d9bb122fd726c3d36ce
