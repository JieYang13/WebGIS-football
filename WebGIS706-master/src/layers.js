// 场景树
let defaultData = [
    {
        text: '北宋地图',
        nodes: [],
        state: {
            checked: true,
           expanded: false
        }
    },
    {
        text: '南宋地图',
        nodes: [],
        state: {
            checked: false,
            expanded: false
        }
    }
];

// 此处需要用Jq写法，用到Jq对象中的treeview方法
$('#treeview-checkable').treeview({
    data: defaultData,
    showIcon: true,
    showCheckbox: true,
    onhoverColor: '#ffe543',
    onNodeChecked: function(event, node) {
       // console.log(node.text + '已选中');
        if (node.text === '北宋地图') {
            if(map.hasLayer(basemap[0])!=true){
                map.addLayer(basemap[0]);
                addNPoint();
                var options = {
                    position:'topleft',
                    layer:pubs1,
                    initial: false,
                    propertyName: 'place',
                    buildTip: function(text, val) {
                        var type = val.layer.feature.properties.place;
                        return '<a href="#" class="'+type+'">'+""+'<b>'+type+'</b></a>';
                    }
                };
                searchlayer.initialize(options);
            }
            if(map.hasLayer(basemap[1])==true){
                map.removeLayer(basemap[1]);
                if(map.hasLayer(pubs2)==true){
                    map.removeLayer(pubs2);
                }
            }
        }
        if (node.text === '南宋地图') {
            if(map.hasLayer(basemap[1])!=true){
                map.addLayer(basemap[1]);
                addSPoint();
                var options = {
                    position:'topleft',
                    layer:pubs2,
                    initial: false,
                    propertyName: 'place',
                    buildTip: function(text, val) {
                        var type = val.layer.feature.properties.place;
                        return '<a href="#" class="'+type+'">'+""+'<b>'+type+'</b></a>';
                    }
                };
                searchlayer.initialize(options);
            }
            if(map.hasLayer(basemap[0])==true){
                map.removeLayer(basemap[0]);
                if(map.hasLayer(pubs1)==true){
                    map.removeLayer(pubs1);
                }
            }
        }
    },
    onNodeUnchecked: function (event, node) {
       // console.log(node.text + '取消选择');
        if (node.text === '北宋地图') {
            if(map.hasLayer(basemap[0])==true){
                map.removeLayer(basemap[0]);
                if(map.hasLayer(pubs1)==true){
                    map.removeLayer(pubs1);
                }
            }
        }
        if (node.text === '南宋地图') {
            if(map.hasLayer(basemap[1])==true){
                map.removeLayer(basemap[1]);
                if(map.hasLayer(pubs2)==true){
                    map.removeLayer(pubs2);
                }
            }
        }
    }
});