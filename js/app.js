$(document).foundation();

smoothScroll.init({
  selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
  speed: 1000, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutQuint', // Easing pattern to use
  updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
});

$('.current-year').text(new Date().getFullYear());

function flipImage() {
	$('.card').toggleClass('flipped');
}

setInterval(function(){ 
	flipImage()
}, 5000);

/*
$('.flip').click(function(){
  $(this).find('.card').addClass('flipped').mouseleave(function(){
    $(this).removeClass('flipped');
  });
  return false;
});
*/