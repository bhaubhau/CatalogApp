var app=angular.module('userApp',['ngCookies']);

app.controller('UserCtrl', ['$scope','$http','$cookies',function($scope, $http,$cookies) {	
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
}]);