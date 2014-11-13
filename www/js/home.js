app.controller('homeController', function($scope, Constant, $ionicLoading, News, $filter) {
    
    $scope.init = function() {
        $scope.lang = Constant.langENG;
        $scope.en = Constant.langENG;
        $scope.it = Constant.langITA;
    };

    $ionicLoading.show({template: Constant.loadingTemplate});
    News.getNews().then(function(response) {
        $scope.lastNews = response[0];
        $ionicLoading.hide();
    }, function() {$ionicLoading.hide();});
    
    $scope.changeLang = function() {
		if($scope.lang == Constant.langITA){
			$scope.lang = Constant.langENG;
		}else{
			$scope.lang = Constant.langITA;
		}
    }
    
});

