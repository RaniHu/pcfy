/**
 * Created by Administrator on 2016/12/28 0028.
 */
$(function () {

    //楼盘配套tab切换
    $("#block-facility-tab li:first").addClass("active");
    $("#block-facility-info").find(".facility-info-list").eq(0).show();
    $("#block-facility-tab li").click(function () {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("#block-facility-info").find(".facility-info-list").eq(index).show().siblings().hide();
    });


    var clientW = $(window).width();
    var clientH = $(window).height();

    //顶部菜单点击切换
    var topNav = $("#top-nav");
    $("#header").find(".open-icon").on("click",function(){
        $("#top-nav").slideToggle();
        topNav.find("li").on("click",function () {
            $("#top-nav").slideUp();
        });
    });

    topNav.find("li").on("click",function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    //监听滚动事件切换顶部菜单
    var section1 = $("#main").find(".section.s1");
    var section2 = $("#main").find(".section.s2");
    var section3 = $("#main").find(".section.s3");
    var sec1Height = section1.height();                          //section1的可视高度
    var sec2Height = section2.height();                          //section1的可视高度
    //监听滚动事件
    $(window).scroll(function () {
        var scrollH = $(window).scrollTop();                        //jquery获取滚动条高度
        if (scrollH < sec1Height) {                                    //当滚动高度大于section1高度
            topNav.find("li").eq(0).addClass("active").siblings().removeClass("active")
        }
        if (scrollH > sec1Height) {                                    //当滚动高度大于section1高度
            topNav.find("li").eq(1).addClass("active").siblings().removeClass("active")
        }
        if (scrollH > sec2Height) {
            topNav.find("li").eq(2).addClass("active").siblings().removeClass("active")
        }
    });


    //点击导航栏滚动事件
    scroll($("#top-nav li:first"), 0, 200);
    scroll($("#top-nav li:eq(1)"), section2.offset().top - 20, 400);
    scroll($("#top-nav li:eq(2)"), section3.offset().top, 600);
    //使用jquery匀速回到顶部
    function scroll(obj, scrollTop, speed) {
        obj.on("click",function () {
            $("body").animate({scrollTop: scrollTop}, speed);
        });
    }




});