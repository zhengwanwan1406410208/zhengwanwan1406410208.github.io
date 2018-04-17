$(function () {
    $(".open-left").click(function () {
        $("#wrapper").toggleClass("enlarged");
        $("#wrapper").addClass("forced");

        if($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")) {
            $("body").removeClass("fixed-left").addClass("fixed-left-void");
        } else if(!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")) {
            $("body").removeClass("fixed-left-void").addClass("fixed-left");
        }
        if($("#wrapper").hasClass("enlarged")) {
            $(".left ul").removeAttr("style");
        } else {
            $(".subdrop").siblings("ul:first").show();
        }
        toggle_slimscroll(".slimscrollleft");
        $("body").trigger("resize");
    });
    /*导航栏点击*/
    $(".waves-effect").click(function (e) {
        if(!$("#wrapper").hasClass("enlarged")) {
            if ($(this).parent().hasClass("has_sub")) {
                e.preventDefault();
            }
            if (!$(this).hasClass("subdrop")) {
                $("ul", $(this).parents("ul:first")).slideUp(350);
                $("a", $(this).parents("ul:first")).removeClass("subdrop");
                $("#sidebar-menu .pull-right i").removeClass("md-remove").addClass("md-add");
                // 打开一个ul
                $(this).next("ul").slideDown(350);
                $(this).addClass("subdrop");
                $(".pull-right i", $(this).parents(".has_sub:last")).removeClass("md-add").addClass("md-remove");
                $(".pull-right i", $(this).siblings("ul")).removeClass("md-remove").addClass("md-add");
            } else if ($(this).hasClass("subdrop")) {
                $(this).removeClass("subdrop");
                $(this).next("ul").slideUp(350);
                $(".pull-right i", $(this).parent()).removeClass("md-remove").addClass("md-add");
                //if($(t)){}
            }
        }
    });
    $(".list-unstyled>li").click(function () {
           $(".waves-effect").removeClass("active");
           $(this).parent().siblings("a").addClass("active");
           $(".list-unstyled>li").removeClass("active");
           $(this).addClass("active");
    })
})
$(function () {
    /*获取窗口大小*/
    resizeS();
    initscrolls();
    $(window).resize(function () {
        resizeS();
        initscrolls();
    })

})
/*窗口大小适应*/
function resizeS() {
    var w=$(window).width();
    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
        $("body").addClass("mobile").removeClass("fixed-left");
    }
    if(!$("#wrapper").hasClass("forced")){
        if(w > 990){
            $("body").removeClass("smallscreen").addClass("widescreen");
            $("#wrapper").removeClass("enlarged");
        }else{
            $("body").removeClass("widescreen").addClass("smallscreen");
            //$("body").addClass("mobile").removeClass("fixed-left");
            $("#wrapper").addClass("enlarged");
            $(".left ul").removeAttr("style");
        }
        if($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")){
            $("body").removeClass("fixed-left").addClass("fixed-left-void");
        }else if(!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")){
            $("body").removeClass("fixed-left-void").addClass("fixed-left");
        }

    }
    toggle_slimscroll(".slimscrollleft");
}
/*插件导航栏滚动条*/
function initscrolls(){
    $('.slimscroller').slimscroll({
        height: 'auto',
        size: "5px"
    });

    $('.slimscrollleft').slimScroll({
        height: 'auto',
        position: 'right',
        size: "5px",
        color: '#7A868F',
        wheelStep: 5
    });
}
function toggle_slimscroll(item){
    if($("#wrapper").hasClass("enlarged")){
        $(".side-menu").css("overflow","visible");
        $(item).css("overflow","inherit").parent().css("overflow","inherit");
        $(item). siblings(".slimScrollBar").css("visibility","hidden");
    }else{
        $(item).css("overflow","hidden").parent().css("overflow","hidden");
        $(item). siblings(".slimScrollBar").css("visibility","visible");
    }
}
/*全屏显示*/
$(function () {
    $("#btn-fullscreen").click(function () {
        toggle_fullscreen();
    })
})
function toggle_fullscreen() {
    var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
    if(fullscreenEnabled) {
        if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            launchFullscreen(document.documentElement);
        } else{
           exitFullscreen();
        }
    }
}
function launchFullscreen(element) {
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}
function exitFullscreen() {
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}