'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const dummyTemplate = require('../app/templates/notes/dummy.html');

describe('directive tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;

  beforeEach(() => {
    angular.mock.module('NotesApp'); //fires up/ instantiation of the app
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) { //wrapping the inject, getting back tools to mock parts of angulars
      $scope = $rootScope.$new(); //everything is linked to $rootScope and we create a new one for each test
      $compile = _$compile_; //to compile an html with a directive in it
      $httpBackend = _$httpBackend_; // making the fake server for testing to get the templates
    });
  });

  it('should be a test', () => {
    expect(true).toBe(true);
  });

  it('should be a dummy', () => {
    $httpBackend.expectGET('./templates/notes/dummy.html') // sends the dummy html to the mock server
      .respond(200, dummyTemplate); // mock server responds with status 200 and the dummy template we bundled with gulp
    $scope.test = 'test data'; // creates a scope to work with
    let link = $compile('<dummy data="test"></dummy>'); // setting link to the compiled html string
    let directive = link($scope); // setting scope to the compiled html
    $scope.$digest(); // angular's method that is called when things change in the controller, this way it renders our changes
    $httpBackend.flush(); // tell the $httpBackend to run any requests that are waiting

    let h2 = directive.find('h2'); // access our h2 directive by using .find from jquery
    let text = h2.text(); // setting text to the text in the h2 element using jquery method .text()

    expect(text).toBe('test data'); // expect the variable 'text' to contain the string 'test data'

  });
});

// for Actual testing, need multiple expectGET requests and consider nested directives

it('should list some notes', ()=> {
  $httpBackend.expectGET('./templates/notes/todo.html')
  .respond(200, todoTemplate);
  $httpBackend.expectGET('./templates/notes/note_directive,html')
  .respond(200, todoTemplate);

  $scope.data = [{
    body: 'test'
  },{
    body: 'test two'
  }]

  let link = $compile('<todo-list notes="data"></todo-list>');
  let directive = link($scope);
  $scope.$digest();
  $httpBackend.flush();
  console.log(directive);
});

it('should note', ()=> {
  $httpBackend.expectGET('./templates/notes/note_directive.html')
  .respond(200, noteTemplate);

  $scope.note = {
    body: 'TEST NOTE'
  };

  let element = angular.element('<note note="note"></note>');
  element.data('$todoListController');
  let link = $compile('<note note="note"></note>');
  let directive = link($scope);
  $scope.digest();
  $httpBackend.flush();
});
