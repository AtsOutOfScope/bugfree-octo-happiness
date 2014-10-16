var app = angular.module('appMobile', []);
app.controller('appAndroidCtrl', function($scope, Labels) {
    $scope.data = "hello";
    Labels.get().then(function(response) {
        console.log('res', response.data);
        $scope.data = response;
    });
    
});

app.factory('Labels', function($http, $q) {
    
    
    function handleSuccess(response) {
        return response.data;
    }
    
    function handleError(response) {
        return $q.reject("An unknown error occurred.");
    }
    function get() {
        var request = $http({
            method: "get",
            url: "http://localhost:8000/hello/ciao",
            params: {
                action: "get"
            }
        });
        return(request.then(handleSuccess, handleError));
    }
    
    return {
        get: get
    }
});