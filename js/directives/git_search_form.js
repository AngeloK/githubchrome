angular.module('directives',[])
.directive('githubSearchForm',function($animate){
    return function($scope, element, attrs){
        $scope.$on('form submit', function(){
            $animate['addClass'](element, 'ng-move');
        })
    }
});
