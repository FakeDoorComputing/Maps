/*var location;
//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {
	getPosition();
});

//Call this function when you want to get the current position
function getPosition() {

	//navigator.geolocation.clearWatch(watchID);

	/*var	watchID=navigator.geolocation.watchPosition(function(position){
			locateMe(position.coords.latitude, position.coords.longitude, position.timestamp, position.coords.altitude);
		});
	};*/
/*
	var	watchID=navigator.geolocation.watchPosition(function(position){
			var lat=position.coords.latitude, lng=position.coords.longitude;
		});
	};

function locateMe(lati,long,time,alti){
	//alert(lati+" lat "+long+" lon "+location+" location")
	var location={lat:lati,lng:long};

}
*/
function initMap(){
	var lat,lng;
	var	watchID=navigator.geolocation.watchPosition(function(position){
		 lat=position.coords.latitude, lng=position.coords.longitude;
		});
	var markers=[
		['Home',52.110,-2.305,1],
		['Station',52.109,-2.318,2],
		['Work',52.111,-2.327,3],
		['Police',52.115,-2.325,4],
		['Morrisons',52.131,-2.303,5]
	]
	var map = new google.maps.Map(document.getElementById('map'), {
  	center: new google.maps.LatLng(lat,lng),
    zoom: 12,
		mapTypeId: 'terrain'
  });

	for(i=0;i<markers.length;i++){
		var mark=markers[i];
		var marker=new google.maps.Marker({
			position: {lat: mark[1], lng: mark[2]},
			map:map,
			title:mark[0],
			zIndex:mark[3],
			draggable:true
		});
	};
}
