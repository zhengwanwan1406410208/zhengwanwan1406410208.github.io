$(function () {
    $(".open-left").click(function () {
        $("#wrapper").toggleClass("enlarged");
        $("#wrapper").addClass("forced");
        $(".side-menu").css("display","block");
        if($("#sidebar-menu").hasClass("solo")){
            $("#sidebar-menu").removeClass("solo");
        }else{$("#sidebar-menu").addClass("solo");}
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
         $(".waves-effect").removeClass("active");
            $(this).addClass("active");
        }
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
        $("#sidebar-menu").addClass("solo");
        if(!$("#wrapper").hasClass("enlarged") && $("#wrapper").hasClass("forced")){
            $("#sidebar-menu").removeClass("solo");
        }

        $(".waves-effect").click(function () {
            $(".side-menu").css("display","none");
            $("#wrapper").addClass("enlarged");
            $("#sidebar-menu").addClass("solo");
        })
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