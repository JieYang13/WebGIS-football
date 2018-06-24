
//输入对应时间的geojson文件得到对应时间的地图效果
//返回得到的时间图层
function addEmotion(features){
    var geojsonMarkerOptions1 = {
        radius: 22,
        fillColor: "#0206f0",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions2 = {
        radius: 18,
        fillColor: "#439eee",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions3 = {
        radius: 16,
        fillColor: "#4fc3ea",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions4 = {
        radius: 14,
        fillColor: "#53d9f3",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions5 = {
        radius: 12,
        fillColor: "#48f3ff",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions6 = {
        radius: 10,
        fillColor: "#7dffec",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions7 = {
        radius: 8,
        fillColor: "#bbfff3",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions8 = {
        radius: 12,
        fillColor: "#ffcabf",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions9 = {
        radius: 14,
        fillColor: "#ffac9d",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions10 = {
        radius: 16,
        fillColor: "#ff62a7",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var geojsonMarkerOptions11 = {
        radius: 18,
        fillColor: "#ff1118",
        color: "#000",
        weight: 1,
        opacity: 10,
        fillOpacity: 0.8
    };
    var timelayer = L.geoJSON(features, {
        pointToLayer: function (feature, latlng) {
           // return L.circleMarker(latlng, geojsonMarkerOptions);
            switch (feature.properties.value) {
                case '-1': return L.circleMarker(latlng, geojsonMarkerOptions1);
                case '-0.8':   return L.circleMarker(latlng, geojsonMarkerOptions2);
                case '-0.7': return L.circleMarker(latlng, geojsonMarkerOptions3);
                case '-0.6':   return L.circleMarker(latlng, geojsonMarkerOptions4);
                case '-0.5': return L.circleMarker(latlng, geojsonMarkerOptions5);
                case '-0.4':   return L.circleMarker(latlng, geojsonMarkerOptions6);
                case '-0.2': return L.circleMarker(latlng, geojsonMarkerOptions7);
                case '0.2':   return L.circleMarker(latlng, geojsonMarkerOptions8);
                case '0.4': return L.circleMarker(latlng, geojsonMarkerOptions9);
                case '0.6':   return L.circleMarker(latlng, geojsonMarkerOptions10);
                case '1': return L.circleMarker(latlng, geojsonMarkerOptions11);
            }
        }
    }).addTo(map);
    return timelayer;
}