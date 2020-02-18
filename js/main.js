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




});