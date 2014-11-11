app.controller('ContentController', function($scope, $ionicSideMenuDelegate, News, Constant){
    $scope.lang_ita = Constant.langITA;
    $scope.lang_eng = Constant.langENG;
    $scope.lang = Constant.langITA;
	
    $scope.$selected = 0;
    $scope.toggleLeft = function(index) {
        $ionicSideMenuDelegate.toggleLeft();
        if(angular.isDefined(index)){
            $scope.$selected = index;
        }
    };
    $scope.items = [
        {label: "HOME", anchor: "index.html"},
        {label: "CHI SIAMO", anchor: "side_menu.html#/about?index=1"},
        {label: "SETTORI", anchor: "side_menu.html#/settori?index=2"},
        {label: "SERVIZI", anchor: "side_menu.html#/servizi?index=3"},
        {label: "DOWNLOAD", anchor: "side_menu.html#/download?index=4"},
        {label: "NOTIZIE", anchor: "side_menu.html#/notizie?index=5"},
        {label: "CONTATTI", anchor: "side_menu.html#/contatti?index=6"}
    ];
    

    $scope.changeLang = function() {
		if($scope.lang == Constant.langITA){
			$scope.lang = Constant.langENG;
		}else{
			$scope.lang = Constant.langITA;
		}
    }
               
    /* DocumentHandler */
    $scope.openPdf = function() {
        //$scope.cordova = window.cordova;
        handleDocumentWithURL(
            function() {
                $scope.success = "success";
                console.log('success');
            },
            function(error) {
            console.log('failure');
                $scope.error = "error" + error;
                if(error == 53) {
                    console.log('No app that handles this file type.');
                }
            },
            'http://www.repstatic.it/content/nazionale/img/2014/11/10/100921380-3773a7d0-495c-4238-a5b5-707794d2f95f.jpg'
        );
        //window.open('https://drive.google.com/open?id=0B-5YgTPghahqMEdSTm9TZGx4LVE&authuser=0');
        //http://www.cheat-sheets.org/saved-copy/fwunixref.pdf
    }
    
    
    $scope.$on('$routeChangeStart', function(event, next, current) {
        console.log(event, next, current);
	if(angular.isDefined(next) && angular.isDefined(next.params) && angular.isDefined(next.params.index)) {
        	$scope.$selected = next.params.index;
	}
    });
    
});