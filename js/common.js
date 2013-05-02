$(document).ready(function() {

//  --------------- Baron scroll ------------------ //
    function baron_js() {
        if ($(".js-baron-list").length > 0) {
            baron({
                scroller: '.baron__in .baron__scroller',
                bar: '.baron__scrollerbar',
                barOnCls: 'baron',
            });
        }
        else {}
    }
    baron_js();

// ---------- Show/hide sidebar -------------------- //
    $(".js-sidebar-key").click(function(){
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $(".sidebar").animate({
                left: -367
            }, 200);
        }  
        else{
            $(this).addClass("is-active");
            $(".sidebar").animate({
                left: 0
            }, 200);
        }
    });

// ---------------- Accordion -------------------- //
    $(".js-accord-body").hide();
    $(".js-accord").click(function(){
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $(this).next().slideUp("fast");
        }  
        else{
            $(".js-accord-body").slideUp("fast");
            $(".js-accord").removeClass("is-active");
            $(this).addClass("is-active");
            $(this).next().slideDown("fast");
        }
        baron_js();
    });

// ---------------- Select list -------------------- //
    function select_list() {
        $(".js-select-list").hide();
        $(".js-select").click(function(){
            if ($(this).hasClass("is-active")) {
                $(this).removeClass("is-active");
                $(this).next().slideUp("fast");
            }  
            else{
                $(this).addClass("is-active");
                $(this).next().slideDown("fast");
            }
        });
        $(".js-select-list li").click(function(){
            var select = $(this).parent().parent().find(".js-select");
            var text = $(this).text();
            select.find("span").text(text);
            select.removeClass("is-active");
            $(this).parent().slideUp("fast");

        });
    }
    select_list();

// ---------------- Sidebar height -------------------- //
    function height() {
        var height = $(window).height() - $(".topper").outerHeight() - $(".header").outerHeight();
        $(".js-sidebar").height(height);
        var height_list = height - $(".footer").outerHeight() - $(".catalog__title").outerHeight();
        $(".js-baron-list").height(height_list);
        baron_js();
    }
    height();

    $(window).resize(function(){
        height();
    });

});