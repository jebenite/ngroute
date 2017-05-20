var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider,$locationProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
  .when("/", {
      template : "ecshtm"
  })
  .when("/red", {
      templateUrl : "error.hbs"
  })
  .when("/green", {
      template : "green.htm"
  })
  .when("/blue", {
      template : "blue.htm"
  });
});
