/*
$.fn.inView = function(){
    //Window Object
    var win = $(window);
    //Object to Check
    obj = $(this);
    //the top Scroll Position in the page
    var scrollPosition = win.scrollTop();
    //the end of the visible area in the page, starting from the scroll position
    var visibleArea = win.scrollTop() + win.height();
    //the end of the object to check
    var objEndPos = (obj.offset().top + obj.outerHeight());
    return(visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
};

$(document).ready(function() {
    var flag = false,
        window_h = $(window).outerHeight(),
        mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"; // событие прокрутки колеса

    function getDelta(e){
        var evt = e || window.event;
        evt = evt.originalEvent ? evt.originalEvent : evt;
        return delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta;
    }

    // ловим событие прокрутки
    $(document).on(mousewheelevt+'.my_wheel', function(e){
        e.preventDefault();

        /!*if (active_scroll !== true) {
            return;
        }*!/


        console.log($(window).scrollTop() + ($(window).height() / 2));

        if ( getDelta(e) < 0 ) { // down
            var currentElem = $(e.target),
                currrentElemClossest = currentElem.closest('.scroll-section');

            var needToScroll = currrentElemClossest.next();

            $('html, body').animate({
                scrollTop: needToScroll.offset().top - 60
            }, 300);

        } else if (getDelta(e) > 0) { // up
            var currentElem = $(e.target),
                currrentElemClossest = currentElem.closest('.scroll-section');

            var needToScroll = currrentElemClossest.prev();

            if(needToScroll === 'undefined') {
                $('html, body').animate({
                    scrollTop: $('.header').offset().top
                }, 300);
            } else {
                $('html, body').animate({
                    scrollTop: needToScroll.offset().top - 60
                }, 300);
            }
        }

        return false;
    });
});

function getNextElement(el) {
    if(el.next() === true) {
        return getNextElement(el.next());
    } else {
        return el.next();
    }
}
/!*
    /!*$(window).bind('mousewheel DOMMouseScroll', function(event){
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            // scroll up
        }
        else {
            // scroll down
            console.log(event)
        }
    });*!/

    var active_scroll = true;


    if ($(".site-wrapper").outerWidth() > 960) {

    }


    $(window).resize(function(){
        if ($(".site-wrapper").outerWidth() > 960) {
            full_screen();
        }
        active_scroll_f();
    });

    active_scroll_f();

    function active_scroll_f() {
        if ($(".site-wrapper").outerWidth() > 960) {
            active_scroll = true;
        } else {
            active_scroll = false;
        }
    }

    $(function(){
        var flag = false,
            window_h = $(window).outerHeight(),
            mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"; // событие прокрутки колеса

        function getDelta(e){
            var evt = e || window.event;
            evt = evt.originalEvent ? evt.originalEvent : evt;
            return delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta;
        }

        // ловим событие прокрутки
        $(document).on(mousewheelevt+'.my_wheel', function(e){
            e.preventDefault();

            /!*if (active_scroll !== true) {
                return;
            }*!/

            var allScrollDivs = $('.section-scroll');

            if ( getDelta(e) < 0 ) { // down
                console.log(allScrollDivs);

            } else if (getDelta(e) > 0) { // up
                console.log(2);
            }

            return false;
        });
    });


    function elementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top >= window.pageYOffset &&
            left >= window.pageXOffset &&
            (top + height) <= (window.pageYOffset + window.innerHeight) &&
            (left + width) <= (window.pageXOffset + window.innerWidth)
        );
    }

})(jQuery);*!/
*/
