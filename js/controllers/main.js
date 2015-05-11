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
.directive('githubResult',function(){
    return {
        restrict:'A',
        //replace:true,
        //template:"<div>hello world</div>"
        templateUrl:'templates/github_item.html'
        //scope: {
            //title:"django/django",
            //description:"The web framework",
            //language:"Python",
            //stars:"14,163",
            //forks:"5,629"
        //}
    } 
})
