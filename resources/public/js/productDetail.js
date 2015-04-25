var app=angular.module('product',[]);

app.controller('ProductCtrl', function($scope,$location) {
	var url=$location.absUrl();
	var indx=url.indexOf('/products');
	$scope.name=url.substr(indx);
	
});