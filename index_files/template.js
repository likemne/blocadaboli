$(document).ready(function() {
  var hamburger = jQuery('.hamburger');
  hamburger.on('click', function (e) {
  	hamburger.toggleClass('is-active');
  });
});