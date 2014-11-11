app.controller('homeController', function($scope) {
    var vm = this;
    vm.init = function() {
    };
    
    $scope.langLabel = "ENG";
    $scope.toggleLeft = function(index) {
        $ionicSideMenuDelegate.toggleLeft();
        if(angular.isDefined(index)){
            $scope.$selected = index;
        }
    };
    
});