var pubs1;
function addNPoint() {
     pubs1 = L.geoJson(NSong, {
        onEachFeature: createPopUp
    }).addTo(map);
}


