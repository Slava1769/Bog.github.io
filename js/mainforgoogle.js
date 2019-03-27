var map = L.map('map', {
    center: [49.543783, 30.872964],
    zoom: 13})
var roadMutant = L.gridLayer.googleMutant({
      maxZoom: 24,
      type:'roadmap'
    }).addTo(map);

//L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  //  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  //  maxZoom: 18,
   // id: 'mapbox.streets',
   // accessToken: 'pk.eyJ1Ijoic2xhdmExNzY5IiwiYSI6ImNqZjZ1Nmc1MzJibTczNHBkdGEwNWFwOWUifQ.nrmRTtFEww1PQl1ZjQ7jjg'
 // }).addTo(map);