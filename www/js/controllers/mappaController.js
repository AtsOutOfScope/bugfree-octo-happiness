app.controller('mappaController', function($scope, $ionicLoading, Constant, $state){   


var map;
$scope.initialize = function() {
	var myLatlng = new google.maps.LatLng(45.61647,9.59896);
	
	  var mapOptions = {
	    zoom: 7,
	    center: myLatlng,
		mapTypeId:google.maps.MapTypeId.HYBRID,
		backgroundColor: '#fff'
	  };
	  map = new google.maps.Map(document.getElementById('map'),
	      mapOptions);
		var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map,
			icon: 'http://trr.it/app/img/segnalino.png',
		  title: 'TRR'
		});
	
}

$scope.initialize();
     
      
   
    
    
    
});
