//图片懒加载方法
//传入三个参数   要懒加载的对象 默认的图片地址  存放真实图片地址的属性名
var lazyLoad = (function () {

    // 函数防抖  在函数节流的基础上间隔固定时间一定会执行一次
    // 调用的方法 ，至少多久会触发一次 ，延迟执行的时间
    function preShake(method , duration ,delay ){
        var timer = null,
        // 记录下开始执行函数的时间
            begin = new Date();

        return function(){
            var context = this,
                args = arguments,
            // 记录下当前时间
                current = new Date();
            // 函数节流里的思路
            clearTimeout(timer);

            // 记录下的两个时间相减再与duration进行比较
            if(current-begin >= duration){
                method.apply(context , args);
                begin = current;
            }else{
                timer = setTimeout(function(){
                    method.apply(context , args);
                } , delay);
            }
        }
    }

    /*函数节流方法*/
    //使用原因：resize，scroll，mousedown，mousemove，keydown等事件频繁被触发，因而会频繁执行dom操作，导致ui停顿或浏览器崩溃
    //思想：利用定时器，预先设定一个执行周期，当调用的动作时刻大于这个执行周期才会执行该动作(延迟执行)
    function throttle(method, delay) {
        var timer = null;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                method.apply(context, args);
            }, delay);
        }
    }

    /*懒加载方法*/
    function lazyFn(imgList, defaultSrc, relAttr) {
        var clientH = document.documentElement.clientHeight;                                 //页面可视高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;       //页面滚动高度

        //遍历需要懒加载的对象
        for (var i = 0; i < imgList.length; i++) {
            var disY = clientH + scrollTop;

            //图片距离页面顶部的距离小于可视区域+滚动高度  且图片没有被加载过
            if (imgList[i].getBoundingClientRect().top < disY && !imgList[i].isLoad) {
                imgList[i].isLoad = true;                                                    // 加上标记  图片已被加载
                imgList[i].style.trasition = '1s';
                imgList[i].style.opacity = '0';

                //将真实图片地址赋值给src属性
                if (imgList[i].getAttribute("src") == defaultSrc) {
                    imgList[i].src = imgList[i].getAttribute(relAttr);
                }

                //延时淡入淡出效果
                (function (i) {
                    setTimeout(function () {
                        imgList[i].style.transition = '1s';
                        imgList[i].style.opacity = 1;

                    }, 30)
                })(i);
            }
        }
    }


    return {
        lazyFn:lazyFn,
        preShake:preShake,
        throttle: throttle
}


})();
