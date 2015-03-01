console.log('main.js loaded');
var myApp = angular.module('peanut',[]);

myApp.controller('HeadingController', ['$scope', function($scope) {
	console.log('Controller Loaded');
  $scope.greeting = 'Hola!';
  $scope.menus = {
  	'account':false,
  	'gaming':false,
  	'literature':false,
  	'conventions':false,
  	'editorials':false,
  	'comedy':false,
  	'news':false 
  };

  $scope.testclick = function(){
  	console.log('clicked!');
  }
  
  console.log($scope.menus);
}]);