angular.module('directives',[])
.directive('githubSearchForm',function($animate){
    function link(scope, element, attrs){
        scope.$on('form submit', function(){
            $animate['addClass'](element, 'ng-move');
        })
    }
    return {
        link:link
    }
})
.directive('githubSearchResult',function($animate){
    return function(scope, element, attrs){
        scope.$on('form submit', function(){
            $animate['removeClass'](element,'hidden');
        })
    }
})
