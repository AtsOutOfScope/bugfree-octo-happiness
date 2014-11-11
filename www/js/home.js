app.controller('homeController', function($scope, Constant) {
    
    $scope.init = function() {
        $scope.lang = Constant.langITA;
        $scope.en = Constant.langENG;
        $scope.it = Constant.langITA;
    };


    $scope.changeLang = function() {
		if($scope.lang == Constant.langITA){
			$scope.lang = Constant.langENG;
		}else{
			$scope.lang = Constant.langITA;
		}
    }
    
});

