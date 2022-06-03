let map = L.map('map').setView([51.99817226742373, 4.374422101006295], 14.5);
map.addControl(new L.Control.Fullscreen());

// ---------------> Types of maps available <-------------------

var openstreetmap = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
    })
var openstreetmapHot = L.tileLayer(
    'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
    })
var openstreetmapOsm = L.tileLayer(
    'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
    })
var Stadia_OSMBright = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});
var nlmaps_luchtfoto = L.tileLayer('https://service.pdok.nl/hwh/luchtfotorgb/wmts/v1_0/Actueel_ortho25/EPSG:3857/{z}/{x}/{y}.jpeg', {
    minZoom: 6,
    maxZoom: 19,
    bounds: [[50.5, 3.25], [54, 7.6]],
    attribution: 'Kaartgegevens &copy; <a href="https://www.kadaster.nl">Kadaster</a>'
});
var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
});

var allOptions = {
    "Open streetmap": openstreetmap,
    "Open streetmap: Hot": openstreetmapHot,
    "Open streetmap: Osm": openstreetmapOsm,
    "Stadia_OSMBright": Stadia_OSMBright,
    "nlmaps_luchtfoto": nlmaps_luchtfoto,
    "CartoDB_DarkMatter": CartoDB_DarkMatter
};

openstreetmap.addTo(map);

var layerControl = L.control.layers(allOptions, null).addTo(map);

