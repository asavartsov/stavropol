$(document).ready(function() {

//  --------------- Baron scroll ------------------ //
    if ($(".js-baron-list").length > 0) {
        baron({
            scroller: '.baron__in .baron__scroller',
            bar: '.baron__scrollerbar',
            barOnCls: 'baron',
        });
    }
    else {}

// ---------- Show/hide sidebar -------------------- //
    $(".js-sidebar-key").click(function(){
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $(".sidebar").addClass("is-hidden");
        }  
        else{
            $(this).addClass("is-active");
            $(".sidebar").removeClass("is-hidden");
        }
    });

    function height() {
        var height = $(window).height() - $(".topper").outerHeight() - $(".header").outerHeight();
        $(".js-sidebar").height(height);
        var height_list = height - $(".footer").outerHeight() - $(".catalog__title").outerHeight();
        $(".js-baron-list").height(height_list);
        if ($(".js-baron-list").length > 0) {
            baron({
                scroller: '.baron__in .baron__scroller',
                bar: '.baron__scrollerbar',
                barOnCls: 'baron',
            });
        }
        else {}
    }
    height();
    $(window).resize(function(){
        height();
    });

});