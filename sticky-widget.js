/* Skrip ini hasil modifikasi dari : https://ayamjantan25.blogspot.co.id/2017/01/cara-membuat-widget-mengikuti-scroll.html; */
$(function() {
    var widgetSticky = $('#widget');
    var stopSticky = $('#footer-wrapper');
    if ( widgetSticky.length ) {
        var stickyTop = widgetSticky.offset().top;
        var stickyHeight = widgetSticky.height();
        $(window).scroll(function() {
            var limit = stopSticky.offset().top - stickyHeight - 50;
            var windowTop = $(window).scrollTop();
            if (stickyTop < windowTop) {
                widgetSticky.css({
                    position: 'fixed',
                    top: '50px',
                    width: '31.333333%'
                });
            } else {
                widgetSticky.css({
                    position: 'static',
                    width: '100%'
                });
            }
            if (limit < windowTop) {
                var diff = limit - windowTop;
                widgetSticky.css({
                    top: diff
                });
            }
        });
    }
});
