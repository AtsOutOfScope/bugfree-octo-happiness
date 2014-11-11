app.controller('galleryController', function($scope, Gallery, $ionicLoading, Constant){
    
    $ionicLoading.show({template: Constant.loadingTemplate});
    
    Gallery.getGallery().then(function(response) {
        console.log('galleryController', response);
        $scope.gallery = response;
        $ionicLoading.hide();
    });
    
});
