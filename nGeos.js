

getUserLanguage = function () {
  // The logic for determining the user language
var language ="";
   //first, we check if user is connected and take his/her language preference from his/her profile
   if (Meteor.user()) {
     language = "de";
   }
   else if (Cookie.get('language') !== undefined)
      {
         language = Cookie.get('language');
      }
   else if (navigator.language !== null)
      {
         language = navigator.language;      
      }
   
return language;

};


if (Meteor.isClient) {
    
   Meteor.startup(function () {
    Session.set("showLoadingIndicator", true);

    TAPi18n.setLanguage(getUserLanguage())
      .done(function () {
        Session.set("showLoadingIndicator", false);
      })
      .fail(function (error_message) {
        // Handle the situation
        console.log(error_message);
      });
  });
   
   
   
    Template.landingBody.rendered = function () {
        $.getScript('/js/smoothscroll.js');
        $.getScript('/js/jquery.superslides.js'); 
        $.getScript('/js/retina-1.1.0.js');  
        $.getScript('/js/theme.js');
        $.getScript('/js/jquery.cubeportfolio.min.js');
 
       
    
        //Superslides 
		$('#slides').superslides({
		    slide_easing: 'easeInOutCubic',
		    slide_speed: 800,
		    pagination: true,
		    hashchange: false,
		    scrollable: true,
		    animation: 'fade'
		});
        //$.getScript('/js/map.js');
       
   
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
         $('#grid-container').cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        rewindNav: true,
        scrollByPage: false,
        animationType: 'rotateSides',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        caption: 'overlayBottomPush',
        displayType: 'sequentially',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
        },

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'below',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 5000
                })
                .done(function(result) {

                    t.updateSinglePageInline(result);

                })
                .fail(function() {
                    t.updateSinglePageInline("Error! Please refresh the page!");
                });
        }
    });
	   });

       
       
    			// Menu settings
			$('#menuToggle').on('click', function(){
        
         // if ($('#theMenu').hasClass('menu-open'))
         // {
         // }
        //else
         // {
            $('#theMenu').css("zIndex", 11);
            $('.menu-close').css("zIndex", 12);
				    $('#menuToggle').toggleClass('active');
				    $('body').toggleClass('body-push-toleft');
				    $('#theMenu').toggleClass('menu-open'); 
                $('#languages').toggleClass('languages-open');
             $('#toggleIcon').toggleClass('ion-chevron-left');
             $('#toggleIcon').toggleClass('ion-chevron-right');
         // }
			});
      
        $('.menuitem').on('click', function(){
            $('#theMenu').css("zIndex", 8);
            $('.menu-close').css("zIndex", 8);
				    $('#menuToggle').toggleClass('active');
				    $('body').toggleClass('body-push-toleft');
				    $('#theMenu').toggleClass('menu-open'); 
                $('#languages').toggleClass('languages-push-toleft');
             $('#toggleIcon').toggleClass('ion-chevron-left');
             $('#toggleIcon').toggleClass('ion-chevron-right');
			  });

}

}

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup


});
}