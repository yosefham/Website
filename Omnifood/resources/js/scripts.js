$(document).ready(function() {
   
    /* for the sticky nav */
    var waypoint = new Waypoint({
    element: document.getElementById('features'),
    handler: function(direction) {
        if(direction == 'down'){
            $('nav').addClass('sticky-nav');
        } else{
            $('nav').removeClass('sticky-nav');
        }
    },
    offset: '60px;'
    })

    

    /* navigation scroll */ 
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({scrollTop: target.offset().top}, 1000);
                return false;
            }
          }
        });
      });


      /* animations on scroll */ 

    new Waypoint({
        element: document.getElementById('features-row'),
        handler: function(direction) {
            $('.js--wp-1').addClass('animate__animated animate__fadeInLeft');
        },
        offset: '70%'
    })

    new Waypoint({
        element: document.getElementById('steps'),
        handler: function(direction) {
            $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
        },
        offset: '40%'
    })
    new Waypoint({
        element: document.getElementById('cities'),
        handler: function(direction) {
            $('.js--wp-3').addClass('animate__animated animate__flipInX');
        },
        offset: '40%'
    })
    new Waypoint({
        element: document.getElementById('plans'),
        handler: function(direction) {
            $('.js--wp-4').addClass('animate__animated animate__pulse');
        },
        offset: '40%'
    })


    /* Mobile nav */
    $('.js--nav-icon').click(function() {
        var nav =$('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if ( icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    })


});