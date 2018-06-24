
var overlay;

function addRemoval(optiondata){
    var chartsContainer=overlay.getEchartsContainer();
    var myChart=overlay.initECharts(chartsContainer);
    window.onresize = myChart.onresize;
    var option = {
        color: ['gold','aqua','lime'],
        title : {
            text: '苏东坡诗词情感变化图',
           // subtext:'数据纯属虚构',
            x:'center',
            textStyle : {
                color: '#3e403f',
                fontSize: 34,
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
        dataRange: {
            min : -1,
            max : 1,
            calculable : true,
            // color: ['#03b7ff', 'white', 'red','lime','aqua'],
            color:['#ff0004','#f5f2ff','#002cff'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                name: '全国',
                type: 'map',
                roam: true,
                hoverable: false,
                mapType: 'none',
                itemStyle:{
                    normal:{
                        borderColor:'rgba(100,149,237,1)',
                        borderWidth:0.5,
                        areaStyle:{
                            color: '#1b1b1b'
                        }
                    }
                },
                data:[],
                markLine : {
                    smooth:true,
                    symbol: ['none', 'circle'],
                    symbolSize : 1,
                    itemStyle : {
                        normal: {
                            color:'#fffe86',
                            borderWidth:1,
                            borderColor:'rgba(30,144,255,0.5)'
                        }
                    },
                    data : optiondata.data1,
                },
                geoCoord: {
                    '眉山':[103.8485143363,30.0756424267],
                    '成都府':[104.0647735044,30.5702183724],
                    '剑门':[105.5671745826,32.2109086109],
                    '开封':[114.3072976280,34.7972571926],
                    '江陵':[112.4247008922,30.0418518410],
                    '郑州':[113.6249284647,34.7472541716],
                    '凤翔府':[107.4007544176,34.5211416888],
                    '泗州':[117.9106290000,33.4829820000],
                    '颍州':[115.8069420000,32.8834680000],
                    '寿州':[116.9999320000,32.6254780000],
                    '濠州':[117.5316220000,32.8747350000],
                    '楚州':[119.1410990000,33.5028680000],
                    '扬州':[119.4129390000,32.3942090000],
                    '镇江府':[119.4258360000,32.187849000],
                    '苏州':[120.5852890000,31.2989740000],
                    '杭州':[120.1550700000,30.2740840000],
                    '密州':[119.5147730000,35.9658630000],
                    '徐州':[117.2841240000,34.2057680000],
                    '湖州':[120.086809000,30.8944100000],
                    '黄州':[114.8793980000,30.434049000],
                    '常州':[119.9740610000,31.8112260000],
                    '登州':[120.7711370000,37.8106080000],
                    '定州':[114.9903920000,38.5164610000],
                    '惠州':[114.4158010000,23.1122570000],
                    '儋州':[109.5808110000,19.5211340000],
                }
            },
            {
                name: '迁徙图',
                type: 'map',
                mapType: 'none',
                data:[],
                markLine : {
                    smooth:true,
                    effect : {
                        show: true,
                        scaleSize: 1,
                        period: 30,
                        color: '#ffffff',
                        shadowBlur: 10
                    },
                    itemStyle : {
                        normal: {
                            borderWidth:5,
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data :  optiondata.data2
                },
                markPoint : {
                    symbol:'emptyCircle',
                    symbolSize : function (v){
                        return 10 + v/10
                    },
                    effect : {
                        show: true,
                        shadowBlur : 0
                    },
                    itemStyle:{
                        normal:{
                            label:{show:false}
                        },
                        emphasis: {
                            label:{position:'top'}
                        }
                    },
                    data :  optiondata.data3
                }
            }
        ]
    };
    overlay.setOption(option);
}