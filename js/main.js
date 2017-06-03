$(document).ready(function($) {
	textBoxToggleAnimation();
	textBoxValidationFields();
	navMenusMouseUp();
	toggleRightSidebarNav();

	new WOW().init();
});

function textBoxToggleAnimation() {
	var current_fs, next_fs, previous_fs;
	var left, opacity, scale;
	var animating;

	$("#next-button").click(function() {
		if(animating) return false;
		animating = true;
		
		current_fs = $(this).parents('.input-group');
		next_fs = $(this).parents('.input-group').next();
		
		next_fs.css({'display':'table'}); 
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//scale = 1 - (1 - now) * 0.2;
				//left = (now * 50)+"%";
				//opacity = 1 - now;
				//current_fs.css({'transform': 'scale('+scale+')'});
				//next_fs.css({'left': left, 'opacity': opacity});
			}, 
			duration: 1000, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			easing: 'easeInOutBack'
		});
	});
}

function textBoxValidationFields() {
	$('#invite-form input[type="text"]').on('change keyup paste', function() {
    fullname = $(this).val();
    var refullname = /^[a-zA-Z ]{2,30}$/;
    if (refullname.test(fullname)) {

      $(this).parent().find('a.btn').removeClass('disabled').addClass('enabled');
      $(this).parent().find('a.btn').attr('disabled', false);
    } else {
      $(this).parent().find('a.btn').addClass('disabled').removeClass('enabled');
      $(this).parent().find('a.btn').attr('disabled', true);
    }
  });

  $('#invite-form input[type="email"]').on('change keyup paste', function() {
    email = $(this).val();
    var reemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))|[0-9]{10}$/;

    if (reemail.test(email)) {

      $(this).parent().find('a.btn').removeClass('disabled').addClass('enabled');
      $(this).parent().find('a.btn').attr('disabled', false);
    } else {
      $(this).parent().find('a.btn').addClass('disabled').removeClass('enabled');
      $(this).parent().find('a.btn').attr('disabled', true);
    }
  });
}

function navMenusMouseUp(){
	$(document).mouseup(function (e) {
	  container = $("nav.menus");
	  if (!container.is(e.target) && container.has(e.target).length === 0) {
    	if(container.hasClass('show-nav')) {
	    	container.removeClass('show-nav');
				container.find('.nav-toggle').removeClass('show-nav');
    	}
    }
	});
}

/** side bar jquery start **/
function toggleRightSidebarNav() {
	if($(window).width() <= 767) { 

		var menus = $(".navigation-right-sidebar .menus"),
	  menusLinks = $(".menus ul li a"),
	  toggle = $(".nav-toggle");

	  $(toggle).on('click', function() {
	  	if (menus.hasClass("show-nav")) {
				if (!Modernizr.csstransforms) {
					menus.removeClass("show-nav");
					toggle.removeClass("show-nav");
					menus.animate({
						right : "-=146"
					}, 500);
					toggle.animate({
						right : "-=146"
					}, 500);
				} else {
					menus.removeClass("show-nav");
					toggle.removeClass("show-nav");
				}
			} else {
				if (!Modernizr.csstransforms) {
					menus.addClass("show-nav");
					toggle.addClass("show-nav");
					menus.css("right", "0px");
					toggle.css("right", "146px");
				} else {
					menus.addClass("show-nav");
					toggle.addClass("show-nav");
				}
			}
	  })
	}

	if($(window).width() >= 768) {

		var navbarMenus = $(".navbar"),
	  navbarLinks = $(".navbar ul li a"),
	  toggle = $(".nav-toggle");

	  $(toggle).on('click', function() {
	  	if (navbarMenus.hasClass("show-nav")) {
				if (!Modernizr.csstransforms) {
					navbarMenus.removeClass("show-nav");
					toggle.removeClass("show-nav");
					navbarMenus.animate({
						top : "-=60"
					}, 500);
					toggle.animate({
						top : "-=60"
					}, 500);
				} else {
					navbarMenus.removeClass("show-nav");
					toggle.removeClass("show-nav");
				}
			} else {
				if (!Modernizr.csstransforms) {
					navbarMenus.addClass("show-nav");
					toggle.addClass("show-nav");
					navbarMenus.css("top", "0px");
					toggle.css("top", "60px");
				} else {
					navbarMenus.addClass("show-nav");
					toggle.addClass("show-nav");
				}
			}
	  })
	}
	
}



/** For Video  **/
$(document).ready(function($) {
	$('#open-popup').magnificPopup({
  	 items: [
    		{
      		src:"https://player.vimeo.com/video/117632624" , type: 'iframe' // this overrides default type
        }, 
      ],
     	gallery: {
     	enabled: true
  		},
  	type: 'video'
 	});

});

/** Slick JS **/
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  centerMode: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  centerPadding: '0px'
});
/** Slick JS Ends **/

/** parallex-effect **/
(function() {
	var parallax = document.querySelectorAll(".parallax"),
	speed = 0.6;
			 
	window.onscroll = function() {
		[].slice.call(parallax).forEach(function(el, i) {
		 	var windowYOffset = window.pageYOffset,
			elBackgrounPos = "0 " + (windowYOffset * speed) + "px";							 
			el.style.backgroundPosition = elBackgrounPos;
		});
	};

})();
/** parallex-effect Ends **/