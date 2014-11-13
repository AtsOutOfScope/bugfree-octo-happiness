app.controller('DownloadController', function($scope, Download, $ionicLoading, Constant, DownloadPdfDocument){

    $ionicLoading.show({template: Constant.loadingTemplate});
    Download.Download().then(function(response) {
        console.log('DownloadController', response);
        $scope.downloadList = response;
        $ionicLoading.hide();
    }, function() {$ionicLoading.hide();});
    
    
    $scope.onclick = function(d) {
        var id = d.id;
        $scope.pdf = d;
        $scope.pdfDoc = [];
        DownloadPdfDocument.get().then(function(response) {
            console.log('DownloadPdfDocument', response);
            for(var i=0; i<response.length; i++){
                var pdf = response[i];
                if(id == pdf.id_gruppo) {
                    $scope.pdfDoc.push(pdf);
                }
            }
            $scope.api.showDescNews = true;
            $scope.api.back = true;
        });
    }
               
    /* DocumentHandler */
    $scope.openPdf = function(url) {
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
            },url
        );
        //window.open('https://drive.google.com/open?id=0B-5YgTPghahqMEdSTm9TZGx4LVE&authuser=0');
        //http://www.cheat-sheets.org/saved-copy/fwunixref.pdf
        //http://www.repstatic.it/content/nazionale/img/2014/11/10/100921380-3773a7d0-495c-4238-a5b5-707794d2f95f.jpg
    }
    
    
});