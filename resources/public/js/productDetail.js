var app=angular.module('product',[]);

app.controller('ProductCtrl',['$scope','$location','$http',function($scope,$location,$http) {
	var url=$location.absUrl();
	var baseurl='/products';
	var indx=url.indexOf(baseurl) + baseurl.length + 1;
	var name=url.substr(indx);
	var resp=$http.get("/getProductDetails/" + name);	
	resp.success(function(data) {$scope.product = data;});		
	$scope.minindex=1;
	//sample product
	//{ "ProductName" : "Chains" , "Index" : 16 , "Images" : [ "IMG_07.jpg" , "IMG_08.jpg" , "IMG_05.jpg" , "IMG_04.jpg" , "IMG_03.jpg" , "IMG_06.jpg" , "IMG_02.jpg" , "IMG_01.jpg"]}
	
	//var obj=JSON.parse($scope.product);
	//$scope.maxindex=$scope.product.Images.length;	
	//$scope.maxindex=Object.keys('$scope.product.Images').length;
	//$scope.maxindex=obj.Images.length;
	//var obj=eval("(" + $scope.product + ")");
	//$scope.maxindex=Object.keys(obj).length;
	
}]);

