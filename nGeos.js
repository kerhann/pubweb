Menu = new Mongo.Collection("menu");


if (Meteor.isClient) {
    
    Template.body.helpers({

  });
    
    
    Template.body.helpers({
    menu: function () {
      return Menu.find({ isTitle: {$ne: true} }, {sort: {weight: -1}});
    },
    menutitle: function () {
      return Menu.find({ isTitle: true }, {});
    }
  });

  Template.menu_title.rendered = function () {
 
        $.getScript('/js/smoothscroll.js');
      
  }
    
    
  Template.menuitem.rendered = function () {
 
        $.getScript('/js/smoothscroll.js');
    
        
		// Menu settings
			$('#menuToggle').on('click', function(){
                $('#theMenu').css("zIndex", 11);
                $('.menu-close').css("zIndex", 12);
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});
            $('.menu-close').on('click', function(){
                $('#theMenu').css("zIndex", 8);
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});

    
    	
}
    
    
    Template.hello.rendered = function () {
 
        $.getScript('/js/retina-1.1.0.js');
        $.getScript('/js/jquery.cubeportfolio.js');    
        $.getScript('/js/theme.js');
        $.getScript('/js/smoothscroll.js');
    
        //Superslides 
		$('#slides').superslides({
		    slide_easing: 'easeInOutCubic',
		    slide_speed: 800,
		    pagination: true,
		    hashchange: false,
		    scrollable: true,
		    animation: 'fade'
		});

    
        // Banner text add parallax efect and fade
        function EasyPeasyParallax() {
	       scrollPos = $(this).scrollTop();
	       $('#slider').css({
               'background-position': '50% ' + (-scrollPos / 4) + "px"
	       });
	       $('#bannertext').css({
	           'margin-top': (scrollPos / 4) + "px",
	           'opacity': 1 - (scrollPos / 250)
	       });
	     }
	   $(document).ready(function () {
	       $(window).scroll(function () {
                EasyPeasyParallax();
	       });
	   });
    
    			// Menu settings
			$('#menuToggle').on('click', function(){
                $('#theMenu').css("zIndex", 11);
                $('.menu-close').css("zIndex", 12);
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});
            $('.menu-close').on('click', function(){
                $('#theMenu').css("zIndex", 8);
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});

}
    
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
