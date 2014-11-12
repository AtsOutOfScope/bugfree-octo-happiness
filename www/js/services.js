app.factory('Service', function($http, $q) {
    
    
    function handleSuccess(response) {
        console.log('success', response);
        return response.data;
    }
    
    function handleError(response) {
        return $q.reject("An unknown error occurred.");
    }
    function get(ServiceUrl) {
        var request = $http({
            cache: true,
            method: "get",
            url: ServiceUrl,
            params: {
                action: "get"
            }
        });
        console.log('req', request);
        return(request.then(handleSuccess, handleError));
    }
    
    return {
        call: get
    }
});

app.factory('News', function($http, $q, Service) {
    function getNews() {
        return Service.call('http://trr.it/android/service/carica_news_json.php').then();    
    }
    return {
        getNews: getNews
    }
});

app.factory('Gallery', function($http, $q, Service) {
    function getGallery() {
        return Service.call('http://trr.it/android/service/carica_gallery_json.php').then();    
    }
    return {
        getGallery: getGallery
    }
});

app.factory('ChiSiamo', function($http, $q, Service) {
    function ChiSiamo() {
        return Service.call('http://trr.it/android/service/carica_chisiamo_json.php').then();    
    }
    return {
        getChiSiamo: ChiSiamo
    }
});

app.factory('Servizi', function($http, $q, Service) {
    function Servizi() {
        return Service.call('http://trr.it/android/service/carica_servizi_json.php').then();    
    }
    return {
        Servizi: Servizi
    }
});

app.factory('Download', function($http, $q, Service) {
    function Download() {
        return Service.call('http://trr.it/android/service/carica_sez_download_json.php').then();    
    }
    return {
        Download: Download
    }
});

app.factory('DownloadPdfDocument', function($http, $q, Service) {
    function DownloadPdfDocument() {
        return Service.call('http://trr.it/android/service/carica_download_json.php').then();    
    }
    return {
        get: DownloadPdfDocument
    }
});

app.factory('Settori', function($http, $q, Service) {
    function Settori() {
        return Service.call('http://trr.it/android/service/carica_chisiamo_json.php?id=7').then();    
    }
    return {
        Settori: Settori
    }
});

