

getUserLanguage = function () {
  // The logic for determining the user language
var language = "";
   //first, we check if user is connected and take his/her language preference from his/her profile
   // if (Meteor.user()) {
   //  language = "de";
   //} 
   //elseif (Cookie.get('language') !== undefined)
   //   {
   //      language = Cookie.get('language');
   //   }
   //else 
   //   {
         language = navigator.language;      
   //   }
   
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
       
       // I don't know why but it seems that I need to include smoothscroll.js at this stage in order to make it work. 
       // It probably has to be loaded after the menu is rendered.
       // Smoothscroll makes the menu item bring you smoothly to the right section of the page.
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
         
         //Portfolio
         $.getScript('/js/portfolio.js');

       
         //Manage the menu toggle (open and close)
    	   $.getScript('/js/menu.js');
    });
}

                        }
                        	   

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup


});
}