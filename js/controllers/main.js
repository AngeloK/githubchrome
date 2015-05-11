angular.module('demoApp',['services'])
.controller('MainController',function($scope,$timeout){
    $scope.time = {};
    $scope.search = {};

    var updateTime = function(){
        $scope.time.raw = new Date();
        $timeout(updateTime,1000);
    }
    updateTime();
})
