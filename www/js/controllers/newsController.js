app.controller('newsController', function($scope, News, $ionicLoading, Constant, $state){
    $scope.showDescNews = false;
    
    
    
    $ionicLoading.show({template: Constant.loadingTemplate});
    News.getNews().then(function(response) {
        console.log('newsController', response);
        $scope.notizie = response;
        if($state.current.views['view1'].data.lastNews) {
            $scope.openNews(0);
        }
        $ionicLoading.hide();
    }, function() {$ionicLoading.hide();});
    
    $scope.openNews = function(index) {
        $scope.api.showDescNews = true;
        $scope.notizia = $scope.notizie[index];
        $scope.api.back = true;
    }
    
});