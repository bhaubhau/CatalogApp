var app=angular.module('product',[]);

app.controller('ProductCtrl', function($scope,$location,$http) {
	var url=$location.absUrl();
	var baseurl='/products';
	var indx=url.indexOf(baseurl) + baseurl.length + 1;
	$scope.name=url.substr(indx);
	var resp=$http.get("/getProductDetails/" + name);	
	resp.success(function(data) {$scope.product = data;});	
});