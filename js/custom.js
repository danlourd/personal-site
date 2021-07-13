// JavaScript Document

$(window).load(function () {
  "use strict";
  // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({
    'overflow': 'visible'
  });
})

$(document).ready(function () {
  "use strict";

  // scroll menu
  var sections = $('.section'),
  nav = $('.navbar-fixed-top,footer'),
  nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        console.log($(this).attr('id'));
        console.log($(this));
        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });

  nav.find('a').on('click', function () {
    var $el = $(this),
    id = $el.attr('href');

    $('html, body').animate({
       scrollTop: $(id).offset().top - nav_height + 2
    }, 600);

    return false;
  });


  // Menu opacity
  if ($(window).scrollTop() > 80) {
    $(".navbar-fixed-top").addClass("bg-nav");
  } else {
    $(".navbar-fixed-top").removeClass("bg-nav");
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
      $(".navbar-fixed-top").addClass("bg-nav");
    } else {
      $(".navbar-fixed-top").removeClass("bg-nav");
    }
  });



  // Parallax
  var parallax = function () {
    $(window).stellar();
  };

  $(function () {
    parallax();
  });

  // AOS
  AOS.init({
    duration: 1200,
    once: true,
    disable: 'mobile'
  });

  //  isotope
  $('#projects').waitForImages(function () {
    var $container = $('.portfolio_container');
    $container.isotope({
      filter: '*',
    });

    $('.portfolio_filter a').click(function () {
      $('.portfolio_filter .active').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          animationEngine: "jquery"
        }
      });
      return false;
    });

  });

  //animatedModal
  $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07").animatedModal();

  function hideContent(contentName) {
    if (contentName === "demo01") {
      $("#demo01_content").removeClass('collapse');
    } else {
      $("#demo01_content").addClass('collapse');
    }
    if (contentName === "demo02") {
      $("#demo02_content").removeClass('collapse');
    } else {
      $("#demo02_content").addClass('collapse');
    }
    if (contentName === "demo03") {
      $("#demo03_content").removeClass('collapse');
    } else {
      $("#demo03_content").addClass('collapse');
    }
    if (contentName === "demo04") {
      $("#demo04_content").removeClass('collapse');
    } else {
      $("#demo04_content").addClass('collapse');
    }
    if (contentName === "demo05") {
      $("#demo05_content").removeClass('collapse');
    } else {
      $("#demo05_content").addClass('collapse');
    }
    if (contentName === "demo06") {
      $("#demo06_content").removeClass('collapse');
    } else {
      $("#demo06_content").addClass('collapse')
    }
    if (contentName === "demo07") {
      $("#demo07_content").removeClass('collapse');
    } else {
      $("#demo07_content").addClass('collapse');
    }
  }

  $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07").on('click', function (e) {
    hideContent(e.currentTarget.id);
  });

  $(".form-control").keypress(function () {
    var disableSubmit = $('input[name="name"]').val() === ""
      || $('input[name="email"]').val() === ""
      || $('textarea[name="message"]').val() === ""
    $("#submit").prop('disabled', disableSubmit); 
  });
});