

function heatmap(){
	var overlay = new L.echartsLayer(map, echarts);
    var chartsContainer=overlay.getEchartsContainer();
    var myChart=overlay.initECharts(chartsContainer);
    window.onresize = myChart.onresize;
	NSong = NSong.features;
	heatData = [];
	for (var i = 0; i <= NSong.length - 1; i++) {
	    heatData.push([NSong[i].geometry.coordinates[0],NSong[i].geometry.coordinates[1],parseFloat(NSong[i].properties.value)*100+100])
	}

	option = {
	    backgroundColor: '#1b1b1b',
	    title : {
	        text: '热力图结合地图',
	        x:'center',
	        textStyle: {
	            color: 'white'
	        }
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: '{b}'
	    },
	    toolbox: {
	        show : true,
	        orient : 'vertical',
	        x: 'right',
	        y: 'center',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    series : [
	        {
	            name: '北京',
	            type: 'map',
	            mapType: 'china',
	            roam: true,
	            hoverable: false,
	            data:heatData,
	            heatmap: {
	                minAlpha: 0.1,
	                data: heatData
	            },
	            itemStyle: {
	                normal: {
	                    borderColor:'rgba(100,149,237,0.6)',
	                    borderWidth:0.5,
	                    areaStyle: {
	                        color: '#76a5af'
	                    }
	                }
	            }
	        }
	    ]
	};

	overlay.setOption(option);
};


