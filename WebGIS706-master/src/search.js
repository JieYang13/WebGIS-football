//对应每次搜索需要添加一个图层
var searchlayer ;
function search(){
    searchlayer= new L.control.search({
              position:'topleft',
              layer:"",
              initial: false,
              propertyName: 'place',
              buildTip: function(text, val) {
                  var type = val.layer.feature.properties.place;
                  return '<a href="#" class="'+type+'">'+""+'<b>'+type+'</b></a>';
              }
          }).addTo(map);
}