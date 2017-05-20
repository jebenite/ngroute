var app = angular.module("myApp", ["ngRoute"]);
app.config(['$locationProvider,$interpolateProvider',function($routeProvider,$locationProvider,$interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
    $routeProvider
    .when("/", {
        template : "index.hbs"
    })
    .when("/red", {
        template : "red.hbs"
    })
}]);
