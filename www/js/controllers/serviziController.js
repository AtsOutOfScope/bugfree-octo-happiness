app.controller('serviziController', function($scope, Servizi, $ionicLoading, Constant){
    
    $ionicLoading.show({template: Constant.loadingTemplate});
    
    Servizi.Servizi().then(function(response) {
        console.log('serviziController', response);
        $scope.servizi = response;
        $ionicLoading.hide();
    }, function() {$ionicLoading.hide();});

	$scope.openServizi = function(index) {
        $scope.api.showDescNews = true;
        $scope.servizio = $scope.servizi[index];
        $scope.api.back = true;
    }
    
});
