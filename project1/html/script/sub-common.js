$(document).ready(function(){
//sub common top
$('.top').on('click', function(){
      var target = $('body')
      $('html, body').stop().animate({scrollTop:target.offset().top-0}, 800);
   });

$(window).scroll(function(){
    var target = $(document).height() - 1200;
    if($(window).scrollTop() >= target){
        $('.top').css('position','absolute');
    }else{
        $('.top').css('position','fixed');
    }
    
    if($(window).scrollTop()>=200){
        $('.top').css('display','block');
    }else{
        $('.top').css('display','none');
    }
})

//sub common scroll header & lnb fixed
$(window).scroll(function(){
    if($(window).scrollTop()>=204){
        $('#header').css({
            'position':'absolute',
            'top':'204px'
        });
    }else{
        $('#header').css({
            'position':'fixed',
            'top':0
        });
    }
    
    if($(window).scrollTop()>=334){
        $('.visual').css('margin-bottom','77px');
        $('.lnb').css({
            'position':'fixed',
            'left':0,
            'top':0,
            'z-index':10,
        });
        $('.lnb-logo').css('display','block');
        
    }else{
        $('.visual').css('margin-bottom',0);
        $('.lnb').css('position','relative');
        $('.lnb-logo').css('display','none');
    }
})

//sub-02 category-list
var tabMenu = $('.category-list');

tabMenu.find('li').click(tabList)

function tabList(){
    var index = $(this).index();
    
    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
    $(this).find('ul').show();
    $(this).siblings('li').find('ul').hide();
    
    if(index>3){
        tabMenu.css('margin-bottom','60px');
        tabMenu.find('li').css('margin-bottom',0);
        tabMenu.find('ul').css({
            'top':'100px',
            'left':'-1px',
            'border':'1px solid #474a4d',
            'border-top':0
        });
        tabMenu.find('li:nth-child(n+5):nth-child(-n+8)').css('border-top',0);
    }else{
        tabMenu.find('li:nth-child(n+1):nth-child(-n+4)').css('margin-bottom','50px');
        tabMenu.find('ul').css({
            'top':'50px',
            'border':0,
            'border-bottom':'1px solid #474a4d'
        });
    }
}

//sub-02 product
var tabBtn = $('.product-btn');

tabBtn.on('click',function(){
    tabBtn.removeClass('active');
    $(this).addClass('active');
    tabBtn.next().hide();
    $(this).next().show();
})

//sub-04,sub-05 select
var sel = $('.select');

sel.find('ul li').hover(function(){
    $(this).addClass('active').siblings('li').removeClass('active');
},function(){
    sel.find('ul li').removeClass('active');
   sel.find('ul li').eq(0).addClass('active'); 
});

//sub-02,sub-04,sub-05 page
var page = $('.page ul li').eq(2);

page.find('a').click(function(){
    page.find('a').removeClass('active');
    $(this).addClass('active');
})

//sub-05 question-menu
var question = $('.question-menu li a');

question.on('click', function(){
    question.removeClass('active');
    $(this).addClass('active');
})

//sub-05 question-list
var board = $('.question-list > li > p > a');
board.click(ques)

function ques(){
    var list = $(this).parents('li');
    
    list.toggleClass('active');
    list.siblings('li').removeClass('active');
    list.find('div').slideToggle(200);
    list.siblings('li').find('div').stop().slideUp(200);
}
})