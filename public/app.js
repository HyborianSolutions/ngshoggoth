var app = angular.module('peanut', ['ui.bootstrap']);

app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.name = 'World';
}]);

app.controller('DropdownCtrl', ['$scope', function ($scope) {
 
    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
}]);



app.controller('Ctrl', ['$scope', function ($scope) {
    $scope.date = new Date();
	$scope.testclick = function(){
		console.log('clicked!');
	};
}]);


app.controller('CarouselDemoCtrl', ['$scope', function ($scope) {
	console.log('Controller Loaded');
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 900 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
  	console.log('Adding slide ' + i)
    $scope.addSlide();
  }
}]);