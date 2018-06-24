
// 在页面控制中给六个图标添加点击事件

function shootOnClick(){
    // document.getElementById("stadium").innerHTML = "hahha";
    document.getElementById("ball").style.display= "block";
    shoot("ball");
}
//传球点击
function passOnClick(){
    document.getElementById("ball").style.display= "block";
     pass("ball");
}
//队伍信息显示
function  teamsOnClick() {

    document.getElementById("ballteams").style.display= "block";
}
//场馆信息
function venuesOnClick() {
     document.getElementById("city_focus").style.display= "block";
}
//热力图点击
function heatmapOnClick() {
    document.getElementById("ballmaps").style.display= "block";
}
//日期显示
function daysOnClick(){
    document.getElementById("ballmaps").style.display= "none";
    document.getElementById("balldays").style.display= "block";
}

function changeGraph1(option){
    var myChart =echarts.init(document.getElementById('graph1'));
    if(option == undefined){
        option ={
            tooltip:{
                trigger:'axis',
                axisPointer:{
                    type:'shadow'
                }
            },
            legend:{
                data:['法国','秘鲁']
                // data:['A','B']
            },
            toolbox:{
                show:true,
                feature:{
                    // mark:{show:true},
                    // dataView:{show:true,readOnly:false},
                    // magicType:{show:true,type:['line','bar']},
                    // restore:{show:true},
                    // saveAsImage:{show:true}
                }
            },
            calculable:true,
            xAxis:[
                {
                    type:'value'
                }
            ],
            yAxis:[
                {
                    type:'category',
                    axisTick:{show:false},
                    data:['控球率','射门','射正','封堵','任意球','角球','越位','犯规','黄牌']
                }
            ],
            series:[
                {
                    name:'法国',
                    type:'bar',
                    stack: '总量',
                    itemStyle: {normal: {
                        label : {show: true, position: 'left'}
                    }},
                    data:[-43,-11,-5,0,-16,-5,0,-11,-2]
                    // data:[0,0,0,0,0,0,0,0,0]
                },
                {
                    name:'秘鲁',
                    // name:"B",
                    type:'bar',
                    stack: '总量',
                    barWidth : 5,
                    itemStyle: {normal: {
                        label : {show: true,position: 'right'}
                    }},
                    data:[57,11, 2, 2, 11, 3,1,15,2]
                    // data:[0,0,0,0,0,0,0,0,0]
                },
            ]
        };
    }
    myChart.setOption(option);
}

function changeGrap2(){
    var myChart1 = echarts.init(document.getElementById('graph2'));
    var option1 = {
        title:{
            text:'球队身价统计',
            subtext:'身价单位：亿英镑'
        },
        tooltip:{
            trigger:'axis'
        },
        legend:{
            data:['总身价','平均年龄']
        },
        toolbox: {
            show : true,
            feature : {
                // mark : {show: true},
                // dataView : {show: true, readOnly: false},
                // magicType : {show: true, type: ['line', 'bar']},
                // restore : {show: true},
                // saveAsImage : {show: true}
            }
        },
        calculate:true,
        xAxis : [
            {
                type : 'category',
                data : ['法国', '西班牙', '巴西', '英格兰','德国','比利时','阿根廷','葡萄牙','乌拉圭','克罗地亚','塞内加尔','波兰','丹麦','哥伦比亚','塞尔维亚','瑞士','埃及','墨西哥','俄罗斯','尼日利亚','摩洛哥','瑞典','韩国','冰岛','日本','突尼斯','澳大利亚','伊朗','哥斯达黎加','秘鲁','沙特','巴拿马']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series:[
            {
                name:'总身价',
                type:'bar',
                data:[9.6795,9.315,8.55,7.866,7.848,6.822,6.372,4.2152,3.0708,2.5938,2.3369,2.318,2.2622,2.21596,1.9134,1.7719,1.2969,1.2404,1.1772,1.1048,1.0436,0.7594,0.6660,0.6516,0.5231,0.4460,0.3830,0.3787,0.3330,0.1683,0.0848],
            },
            {
                name:'平均年龄',
                type:'bar',
                data:[26,28.5,28.6,26,27.1,27.6,29.1,28.4,28.1,27.9,27.2,28.3,27.1,28.1,26.8,27.2,29,29.4,28.8,25.9,27.2,28.2,27.8,28.6,28.6,26.5,28.1,27.2,29.6,27.4,28.7,29.3],
            },
        ]
    };
    myChart1.setOption(option1);
}

function changeGrap3(){
    var myChart2 = echarts.init(document.getElementById('graph3'));
    var option2 = {
        title:{
        },
        tooltip:{
            trigger:'item'
        },
        legend:{
            orient:'vertical',
            x:'left',
            data:['英超','西甲','德甲','意甲']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'center',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculate:true,
        series:[
            {
                name:'四大联赛',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis : {
                        label : {
                            show : true,
                            position : 'center',
                            textStyle : {
                                fontSize : '30',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {value:124, name:'英超'},
                    {value:81, name:'西甲'},
                    {value:67, name:'德甲'},
                    {value:58, name:'意甲'},
                ]
            }
        ]
    };
    myChart2.setOption(option2);
}