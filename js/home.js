$(function(){
  $('#timeline-slider').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false,
    
    appendDots: $('#timeline-nav')
  });
});