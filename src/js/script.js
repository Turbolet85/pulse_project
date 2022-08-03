
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevronLeft.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevronRight.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
    });
});