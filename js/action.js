$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $('.venobox').venobox({
      spinner: 'cube-grid'
    }); 

    // // Portfolio details carousel 
    // $('.owl-carousel').owlCarousel({
    //   autoplay: true,
    //   dots: true,
    //   loop: true,
    //   items: 1
    // });

  });