app.controller('newsController', function($scope, News){
    News.getNews().then(function(response) {
        console.log('newsController', response);
        $scope.notizie = response;
    });
    
});