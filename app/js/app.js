/*window.addEventListener('DOMContentLoaded', function() {
    QueryLoader2(document.querySelector("body"), {
        barColor: "#efefef",
        backgroundColor: "#111",
        percentage: true,
        barHeight: 1,
        minimumTime: 200,
        fadeOutTime: 1000
    });
});*/

$(document).ready(function() {
    $(window).scrollTop(0);

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

    var scrollElems = document.querySelectorAll('[data-scroll]');

    for(var i=0; i < scrollElems.length; i++) {

        $(scrollElems[i]).click(function(e) {
            e.preventDefault();

            var currentHref = $(this).attr('href'),
                scrollDiv = $(currentHref),
                windowHeight = $(window).height();

            if(!(windowHeight < scrollDiv.height())) {
                var needleOffset = (windowHeight - scrollDiv.height()) / 2;

                $('body, html').animate({
                    scrollTop: $(scrollDiv).offset().top - needleOffset
                });

            } else {
                $('html, body').animate({
                    scrollTop: $(scrollDiv).offset().top - 50
                });
            }

            if(history.pushState) {
                history.pushState(null, null, currentHref);
            }
            else {
                location.hash = currentHref;
            }
            return false;
        });
    }

    if($(window).width() < 768) {
        var lightBtnElems = $('*[data-uk-lightbox]');
        $(lightBtnElems).click(function (e) {
            e.preventDefault();

            return false;
        });
    }



    setTimeout(function() {
        (function () {
            var currentHash = location.hash;
            for(var i=0; i < scrollElems.length; i++) {
                if($(scrollElems[i]).attr('href') === currentHash) {
                    $(scrollElems[i]).click();
                }
            }
        })();
    }, 200)
});


