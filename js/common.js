$(document).ready(function() {

	// ---------- jScrollPane -------------------- //
		$('.scroll-pane').jScrollPane({
			autoReinitialise: true,
			verticalDragMaxHeight: 80,
			mouseWheelSpeed: 10,
			verticalGutter: 0,
		});

	// ---------------- Sidebar/jScrollPane height -------------------- //
	    function sidebar_height() {
	    	var height_head = $(".header").height();
	        var height = $(window).height() - height_head;
	        $(".js-sidebar").height(height);
	        $(".scroll-pane").height(height-30);
	    }
	    sidebar_height();

		$(window).resize(function(){
			sidebar_height();
			scroll_api.reinitialise();
		});

	// ---------- Show/hide sidebar -------------------- //
		$(".js-sidebar-key").click(function(){
			if ($(this).hasClass("is-active")) {
				$(this).removeClass("is-active");
				$(".sidebar").animate({
					left: -367
				}, 200);
				$(".js-icon").html("&#215;");
			}
			else{
				$(this).addClass("is-active");
				$(".sidebar").animate({
					left: 0
				}, 200);
				$(".js-icon").html("&#212;");
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

	// ---------------- POPUP .login-popup -------------------- //
	    $('.js-login').click(function() {
	     if ($(this).hasClass('is-active')) {
	      $(this).removeClass('is-active');
	      $('.login-popup').fadeOut();
	     }
	     else {
	      $(this).addClass('is-active');
	      $('.login-popup').fadeIn();
	     }
	     return false;
	    });
	    $('.js-links').click(function() {
	     if ($(this).hasClass('is-open')) {
	      $(".js-links").removeClass('is-open');
	      $(".js-popups").fadeOut();
	     }
	     else {
	      $(".js-links").removeClass('is-open');
	      $(this).addClass('is-open');
	      $(".js-popups").fadeOut();
	      $(this).next().fadeIn();
	     }
	    });

	// ---------------- POPUP .js-links input select -------------------- //
		$(".js-input").click(function() {
			$(this).select();
		});


	// ---------------- Dropdown menu -------------------- //
		$("<select />").appendTo(".header__nav");

		$("<option />", {
		 "selected": "selected",
		 "value"   : "",
		 "text"    : "Меню"
		}).appendTo(".header__nav select");

		$(".header__nav a").each(function() {
		var el = $(this);
		$("<option />", {
		   "value"   : el.attr("href"),
		   "text"    : el.text()
		}).appendTo(".header__nav select");
		});

		$(".header__nav select").change(function() {
		window.location = $(this).find("option:selected").val();
		});

	// ---------------- Placeholder -------------------- //
		$('[placeholder]').placeholder();

});
