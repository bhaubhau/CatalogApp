var app=angular.module('productsApp',[]);

app.controller('MainCtrl', function($scope, $http) {
	$scope.products={};
	var resp=$http.get("/getProducts");	
	resp.success(function(data) {$scope.products = data.products;});	
});