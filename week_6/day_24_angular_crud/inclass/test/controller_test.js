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
})
=======
});





>>>>>>> 22696d5e3d959c8bbfa41d9bb122fd726c3d36ce
