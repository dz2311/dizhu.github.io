// JavaScript Document
$(document).ready(function(){
    $('.slider').slider({full_width: true});
    $('.slider-left-arrow').click(function(){
      $('.slider').slider('prev');
    });
    $('.slider-right-arrow').click(function(){
      $('.slider').slider('next');
    });
});