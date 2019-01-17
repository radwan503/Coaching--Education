//navbar sticky animation


    $(window).scroll(function () {
            var scrollh = $(this).scrollTop();
            if (scrollh == 0) {
                $(".navbar-default").css({
                    'padding': '15px',
                    'transition':'.5s'
                    
                , });
                  $(".navbar-brand ").css({
                    'margin-top': '2px',
                       'transition':'.5s'
                    
                , });
               
                  $(".navbar-default .navbar-nav > li > a  ").css({
                    'margin-top': '10px',
                       'transition':'.5s'
                    
                , });
                 $(".navbar-brand > img ").css({
                    'display': 'block',
                'height': '32px'
                    
                    
                    
                , });
                
            }
            else {
                $(".navbar-default").css({
                    'padding': '0px',
                    'transition':'.5s'
                , });
                 $(".navbar-brand").css({
                    'margin-top': '0px',
                       'transition':'.5s'
                , });
                  $(".navbar-default .navbar-nav > li > a  ").css({
                    'margin-top': '0px',
                       'transition':'.5s'
                    
                , });
                  $(".navbar-brand > img ").css({
                    'display': 'block',
   'height': '20px',
                      'margin-top': '0px'
                      
                    
                , });
            }
        });



// slider js

(function( $ ) {

    //Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
    $('#carousel-example-generic').carousel({
        interval:3000,
        pause: "false"
    });
	
})(jQuery);	

//image slider js

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

// values slider0005



//gallry image

$(document).ready(function() {
$('.thumbnail').click(function(){
      $('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
});





