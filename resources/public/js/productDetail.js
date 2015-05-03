var app=angular.module('product',[]);

app.controller('ProductCtrl',['$scope','$location','$http',function($scope,$location,$http) {
	var url=$location.absUrl();
	var baseurl='/products';
	var indx=url.indexOf(baseurl) + baseurl.length + 1;
	var name=url.substr(indx);
	var resp=$http.get("/getProductDetails/" + name);	
	resp.success(function(data) {$scope.product = JSON.parse(data);});		
	$scope.minindex=1;
	//$scope.maxindex=$scope.product.Images.length;
	
}]);

