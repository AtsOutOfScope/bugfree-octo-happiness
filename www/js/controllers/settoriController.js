app.controller('settoriController', function($scope, Settori, $ionicLoading, Constant, $state){
   
    $ionicLoading.show({template: Constant.loadingTemplate});
    Settori.Settori().then(function(response) {
        console.log('newsController', response);
        $scope.settori = response;
        $ionicLoading.hide();
    }, function() {$ionicLoading.hide();});
    
    
    
});
