$(document).ready(function(){    
$('[href="#"]').click(function(e){
    e.preventDefault();
})

//main form
var h_sch = $('.search-btn a');

h_sch.click(function(){
    $(this).next().show();
});

$('form .close').click(function(){
    $(this).parents('form').hide();
})

//main lang

var lang = $('.lang > a');

lang.click(function(){
    $(this).next().slideToggle();
})

//main gnb focus

$('.header-gnb > ul > li > a').on('focusin', function(){
    $('.header-gnb ul ul').show();
    $('.gnb-bg').show();
})
$('.header-gnb ul ul li a').last().on('focusout', function(){
    $('.header-gnb ul ul').hide();
    $('.gnb-bg').hide();
})   
})
