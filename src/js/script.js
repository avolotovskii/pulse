$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1300,
        /*         adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/right.svg"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
});