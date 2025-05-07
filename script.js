

var littleton = L.marker([42.67931496887497, 21.16869495704361]).bindPopup('This is Kodra e trimave, CO.'),
    denver    = L.marker([42.652508230171215, 21.17639393861698]).bindPopup('This is Bregu i diellit, CO.'),
    aurora    = L.marker([42.661636612969296, 21.17496453687468]).bindPopup('This is Velani, CO.'),
    golden    = L.marker([42.658948741831736, 21.171832763859886]).bindPopup('This is Mahalla e muhaxhereve, CO.');

    var cities = L.layerGroup([littleton, denver, aurora, golden]);

    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    });
    
    var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});
    
    var map = L.map('map', {
        center: [39.73, -104.99],
        zoom: 10,
        layers: [osm, cities]
    });

    
    var baseMaps = {
        "OpenStreetMap": osm,
        "OpenStreetMap.HOT": osmHOT
    };
    
    var overlayMaps = {
        "Cities": cities
    };

    var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

    var baseMaps = {
        "OpenStreetMap": osm,
        "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
    };

    var crownHill = L.marker([42.675494342726765, 21.211853058367474]).bindPopup('This is Germia Park.'),
    rubyHill = L.marker([42.66224459401906, 21.169645483173536]).bindPopup('This is Parku i qytetit.');
    
var parks = L.layerGroup([crownHill, rubyHill]);
var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
layerControl.addOverlay(parks, "Parks");
