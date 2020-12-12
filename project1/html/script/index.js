$(document).ready(function(){    
//main scroll click
$('.scroll').on('click', function(){
      var target = $('#product')
      $('html, body').animate({scrollTop:$(target).offset().top-0}, 800);
   });
})
