$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1000,
    arrow: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src= "img/icons/chevron-left-solid.svg" alt="arrow"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src= "img/icons/chevron-right-solid.svg" alt="arrow"></button>',
  });

  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }

  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  //Modal

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay,#consultation").fadeIn("slow");
  });

  $(".modal__close").on("click", function () {
    $(".overlay,#consultation, #feedback, #order").fadeOut("slow");
  });

  $(".button_catalog").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__description").text(
        $(".catalog-item__subtitle").eq(i).text()
      );
      $(".overlay, #order").fadeIn("slow");
    });
  });

  // function validateForms(forms) {
  //   $(forms).validate({
  //     rules: {
  //       name: {
  //         required: true,
  //         minLength: 2,
  //       },
  //       phone: "required",
  //       email: {
  //         required: true,
  //         email: true,
  //       },
  //     },
  //     messages: {
  //       name: {
  //         required: "Пожалуйста, введите имя",
  //         minLength: jQuery.validator.format("Введите больше {2} символов!"),
  //       },
  //       phone: "Пожалуйста, введите номер телефона",
  //       email: "Пожалуйста, введите email",
  //     },
  //   });
  // }

  // validateForms("#consultation form");
  // validateForms("#order form");
  // validateForms("#consultation-form");

  jQuery(function ($) {
    $("input[name=phone]").mask("+375 (99) 999-99-99");
  });

  $("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("#consultation, #order").fadeOut();
      $(".overlay, #feedback").fadeIn("slow");

      $("form").trigger("reset");
    });
    console.log("AJAX request");
    return false;
  });

//Scroll
  $(window).scroll(function (e) {
    if($(this).scrollTop() > 1600){
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  } 
  ).fadeIn("slow");
  
  const $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({scrollTop: $($.attr(this, 'href')).offset().top}, 1000);
      return false;
  });
  
  new WOW().init();
  
});




