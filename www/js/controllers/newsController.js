app.controller('newsController', function($scope, News){
    News.getNews().then(function(response) {
        $scope.notizie = response;
    });
    
});