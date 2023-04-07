$(document).ready(function(){
    $('.carousel__inner').slick({
        speed : 2000,
        autoplay: true,
        autoplaySpeed: 1000,
        arrow: true,
        prevArrow: '<button type="button" class="slick-prev"><img src= "img/icons/chevron-left-solid.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src= "img/icons/chevron-right-solid.svg" alt="arrow"></button>'
    });
  });