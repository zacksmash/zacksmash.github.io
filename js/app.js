$(document).foundation();

smoothScroll.init({
  selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
  speed: 1000, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutQuint', // Easing pattern to use
  updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
});

$('.current-year').text(new Date().getFullYear());