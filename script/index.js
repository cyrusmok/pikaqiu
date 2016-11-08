(function(doc, win) {
    var docEl = doc.documentElement;
    resize = function() {
        var clientWidth = docEl.clientWidth;
        docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
    }
    win.addEventListener('resize', resize);
    win.addEventListener('DOMContentLoaded', resize);
})(document, window);

$(function(){
    //服务保证--事件
    var serviceBtn = $('.service_pro li');
     console.log(serviceBtn)
    var servicepanel = $('.service_panel');
    // console.log(servicepanel)

    serviceBtn.on('tap',function(){
        var serid = $(this).data('serid');
        console.log(serid);
        serviceBtn.removeClass('act_icon');
        if($('#service_'+ serid).css('display') =='none'){
            servicepanel.hide();
            $(this).addClass('act_icon');
            $('#service_'+ serid).show();
        }else{
            servicepanel.hide();
            $(this).removeClass('act_icon');
            $('#service_'+serid).hide();
        }
    })

    //菜单显示
    var headerBtn = $('.header_icon');

    headerBtn.on('tap',function(){
        if($('.header_list').css('display')=='none'){
            $(this).html('&#xe6a6;');
            $('body').addClass('mask_off');
            $('.mask').show();
            $('.header_list').show();
        }else{
            $(this).html('&#xe600;');
            $('body').removeClass('mask_off');
            $('.mask').hide();
            $('.header_list').hide();
        }
    })
    //点击遮罩层关闭列表
    var maskBtn = $('.mask');

    maskBtn.on('tap',function(){
        $('.header_icon').html('&#xe600;');
        $('body').removeClass('mask_off');
        $('.mask').hide();
        $('.header_list').hide();
    })
})