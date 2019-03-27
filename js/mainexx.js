
var mbUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

var googleUrl = 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'

var googleSat = 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'

var Thunderforest_Landscape = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png'

var Esri_WorldStreetMap = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'

var Esri_WorldTopoMap = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'

var openstreetmap = L.tileLayer(mbUrl, {
		id: 'OpenStreetMap_Mapnik',
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}),
	google = L.tileLayer(googleUrl, {
		id: 'googleStreets',
		attribution: 'Map data ©2019 Google',
		subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
	});
googleSat = L.tileLayer(googleSat, {
	id: 'googleSat',
	attribution: 'Map data ©2019 Google',
	subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
Thunderforest_Landscape = L.tileLayer(Thunderforest_Landscape, {
	id: 'Thunderforest_Landscape',
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
Esri_WorldStreetMap = L.tileLayer(Esri_WorldStreetMap, {
	id: 'Esri_WorldStreetMap',
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});
Esri_WorldTopoMap = L.tileLayer(Esri_WorldTopoMap, {
	id: 'Esri_WorldTopoMap',
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

var map = L.map('map', {
	center: [49.483783, 30.872964],
	zoom: 11,
	layers: [openstreetmap]
});

var basemaps = [
	L.tileLayer(mbUrl, {
		id: 'OpenStreetMap_Mapnik',
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}),
    L.tileLayer(Thunderforest_Landscape, {
	id: 'Thunderforest_Landscape',
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }),
    L.tileLayer(Esri_WorldStreetMap, {
	id: 'Esri_WorldStreetMap',
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
    }),
    L.tileLayer(Esri_WorldTopoMap, {
	id: 'Esri_WorldTopoMap',
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    })]

	function onEachFeature(feature, layer) {
		var popupContent = feature.properties.ObjectGUID ;

		layer.bindPopup(popupContent);
	}

var woodenChurchIcon = L.icon ({
			iconUrl: "img/woodenChurch.png"
		});

var stoneChurchIcon = L.icon ({
	iconUrl: "img/stoneChurch.png"
});

var monasteryIcon = L.icon ({
	iconUrl: "img/monastery.png"
});

var museumIcon = L.icon ({
	iconUrl: "img/museum.png"
});

var manorIcon = L.icon ({
	iconUrl: "img/manor.png"
});

var monumentIcon = L.icon ({
	iconUrl: "img/monument.png"
});

var memorialSignIcon = L.icon ({
	iconUrl: "img/memorialSign.png"
});

var archaeologicalSitesIcon = L.icon ({
	iconUrl: "img/archaeologicalSites.png"
});

var natureMonumentsIcon = L.icon ({
	iconUrl: "img/natureMonuments.png"
});

var interestNatureIcon = L.icon ({
	iconUrl: "img/interestNature.png"
});

var stoneChurchLayer = L.geoJSON(stoneChurch, {

		onEachFeature: onEachFeature,

		pointToLayer: function (feature, latlng) {
			return L.marker(latlng,{icon: stoneChurchIcon})
				}
	}).addTo(map);

var woodenChurchLayer = L.geoJSON(woodenChurch, {

		onEachFeature: onEachFeature,

		pointToLayer: function (feature, latlng) {
			return L.marker(latlng,{icon: woodenChurchIcon})
				}
	}).addTo(map);

var monasteryLayer = L.geoJSON(monastery, {

		onEachFeature: onEachFeature,

		pointToLayer: function (feature, latlng) {
			return L.marker(latlng,{icon: monasteryIcon})
				}
	}).addTo(map);

var museumLayer = L.geoJSON(museum, {

		onEachFeature: onEachFeature,

		pointToLayer: function (feature, latlng) {
			return L.marker(latlng,{icon: museumIcon})
				}
	}).addTo(map);

var manorLayer = L.geoJSON(manor, {

		onEachFeature: onEachFeature,

		pointToLayer: function (feature, latlng) {
			return L.marker(latlng,{icon: manorIcon})
				}
	}).addTo(map);
	
var monumentLayer = L.geoJSON(monument, {

		onEachFeature: onEachFeature,

		pointToLayer: function (feature, latlng) {
			return L.marker(latlng,{icon: monumentIcon})
				}
	}).addTo(map);

var memorialSignLayer = L.geoJSON(memorialSign, {

		onEachFeature: onEachFeature,

		pointToLayer: function (feature, latlng) {
			return L.marker(latlng,{icon: memorialSignIcon})
				}
	}).addTo(map);

var archaeologicalSitesLayer = L.geoJSON(archaeologicalSites, {

		onEachFeature: onEachFeature,

		pointToLayer: function (feature, latlng) {
			return L.marker(latlng,{icon: archaeologicalSitesIcon})
				}
	}).addTo(map);

var natureMonumentsLayer = L.geoJSON(natureMonuments, {

		onEachFeature: onEachFeature,

		pointToLayer: function (feature, latlng) {
			return L.marker(latlng,{icon: natureMonumentsIcon})
				}
	}).addTo(map);

var interestNatureLayer = L.geoJSON(interestNature, {

		onEachFeature: onEachFeature,

		pointToLayer: function (feature, latlng) {
			return L.marker(latlng,{icon: interestNatureIcon})
				}
	}).addTo(map);

L.geoJSON (Bogyslav).addTo (map)

var overlays = {
    "Кам'яні церкви": stoneChurchLayer,
    "Дерев'яні церкви": woodenChurchLayer,
    "Монастирі": monasteryLayer,
    "Музеї": museumLayer,
    "Музеї-садиби": manorLayer,
    "Пам'ятники": monumentLayer,
    "Пам'ятні знаки": memorialSignLayer,
    "Археологічні пам'ятки": archaeologicalSitesLayer,
    "Пам'ятки природи": natureMonumentsLayer,
    "Цікаві природні об'єкти": interestNatureLayer,
};

map.addControl(L.control.basemaps({
    basemaps: basemaps,
    tileX: 0,  // tile X coordinate
    tileY: 0,  // tile Y coordinate
    tileZ: 1   // tile zoom level
}));

L.control.layers(overlays).addTo(map);
//L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//  maxZoom: 18,
// id: 'mapbox.streets',
// accessToken: 'pk.eyJ1Ijoic2xhdmExNzY5IiwiYSI6ImNqZjZ1Nmc1MzJibTczNHBkdGEwNWFwOWUifQ.nrmRTtFEww1PQl1ZjQ7jjg'
// }).addTo(map);