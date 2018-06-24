// 点图点击后的响应函数
var pointLayer=[];//存放每次点击时间后得到的图层 但是每次只能存在一个图层 如果不是需要将这个数组清空；
function pointButtonClick(){
    document.getElementById('pointColor').style.visibility = 'visible';
    var time = document.getElementById('pointtime').value;
    if(pointLayer.length>0){
        for(var i=0;i<pointLayer.length;i++){
            map.removeLayer(pointLayer[i]);
        }
    }
    switch (time){
        case '北宋980-1093' :
            if(map.hasLayer(basemap[1])==true){
                map.removeLayer(basemap[1]);
            }
            if(map.hasLayer(basemap[0])!=true){
                map.addLayer(basemap[0]);
            }
            var layer = addEmotion(NSong980.features);
            pointLayer.push(layer);
            break;
        case '北宋1094-1127':
            if(map.hasLayer(basemap[1])==true){
                map.removeLayer(basemap[1]);
            }
            if(map.hasLayer(basemap[0])!=true){
                map.addLayer(basemap[0]);
            }
            var layer = addEmotion(NSong1094.features);
            pointLayer.push(layer);break;
        case '南宋1128-1189':
            if(map.hasLayer(basemap[0])==true){
                map.removeLayer(basemap[0]);
            }
            if(map.hasLayer(basemap[1])!=true){
                map.addLayer(basemap[1]);
            }
            var layer = addEmotion(SSong1128.features);
            pointLayer.push(layer);break;
        case '南宋1190-1278':
            if(map.hasLayer(basemap[0])==true){
                map.removeLayer(basemap[0]);
            }
            if(map.hasLayer(basemap[1])!=true){
                map.addLayer(basemap[1]);
            }
            var layer = addEmotion(SSong1190.features);
            pointLayer.push(layer);break;
        default :
            if(map.hasLayer(basemap[1])==true){
                map.removeLayer(basemap[1]);
            }
            if(map.hasLayer(basemap[0])!=true){
                map.addLayer(basemap[0]);
            }
            var layer = addEmotion(NSong980.features);
            pointLayer.push(layer);break;
    }
}

// 苏轼情感迁徙点响应函数
var sdpButtonClickCount = 0;
function sdpButtonClick(){
    if(sdpButtonClickCount==0){
        document.getElementById('sdpdiv').style.visibility = 'visible';
        overlay = new L.echartsLayer(map, echarts);
    }
    if(sdpButtonClickCount<34){
        var optiondata ={};
        optiondata.data1 =[];
        optiondata.data2 =[];
        optiondata.data3 =[];
        for(var i = 0;i<=sdpButtonClickCount;i++){
            optiondata.data1.push(sushi.mapdata[i]);
            optiondata.data2.push(sushi.valuedata[i]);
            optiondata.data3.push(sushi.pointValuedata[i]);
        }
        document.getElementById('inputS').value = sushi.valuedata[sdpButtonClickCount][0].name;
        document.getElementById('inputE').value = sushi.valuedata[sdpButtonClickCount][1].name;
        document.getElementById('inputValue').value = sushi.valuedata[sdpButtonClickCount][1].value;
        addRemoval(optiondata);
    }
    if(sdpButtonClickCount==34){
        document.getElementById("sdpStart").disabled=true;
    }
    sdpButtonClickCount++;
}