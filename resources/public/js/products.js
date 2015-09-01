var app=angular.module('productsApp',['ngCookies']);

app.controller('MainCtrl', ['$scope','$http','$cookies',function($scope, $http,$cookies) {	
	var resp=$http.get("/isAdmin",{headers: {'withCredentials': true}});	
	resp.success(function(data) {
		if(data=='true')
		{
			$scope.adminUser=true;
		}
		else
		{
			$scope.adminUser=false;
		}
	});	
	$scope.products={};
	var resp=$http.get("/getProducts");	
	resp.success(function(data) {$scope.products = data.products;});	
	
}]);