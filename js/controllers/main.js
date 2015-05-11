angular.module('demoApp',['services'])
.controller('MainController',function($scope,$timeout,githubSearch){
    $scope.time = {};
    $scope.search = {};
    
    //githubSearch.getSearchResult("tornado","stars","desc")
    //.then(function(data){
        //$scope.items = data.data.items;
    //});

    var updateTime = function(){
        $scope.time.raw = new Date();
        $timeout(updateTime,1000);
    }
    updateTime();
});
