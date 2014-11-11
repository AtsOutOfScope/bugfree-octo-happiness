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

$scope.slides = ["img/il_nostro_futuro.jpg","img/opportunita_lavoro.jpg","img/il_nostro_business.jpg"];


    
});
