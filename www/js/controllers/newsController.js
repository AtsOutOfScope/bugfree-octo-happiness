app.controller('newsController', function($scope, News, $ionicLoading, Constant){
    
    $ionicLoading.show({template: Constant.loadingTemplate});
    
    News.getNews().then(function(response) {
        console.log('newsController', response);
        $scope.notizie = response;
        $ionicLoading.hide();
    });
    
});