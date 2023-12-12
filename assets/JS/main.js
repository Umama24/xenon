/* Counter */
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

/* OWL Carousel */
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        item: 1,
        loop: true,
        nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: true,
        dotsData: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true
            }
        }
    });
  });