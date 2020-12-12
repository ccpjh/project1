$(document).ready(function(){    
//main visual swiper 
var swiper = new Swiper('.vs-ban', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
     autoplay: {
         delay:3000,
         disableOnInteraction: false,
     },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
    });

$('.start').on('click', function(){
    swiper.autoplay.start();
    $('.start').stop().hide();
    $('.stop').stop().show();
    return false;
});
$('.stop').on('click', function(){
    swiper.autoplay.stop();
    $('.start').stop().show();
    $('.stop').stop().hide();
    return false;
});
 
//main news swiper
var swiper2 = new Swiper('.news-ban', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
     autoplay: {
         delay:3000,
         disableOnInteraction: false,
     },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

//sub-02 category swiper
var swiper3 = new Swiper('.category-slide', {
      slidesPerView: 6,
      spaceBetween: 28,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.category-next',
        prevEl: '.category-prev',
      },
    });     
})