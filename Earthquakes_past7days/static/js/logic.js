// Add console.log() to see if code is working.
console.log('working...');

// light map tile layer option
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    'Street': streets,
    'Satellite': satellite
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// DATA
// Accessing the GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Michaelfr22/Mapping_Earthquakes/main/majorAirports.json";

let torontoData = "https://raw.githubusercontent.com/Michaelfr22/Mapping_Earthquakes/main/torontoRoutes.json";

let torontoHoods = "https://raw.githubusercontent.com/Michaelfr22/Mapping_Earthquakes/main/torontoNeighborhoods.json"


// Create a style for the lines.
let myStyle = {
    outline: 'blue',
    fillColor: "#ffffa1",
    weight: 1
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h2>Neighborhood: " + feature.properties.AREA_NAME + "</h2>") // <hr> <h3>Neighborhood: " + feature.properties.AREA_NAME.toLocaleString() + "</h3>")
    }
   })
.addTo(map);
});
