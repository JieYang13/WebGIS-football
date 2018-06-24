function MiniMap() {
    // //var map = new L.Map('map');
    // var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // var osmAttrib = 'Map data &copy; OpenStreetMap contributors';
    // // var osm = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 18, attribution: osmAttrib});
    // //
    // // map.addLayer(osm);
    // // var osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib });
    // var osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib });
    // var pubs2 = L.geoJson(NSong, {
    //     pointToLayer: function (featuredata, latlng) {
    //         return new L.CircleMarker(latlng, {radius: 2});
    //     }
    // });
    // var layers = new L.LayerGroup([osm2, pubs2]);
    // var miniMap = new L.Control.MiniMap(layers, {
    //     position:'bottomleft',
    //     width: 250,
    //     height: 250
    // }).addTo(map);
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    //var osmAttrib='Map data &copy; OpenStreetMap contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 18, attribution: osmAttrib});

    map.addLayer(osm);
    map.setView(new L.LatLng(59.92448055859924, 10.758276373601069),10);

    //Plugin magic goes here! Note that you cannot use the same layer object again, as that will confuse the two map controls
    var osm2 = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 18, attribution: osmAttrib});
    var miniMap = new L.Control.MiniMap(osm2, {
        position:'bottomleft',
        width: 250,
        height: 250
    }).addTo(map);
}