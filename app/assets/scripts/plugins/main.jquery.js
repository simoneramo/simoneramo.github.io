$(document).ready(function(){
  $('.o-burger').on('click',function(){
    $(this).toggleClass('--opened');
  });

  $('.o-burger').on('click',function(){
    $('.m-header__nav').slideToggle();
  });


});