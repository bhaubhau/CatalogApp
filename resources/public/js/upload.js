var app=angular.module('uploadApp',[]);

app.controller('UploadCtrl', ['$scope','$http',function($scope,$http) {
	$scope.attachedFile = function(element) {
		$scope.$apply(function($scope) {
			$scope.file = element.files[0];   
		});		
		console.log('file attached');
	};
	
	$scope.addFile = function() {		
		var fd = new FormData();		
		fd.append("file",$scope.file);			
		$http(
				{method:'POST',
				url: '/upload', 
				headers: {
					   'Content-Type': undefined
					 },
				data: fd}
				
		)
		.success(function(data, status, headers, config) {
			console.log('success');
		})
		.error(function(data, status, headers, config) {
			console.log('error');
		})
	};
}])



