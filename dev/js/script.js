$(document).ready(function() {  
   $('.js__banner__slider').slick({
	nextArrow: '.banner__slider-next',
	prevArrow: '.banner__slider-prev',
   dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1
	});
    
     $('.js__recent-works__slider').slick({
	nextArrow: '.recent-works__slider-next',
	prevArrow: '.recent-works__slider-prev',
   dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1
	});
    
     $('.js__gallery-slider').slick({
	nextArrow: '.gallery-slider__slider-next',
	prevArrow: '.gallery-slider__slider-prev',
   dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1 
	
     });
    
    
$('#nav-icon').on('click', function (e) {
        e.preventDefault();
        $('#main-menu__list').slideToggle();
        $(this).toggleClass('active');
    });
    
$('#footer-nav-icon').on('click', function (e) {
        e.preventDefault();
        $('#footer-menu__list').slideToggle();
        $(this).toggleClass('active');
    });     
  
    
});
        

