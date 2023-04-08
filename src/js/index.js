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


  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  

  function toggleSlide(item) {
    $(item).each(function (i){
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //Modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay,#consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function() {
    $('.overlay,#consultation, #feedback, #order').fadeOut('slow');
  });


  $('.button_catalog').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

function validate(forms) {
  $(forms).validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
        phoneType: 'number',

      },
      email: {
        required: true,
        email: true,
      },  
    },
    messages : {
      name: "Пожалуйста введите имя",
      phone: "Пожалуйста введите номер телефона",
      email: "Пожалуйста введите email",
    }
  });
}

validate('#consultation form');
validate('#order form');
validate('#consultation-form');
