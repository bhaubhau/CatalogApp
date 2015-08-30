var app=angular.module('authApp',['ngCookies']);

app.controller('AuthCtrl', ['$scope','$http','$cookies','$location',function($scope,$http,$cookies,$location) {

	
    $scope.authenticate = function() {
        var url = '/authenticate';
        var fd = new FormData();  
        fd.append("username",$scope.username);
        fd.append("userpass",$scope.userpass);
        $http.post(url, fd,{headers: {'Content-Type': undefined, 'withCredentials': true}})
        .success(function(data, status, headers, config) {
            if(data=='Authentication failed')   
            {
            	$scope.authinvalid=true;
            }
            else if(data=='Authenticated')
        	{
            	$scope.authinvalid=false;
            	var absurl=$location.absUrl();
            	absurl=absurl.toString().replace('/login','');              	
            	window.location.href=absurl;
        	}
        })
        .error(function(data, status, headers, config) {
            
        })
        
        
    };
}]) 