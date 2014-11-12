app.controller('DownloadController', function($scope){

	
    
               
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
    
    
});