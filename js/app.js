var myApp = angular.module('demoApp', ['ngRoute'])
.controller("MainController", function($scope, $timeout){
    $scope.time = {};


    var updateTime = function(){
        $scope.time.raw = new Date();
        $timeout(updateTime,1000);
    };


    updateTime();
})
