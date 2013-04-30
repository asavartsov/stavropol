$(document).ready(function() {

//  --------------- Baron scroll ------------------ //
    if ($(".baron__in").length > 0) {
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

});