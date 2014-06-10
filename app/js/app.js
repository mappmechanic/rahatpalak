'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'})
  .when('/story', {templateUrl: 'partials/story.html', controller: 'StoryCtrl'})
  .when('/familyfriends', {templateUrl: 'partials/familyfriends.html', controller: 'FamilyFriendsCtrl'})
  .when('/events', {templateUrl: 'partials/events.html', controller: 'EventsCtrl'})
  .when('/blessings', {templateUrl: 'partials/blessings.html', controller: 'BlessingsCtrl'})
  .when('/gallery', {templateUrl: 'partials/gallery.html', controller: 'GalleryCtrl'})
  .when('/rsvp', {templateUrl: 'partials/rsvp.html', controller: 'RsvpCtrl'});
    
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
