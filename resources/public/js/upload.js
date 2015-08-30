var app=angular.module('uploadApp',['ngCookies']);

app.controller('UploadCtrl', ['$scope','$http',function($scope,$http) {
    $scope.attachedFile = function(element) {
        $scope.$apply(function($scope) {
            $scope.file = element.files[0];   
        });     
        console.log('file attached');
    };

    $scope.addFile = function() {
        var url = '/upload';
        var fd = new FormData();  
        fd.append("productID","abcxxx");
        fd.append("file",$scope.file);             
        $http.post(url, fd,{headers: {'Content-Type': undefined}})
        .success(function(data, status, headers, config) {
            console.log('success');
        })
        .error(function(data, status, headers, config) {
            console.log('error');
        })
    };
}]) 