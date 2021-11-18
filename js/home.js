$(function(){
  $('#timeline-slider').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false,
    
    appendDots: $('#timeline-nav'),
    responsive: [
      {
        breakpoint: 568,
        settings: {
          dots: false,
          arrows: true,
          adaptiveHeight: true
        }
      }
    ]
  });
});