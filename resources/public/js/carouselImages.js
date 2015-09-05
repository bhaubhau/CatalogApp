var app=angular.module('slideshowApp');

app.controller('SlidesCtrl', ['$scope','$http',function($scope, $http) {		
	$scope.slides={};
	var resp=$http.get("/getSlideShowImages");	
	resp.success(function(data) {$scope.slides = data.products;});	
	
}]);