/**
 * Created by Administrator on 2016/12/28 0028.
 */
$(function () {

    //楼盘配套tab切换
    $("#block-facility-tab li:first").addClass("active");
    $("#block-facility-info").find(".facility-info-list").eq(0).show();
    $("#block-facility-tab li").click(function(){
        var index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("#block-facility-info").find(".facility-info-list").eq(index).show().siblings().hide();
    });

    var clientW = $(window).width();
    var clientH = $(window).height();
    //头部导航栏
    var openIcon = $("#header").find("span.open-icon");
    var topNav = $("#top-nav");
    //点击图标展开菜单
    openIcon.click(function () {
        topNav.slideToggle(200);
        topNav.click(function () {
            $(this).slideUp();
        });
    });
    topNav.find("li").click(function(){
       $(this).addClass("active").siblings().removeClass("active");
    });

    var section1 = $("#main").find(".section.s1");
    var section2 = $("#main").find(".section.s2");
    var section3 = $("#main").find(".section.s3");
    var sec1Height =section1.height();                          //section1的可视高度
    var scrollH = $(window).scrollTop();                        //jquery获取滚动条高度
    //监听滚动事件
    $(window).scroll(function () {
        if (scrollH > 300) {                             //当滚动高度大于section1高度
            section2.addClass("active");
        }
    });


    //点击导航栏滚动事件
    scroll($("#top-nav li:first"), 0, 200);
    scroll($("#top-nav li:eq(1)"), section2.offset().top-20, 400);
    scroll($("#top-nav li:eq(2)"), section3.offset().top, 600);
    //使用jquery匀速回到顶部
    function scroll(obj, scrollTop, speed) {
        obj.click(function () {
            $("body").animate({scrollTop: scrollTop}, speed);
        });
    }





});