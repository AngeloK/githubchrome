angular.module('services',[])
.factory('githubSearch',function($http,$q){
    var baseSearchUrl = 'https://api.github.com/search/repositories?';

    //query pattern. 
    var setQuery = function(queryString) {
        return 'q=' + queryString;
    }

    // sort param part of search url API,eg:"&sort=stars"
    var setSortStyle = function(sort){
        return '&sort=' + sort;
    }

    // order param part of search url API, eg: "&order=desc"
    var setOrderStyle = function(order){
        return '&order=' + order;
    }


    // complete url, 
    // eg:"https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc"
    var setSearchUrl = function(queryString,sort,order) {
        return baseSearchUrl + 
                setQuery(queryString) +
                setSortStyle(sort) +
                setOrderStyle(order) +
                "&callback=JSON_CALLBACK";
    }

    var service = {
        
        getSearchResult: function(queryString,sort,order){
            var defered = $q.defer(); 
            console.log("Start searching: ",queryString);
            console.log("Sort: ",sort);
            console.log("Order by: ",order);

            var searchUrl = setSearchUrl(queryString,sort,order);
            console.log("Search url: ",searchUrl);

            $http.jsonp(searchUrl).
                success(function(data,status,headers){
                    defered.resolve(data);
                    console.log("Status: ",status);
                    console.log("Get result of searching "+
                                queryString+
                                " successfully!");
            }).
                error(function(err,status,headers){
                    defered.reject(data);
                    console.log("Status: ",status);
                    console.log("Error: ",err);
            })
            return defered.promise;
        }     
    }
    return service;
})

