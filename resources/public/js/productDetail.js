var app=angular.module('product',[]);

app.controller('ProductCtrl', function($scope,$location) {
	$scope.name=$location.absUrl();
	
});