console.log('main.js loaded');
var myApp = angular.module('peanut',['mgcrea.ngStrap.modal', 'mgcrea.ngStrap.aside', 'mgcrea.ngStrap.tooltip', 'ui.bootstrap']);

myApp.controller('HeadingController', ['$scope', function($scope) {
	console.log('Controller Loaded');
  $scope.greeting = 'Hola!'; 

  $scope.testclick = function(){
  	console.log('clicked!');
  }

  console.log($scope.menus);
}]);


myApp.controller('Ctrl', ['$scope', function($scope) { 
	console.log('Controller Loaded');
    $scope.date = new Date();
	$scope.testclick = function(){
		console.log('clicked!');
	};
}]);