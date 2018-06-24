//加载数据
var map;
var basemap=[];
function loadWMTS(){

    var layer = L.tileLayer('http://mt0.google.cn/vt/lyrs=m@160000000&hl=zh-CN&gl=CN&src=app&y={y}&x={x}&z={z}&s=Ga', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });

    map = L.map('map',{
        minZoom: 4,
        maxZoom: 13
    }).setView([34, 109], 5);

   L.control.scale({'position':'bottomleft','metric':true,'imperial':false}).addTo(map);

    var layerbs= "ad1111";
    // The WMTS URL
    var url = "http://gis.sinica.edu.tw/ccts/wmts";

    var bs = new L.TileLayer.WMTS( url ,
        {
            layer: layerbs,
            style: "normal",
            // tilematrixSet: "GoogleMapsCompatible",
            format: "image/png"
        }
    );

    var layerns= "ad1208";
    var url = "http://gis.sinica.edu.tw/ccts/wmts";
    var ns = new L.TileLayer.WMTS( url ,
        {
            layer: layerns,
            style: "normal",
            //tilematrixSet: "GoogleMapsCompatible",
            format: "image/png"
        }
    );


    map.addLayer(layer);
    map.addLayer(bs);
    var i = map.hasLayer(bs);
    basemap.push(bs);
    basemap.push(ns);
    basemap.push(layer);

   //点击显示坐标位置
    var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
  // MiniMap();
    addNPoint();
    map.removeLayer(pubs1);
    search();

    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data &copy; OpenStreetMap contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 4, maxZoom: 15, attribution: osmAttrib});

    //map.addLayer(osm);
    //
    //
    // //Plugin magic goes here! Note that you cannot use the same layer object again, as that will confuse the two map controls
    var osm2 = new L.TileLayer(osmUrl, {minZoom: 3.5, maxZoom: 15, attribution: osmAttrib});
    var miniMap = new L.Control.MiniMap(osm2, {
        // position:'bottomleft',
        width: 250,
        height: 250
    }).addTo(map);

}