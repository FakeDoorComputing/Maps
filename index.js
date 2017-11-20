function initMap(){

	var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
		mapTypeId: 'terrain'
  });

	navigator.geolocation.watchPosition(function(position){
	map.setCenter(new google.maps.LatLng(position.coords.latitude,position.coords.longitude))
	var marker=new google.maps.Marker({
		position: {lat:position.coords.latitude, lng:position.coords.longitude},
		map: map
		})
	});
}
