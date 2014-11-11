app.controller('ContentController', function($scope, $ionicSideMenuDelegate, $state){

	
    $scope.$selected = $state.current.views['view1'].data.selected;
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
    
    $scope.items = [
        {label: "HOME", anchor: "index"},
        {label: "CHI SIAMO", anchor: "chisiamo"},
        {label: "SETTORI", anchor: "settori"},
        {label: "SERVIZI", anchor: "servizi"},
        {label: "DOWNLOAD", anchor: "download"},
        {label: "NOTIZIE", anchor: "notizie"},
        {label: "CONTATTI", anchor: "contatti"}
    ];
    


    
    
});