var app=angular.module('product',[]);

app.controller('ProductCtrl',['$scope','$location','$http',function($scope,$location,$http) {
	var url=$location.absUrl();
	var baseurl='/products';
	var indx=url.indexOf(baseurl) + baseurl.length + 1;
	var name=url.substr(indx);
	var resp=$http.get("/getProductDetails/" + name);	
	
	 		
	resp.success(function(data, status, headers, config) {
			var product_str = data;
			$scope.product=angular.fromJson(product_str);
			$scope.minindex=1;
			$scope.maxindex=$scope.product.Images.length;
			$scope.slideroffset=0;
			if($scope.product.Images[0]==="../NoImage.png")
			{
				$scope.currindex=0;				
			}
			else
			{
				$scope.currindex=1;
			}
						
		})
		.error(function(data, status, headers, config) {
			
		});		
	
	$scope.incrementslider=function()
	{
		if($scope.slideroffset+4<$scope.maxindex)
		{
			$scope.slideroffset=$scope.slideroffset+1;
		}
	}
	
	$scope.decrementslider=function()
	{
		if($scope.slideroffset>0)
		{
			$scope.slideroffset=$scope.slideroffset-1;
		}
	}
		
}]);

