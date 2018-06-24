function createPopUp(feature, layer) {
    // var string = "";
    // for (var k in feature.properties) {
    //     string += k + " : " + feature.properties[k] + "<br>"
    // }
    var string="地点:"+feature.properties.place+ "<br>"+"词名:"+feature.properties.poetry+"<br>"+
        "词人:"+feature.properties.author+"<br>"+"年份:"+feature.properties.year+"<br>"
    layer.bindPopup(string);
};