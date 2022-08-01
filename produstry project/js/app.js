$(function(){
  $(".menuToggler").click(function () {
    let logo = $("nav .navbar-logo");
    let navMenu = $("#customNav ul");
    logo.toggleClass("activeLogo");
    navMenu.toggleClass("activeNavMenu");
  });



    $('.banner-images').slick({
      prevArrow: ".leftarrow",
      nextArrow: ".rightarrow",
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      fade: true,
    });
    $('.service-slider').slick({
      slidesToShow: 3,
      autoplay: true,
      prevArrow: ".serviceleftarrow",
      nextArrow: ".servicerightarrow",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('.blog-sliders').slick({
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      // autoplay: true,
      prevArrow: ".blogLeftArrow",
      nextArrow: ".blogRightArrow",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    })
    $("#counter1").countMe(20,10);
    $("#counter2").countMe(20,10);
    $("#counter3").countMe(20,10);
    $("#counter4").countMe(20,10);

  });