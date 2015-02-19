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
            $('#logBut').toggleClass('loginButtonDiv-open');
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
            $('#logBut').toggleClass('loginButtonDiv-open');
            $('#languages').toggleClass('languages-open');
            $('#toggleIcon').toggleClass('ion-chevron-left');
            $('#toggleIcon').toggleClass('ion-chevron-right');
			  });