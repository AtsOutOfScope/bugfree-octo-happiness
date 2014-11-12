app.controller('serviziController', function($scope, Servizi, $ionicLoading, Constant){
    
    $ionicLoading.show({template: Constant.loadingTemplate});
    
    Servizi.Servizi().then(function(response) {
        console.log('serviziController', response);
        $scope.servizi = response;
        $ionicLoading.hide();
    }, function() {$ionicLoading.hide();});
    
});
