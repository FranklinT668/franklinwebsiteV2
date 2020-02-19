$(document).ready(function () {

    //-----------Fixed Navbar Position------------
    let navOffsetTop = $('.header_area').height() - 100;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= navOffsetTop) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }
    navbarFixed();

        
    //-----------Navbar onclick smoothscroll------------
    $('.navbar a').on('click', function (x) {
    if (this.hash !== '') {
        x.preventDefault();

        const hash = this.hash;

        $('html, body')
        .animate({
            scrollTop: $(hash).offset().top
        },600);
    }
    });

    //-----------Downbutton onclick smoothscroll------------
    $('.downbutton').on('click', function (x) {
        if (this.hash !== '') {
            x.preventDefault();
    
            const hash = this.hash;
    
            $('html, body')
            .animate({
                scrollTop: $(hash).offset().top
            },600);
        }
        });




    //-----------Load particles js------------
    particlesJS.load('particles-js', 'particles-cfg.json', function() {
    console.log('callback - particles.js config loaded');
  });



    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = 100 + docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, apply animate css effects 
    $(window).scroll(function() {
      $('.intro-area').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).addClass('pulse');
        }
      });
    });

    $(window).scroll(function() {
        $('.skills-area').each(function() {
          if (isScrolledIntoView(this) === true) {
            $(this).addClass('pulse');
          }
        });
      });

      $(window).scroll(function() {
        $('.projects-area').each(function() {
          if (isScrolledIntoView(this) === true) {
            $(this).addClass('pulse');
          }
        });
      });

      $(window).scroll(function() {
        $('.achieves-area').each(function() {
          if (isScrolledIntoView(this) === true) {
            $(this).addClass('pulse');
          }
        });
      });

      $(window).scroll(function() {
        $('.interests-area').each(function() {
          if (isScrolledIntoView(this) === true) {
            $(this).addClass('pulse');
          }
        });
      });

});