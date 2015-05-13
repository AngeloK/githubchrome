angular.module('controllers',['services'])
.controller('MainController',function($scope,$timeout,githubSearch){
    $scope.time = {};
    $scope.search = {};
    var searchPattern = $scope.search.github;
    
    $scope.submit = function(searchPattern) {
        $scope.$broadcast("form submit");
        githubSearch.getSearchResult(searchPattern,"stars","desc")
        .then(function(data){
            $timeout(function(){
                $scope.items = data.data.items;
            },0);
        });
    };
    var updateTime = function(){
        $scope.time.raw = new Date();
        $timeout(updateTime,1000);
    }
    updateTime();
});
