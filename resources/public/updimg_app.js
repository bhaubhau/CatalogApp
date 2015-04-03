var app=angular.module('catalogPage',[]);

app.controller('MainCtrl',['$scope',function($scope){
	$scope.images=['one.png',
	               'two.png',
	               'three.png',
	               'four.png'
	               ];
	
	$scope.currentimage='one.png';
	
	$scope.updateCurrentImage=function(image){
		$scope.currentimage=image;
	}
	
}
                           
                           
]);