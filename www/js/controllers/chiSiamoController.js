app.controller('aboutController', function($scope, ChiSiamo){
    ChiSiamo.getChiSiamo().then(function(response) {
        console.log('chisiamo', response);
        $scope.chiSiamo = response;
    });
});