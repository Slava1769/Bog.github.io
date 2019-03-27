
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
	zoomControl: false,
	layers: [openstreetmap]
});

var baselayers = {
	"OpenStreetMap": openstreetmap,
	"Google": google,
	"Google Супутник": googleSat,
	"Thunderforest Ландшафт": Thunderforest_Landscape,
	"ESRI": Esri_WorldStreetMap,
	"ESRI Топографічна": Esri_WorldTopoMap
};

	function onEachFeature(feature, layer) {

		var popupContent = '<b>Назва об\'\єкта:</b> '+feature.properties.name+'<br><b>Адреса:</b> '+feature.properties.adress+'<br>'+"<a href='" + feature.properties.info + "'>" + 'Довідка про об\'\єкт' + "</a>" ;

		layer.bindPopup(popupContent);
	};

var woodenChurchIcon = L.icon ({
			iconUrl: "img/woodenChurch.png",
			iconSize: [28,33]
		});

var stoneChurchIcon = L.icon ({
	iconUrl: "img/stoneChurch.png",
	iconSize: [28,33]
});

var monasteryIcon = L.icon ({
	iconUrl: "img/monastery.png",
	iconSize: [28,33]
});

var museumIcon = L.icon ({
	iconUrl: "img/museum.png",
	iconSize: [28,33]
});

var manorIcon = L.icon ({
	iconUrl: "img/manor.png",
	iconSize: [28,33]
});

var monumentIcon = L.icon ({
	iconUrl: "img/monument.png",
	iconSize: [28,33]
});

var memorialSignIcon = L.icon ({
	iconUrl: "img/memorialSign.png",
	iconSize: [28,33]
});

var archaeologicalSitesIcon = L.icon ({
	iconUrl: "img/archaeologicalSites.png",
	iconSize: [28,33]
});

var natureMonumentsIcon = L.icon ({
	iconUrl: "img/natureMonuments.png",
	iconSize: [28,33]
});

var interestNatureIcon = L.icon ({
	iconUrl: "img/interestNature.png",
	iconSize: [28,33]
});

