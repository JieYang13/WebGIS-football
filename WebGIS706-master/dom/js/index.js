
define(function (require, exports, module) {
    let mapModel = {
        int: function () {
            $('[data-toggle="tooltip"]').tooltip(); // 默认的工具提示
            // 右侧菜单关闭按钮
            $(document).off('click', '#right_close');
            $(document).on('click', '#right_close', function () {
                $('#right_menu_box').hide();
                $('#right_menu .active').removeClass('active');
                map.eachLayer(function(layer){
                    map.removeLayer(layer);
                });
                map.addLayer(basemap[2]);
                map.addLayer(basemap[0]);
            });
            // 右侧菜单点击按钮
            $(document).off('click', '#right_menu li');
            $(document).on('click', '#right_menu li', function () {
                $('#right_menu_box').show();
                $('#right_menu .active').removeClass('active');
                $(this).addClass('active');
                let link = $(this).attr('data-href');
                if (link) {
                    $('#menu_content').load(link);
                }
                map.eachLayer(function(layer){
                    map.removeLayer(layer);
                });
                map.addLayer(basemap[2]);
                map.addLayer(basemap[0]);
            });
            // 关闭底部地图样式按钮
            $(document).off('click', '#bottom_close');
            $(document).on('click', '#bottom_close', function () {
                $('#bottom_tips').hide();
            });

        }
    };
    module.exports = mapModel;
});