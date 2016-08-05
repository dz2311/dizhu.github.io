// JavaScript Document
$(document).ready(function(){
    $('.slider').slider({full_width: true});
    $('.slider-left-arrow').click(function(){
      $('.slider').slider('prev');
    });
    $('.slider-right-arrow').click(function(){
      $('.slider').slider('next');
    });
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    $('body').on("tap", function(){
      if($('fixed-action-btn').hasClass('active'))
        closeFABMenu($('fixed-action-btn'));
    })
});