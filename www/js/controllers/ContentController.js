app.controller('ContentController', function($scope, $ionicSideMenuDelegate, $state, $rootScope){
    
    var api = this;
    $scope.test = "pippo";
    api.back = false;
    $scope.$selected = $state.current.views['view1'].data.selected;
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.items = [
        {label_ita: "HOME",label_eng: "HOME", anchor: "index"},
        {label_ita: "CHI SIAMO",label_eng: "WHO WE ARE", anchor: "chisiamo"},
        {label_ita: "SETTORI",label_eng: "BRANCHES", anchor: "settori"},
        {label_ita: "SERVIZI",label_eng: "SERVICES", anchor: "servizi"},
        {label_ita: "DOWNLOAD",label_eng: "DOWNLOAD", anchor: "download"},
        {label_ita: "NOTIZIE", label_eng: "NEWS",anchor: "notizie"},
        {label_ita: "CONTATTI",label_eng: "CONTACTS", anchor: "contatti"}
    ];
    
    
    
    
});
