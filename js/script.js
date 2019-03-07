$(document).ready(function () {  /*ensures code worked*/

	/*sticky navigation*/
	$('.js--section-features').waypoint(function(direction) { /*scrolling is direction*/
		if (direction == "down"){
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;'
	});

    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    

    /* Navigation scroll */
	$('a[href*="#"]')
  	// Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	   	if (
	    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      	&& 
	      	location.hostname == this.hostname
	    	) {
	      	// Figure out element to scroll to
	      	var target = $(this.hash);
	      	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      	// Does a scroll target exist?
	    if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	    	event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	    if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	    } else {
	        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	    	$target.focus(); // Set focus again
	    	};
	    });
		}
		}
  	});

    /*Animation on scroll*/
    $('.js--wp-1').waypoint(function(direction) {
    	$('.js--wp-1').addClass('animated fadeIn');
    }, {
    	offset: '50%'
    });

	$('.js--wp-2').waypoint(function(direction) {
    	$('.js--wp-2').addClass('animated fadeInUp');
    }, {
    	offset: '50%'
    });    
	$('.js--wp-3').waypoint(function(direction) {
    	$('.js--wp-3').addClass('animated fadeIn');
    }, {
    	offset: '50%'
    });    
    $('.js--wp-4').waypoint(function(direction) {
    	$('.js--wp-4').addClass('animated pulse');
    }, {
    	offset: '50%'
    });    

    /*mobile navigation*/

    $('.js--nav-icon').click(function() {
    	var nav = $('.js--main-nav'); /*results of selectin navigation, store .main nav list in variable called nav*/
    	var icon = $('.js--nav-icon i'); /* change icon */

    	nav.slideToggle(200); /* open and close a box */
    	if (icon.hasClass('ion-navicon-round')) {
    		icon.addClass('ion-close-round'); /* ad nav icon of interset*/
    		icon.removeClass('ion-navicon-round');
    	} else {
    		icon.addClass('ion-navicon-round');
    		icon.removeCLass('ion-close-round');
    	}
    });

    /*Maps*/ 
    GMaps({
  		div: '.map',
  		lat: -12.043333,
  		lng: -77.028333
	});

});