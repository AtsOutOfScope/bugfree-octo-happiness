app.controller('aboutController', function($scope, ChiSiamo, $ionicLoading, Constant){
    $ionicLoading.show({template: Constant.loadingTemplate});
    ChiSiamo.getChiSiamo().then(function(response) {
        console.log('chisiamo', response);
        $scope.chiSiamo = response;
        $ionicLoading.hide();
    }, function() {$ionicLoading.hide();});
});