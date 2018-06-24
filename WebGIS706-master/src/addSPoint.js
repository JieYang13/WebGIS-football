var pubs2;
function addSPoint() {
    pubs2 = L.geoJson(SSong, {
        onEachFeature: createPopUp
    }).addTo(map);
}