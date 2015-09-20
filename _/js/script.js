$('.hamburger').on('click', function() {
  $(this).toggleClass('open');
  var openclose = $(this).hasClass('open') ? 'Close' : 'Open';
  $(this).attr("title", openclose + ' Menu');
});