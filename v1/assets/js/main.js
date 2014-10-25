// Document Ready
$(document).ready(function() {

	var slideCount = $('.slider ul li').length;
	var slideWidth = $('.slider ul li').width();
	var slideHeight = $('.slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('.slider').css({ width: slideWidth, height: slideHeight });
	
	$('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('.slider ul li:last-child').prependTo('.slider ul');

    function moveLeft() {
        $('.slider ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('.slider ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    $('.control-prev').click(function () {
        moveLeft();
        return false;
    });

    $('.control-next').click(function () {
        moveRight();
        return false;
    });
    
    $('.typespec-tg-btn').click(function () {
    	$('.typespec-horizontal-wrap h3').removeClass('active');
    	$(this).addClass('active');
        $('.typespec-tg').delay(300).fadeIn(300);
        $('.typespec-es').fadeOut(300);
    });
    
    $('.typespec-es-btn').click(function () {
    	$('.typespec-horizontal-wrap h3').removeClass('active');
    	$(this).addClass('active');
        $('.typespec-es').delay(300).fadeIn(300);
        $('.typespec-tg').fadeOut(300);
    });
    
    $('.mino-grid-btn').click(function () {
    	$('.mino-compared-wrap h3').removeClass('active');
    	$(this).addClass('active');
        $('.mino-grid').delay(300).fadeIn(300);
        $('.mino-preview').fadeOut(300);
    });
    
    $('.mino-preview-btn').click(function () {
    	$('.mino-compared-wrap h3').removeClass('active');
    	$(this).addClass('active');
        $('.mino-preview').delay(300).fadeIn(300);
        $('.mino-grid').fadeOut(300);
    });
	
	var distance = 1000;
	$(".move-right-btn, .btn-cv, .btn-posts").click(function() {
	    $("html:not(:animated), body:not(:animated)").animate(
	        {scrollLeft: "+="+distance}, 600
	    );
	});
	
	$(window).scroll(function() {
	   var distanceLeft = $(document).scrollLeft();
	   var isLeft = false;
	   if ( distanceLeft > 500){ isLeft = true; $(".project .next-wrap").show();} 
	   else if ( distanceLeft < 500){ isLeft = false; $(".project .next-wrap").hide();}
	});
	
	if ($('#featured-slider').length > 0) {
		$('#featured-slider').royalSlider({
		    arrowsNav: true,
		    loop: true,
		    keyboardNavEnabled: true,
		    controlsInside: false,
		    imageScaleMode: 'fill',
		    autoScaleSlider: false, 
		    autoScaleSliderWidth: 960,     
		    autoScaleSliderHeight: 580,
		    transitionType:'move',
		    slidesSpacing: 0
		});
	}
	$('#featured-slider img').hide().delay(500).fadeIn(500);
	
	if ($('#feature-carousel').length > 0) {
		$("#feature-carousel").touchCarousel({				
			itemsPerPage: 1,				
			scrollbar: true,
			scrollbarAutoHide: false,
			pagingNavControls: false,
			directionNav: true,   
			scrollbarTheme: "light",				
			pagingNav: true,
			snapToItems: false,
			scrollToLast: false,
			useWebkit3d: true,				
			loopItems: false,
			autoplay: true, 
		});	
	}
	
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        // console.log('Safari on Mac detected, applying class...');
        $('html').addClass('safari'); // provide a class for the safari-mac specific css to filter with
    }
	    
});
// /Document Ready