var stoneChurchLayer = L.geoJSON(stoneChurch, {

		onEachFeature: onEachFeature, 
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng,{icon: stoneChurchIcon}) /*.on({
mouseover: function(e) {
this.openPopup();
},
mouseout: function(e) {
this.closePopup();
}
})*/
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
var baselayers = {
	"OpenStreetMap": openstreetmap,
	"Google": google,
	"Google Супутник": googleSat,
	"Thunderforest Ландшафт": Thunderforest_Landscape,
	"ESRI": Esri_WorldStreetMap,
	"ESRI Топографічна": Esri_WorldTopoMap
};

var iconLayersControl = new L.Control.IconLayers(
    [
        {
            title: 'OpenStreetMap', // use any string
            layer: openstreetmap, // any ILayer
            icon: 'img/open.png' // 80x80 icon
        },
        {
            title: 'Google',
            layer: google,
            icon: 'img/google.png'
        },
        {
            title: 'Google Супутник',
            layer: googleSat,
            icon: 'img/satel.jpg'
        },
        {
            title: 'Thunderforest Ландшафт',
            layer: Thunderforest_Landscape,
            icon: 'img/thunder.png'
        },
        {
            title: 'ESRI',
            layer: Esri_WorldStreetMap,
            icon: 'img/Esri.jpg'
        },
        {
            title: 'ESRI Топографічна',
            layer: Esri_WorldTopoMap,
            icon: 'img/topo.jpg'
        }
    ], {
        position: 'bottomright',
        maxLayersInRow: 5
    }
);

// new L.Control.IconLayers(layers)
// new L.Control.IconLayers(options)
// are also ok

iconLayersControl.addTo(map);

L.control.layers("", overlays).addTo(map);

// define toolbar options
var options = {
    position: 'topleft', // toolbar position, options are 'topleft', 'topright', 'bottomleft', 'bottomright'
    drawMarker: true, // adds button to draw markers
    drawPolyline: true, // adds button to draw a polyline
    drawRectangle: true, // adds button to draw a rectangle
    drawPolygon: true, // adds button to draw a polygon
    drawCircle: true, // adds button to draw a cricle
    cutPolygon: true, // adds button to cut a hole in a polygon
    editMode: true, // adds button to toggle edit mode for all layers
    removalMode: true, // adds a button to remove layers
};

// add leaflet.pm controls to the map
map.pm.addControls(options);

var zoom_bar = new L.Control.ZoomBar({position: 'topleft'}).addTo(map);

// линейка
var cost_above_ground = 17.89,
    html = [
        '<table>',
        ' <tr><td class="cost_label">Cost Above Ground:</td><td class="cost_value">${total_above_ground}</td></tr>',
        ' <tr><td class="cost_label">Cost Underground:</td><td class="cost_value">${total_underground}</td></tr>',
        '</table>'
    ].join(''),
    numberWithCommas = function(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

var Ruler = L.Control.LinearMeasurement.extend({
    layerSelected: function(e){

        /* cost should be in feet */

        var distance = e.total.scalar;

        if(e.total.unit === 'mi'){
            distance *= e.sub_unit;

        } else if(e.total.unit === 'km'){
            distance *= 3280.84;

        } else if(e.total.unit === 'm'){
            distance *= 3.28084;
        }

        var data = {
            total_above_ground: numberWithCommas(L.Util.formatNum(cost_above_ground * distance, 2)),
            total_underground: numberWithCommas(L.Util.formatNum(cost_underground * distance, 2))
        };

        var content = L.Util.template(html, data),
            popup = L.popup().setContent(content);

        e.total_label.bindPopup(popup, { offset: [45, 0] });
        e.total_label.openPopup();
    }
});

map.addControl(new Ruler({
  unitSystem: 'metric',
  color: '#FF0080'
}));

/*var stateChangingButton = L.easyButton({
    states: [{
            stateName: 'zoom-to-forest',        // name the state
            icon:      '<span class="fas fa-atlas fa-3x"></span>',               // and define its properties
            title:     'Легенда',      // like its title
            onClick:  function prepareFrame() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "legend.html");
        ifrm.style.width = "640px";
        ifrm.style.height = "480px";
        document.body.appendChild(ifrm);
    
}
        }], position: 'topright'
});
*/
//legend button
var stateChangingButton = L.easyButton({
    states: [{
            stateName: 'zoom-to-forest',        // name the state
            icon:      '<span class="fas fa-atlas fa-3x"></span>',               // and define its properties
            title:     'Легенда',      // like its title
            onClick:  function (mylink, windowname, specs) {
window.open('legend.html',"","width="+600+",height="+350+",screenX=1200,screenY=400,scrollbars=no,menubar=no,toolbar=no");
return false
}
        }], position: 'topright'
});

stateChangingButton.addTo(map);

stateChangingButton.button.style.height = '44px'
stateChangingButton.button.style.width = '44px'

//var cramb = L.easyButton('fa-globe fa-3x', function (mylink, windowname, width, height) {
//window.open('https://fonts.google.com/specimen/Ubuntu?selection.family=Ubuntu', windowname,"width="+700+",height="+700+",screenX=10,screenY=10,scrollbars=yes");
//return false
//}).addTo(map);
//cramb.button.style.height = '42px'
//cramb.button.style.width = '50px'

// search
var poiLayers = L.layerGroup([
		manorLayer, monumentLayer, museumLayer, archaeologicalSitesLayer, interestNatureLayer, stoneChurchLayer, woodenChurchLayer, memorialSignLayer, natureMonumentsLayer, monasteryLayer
	])

L.control.search({
		layer: poiLayers,
		initial: false,
		propertyName: 'name',
		zoom: 17,
		position: 'topright'

	})
	.addTo(map);


