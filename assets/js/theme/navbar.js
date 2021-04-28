(function ($) {
'use strict';
// -- :: Loading Page
$('#l-m').html("loading...");
$(window).on('load', function () {

  $('#loading').fadeOut(1000);
  $('html').css('overflow-y', 'visible');
});
// ----------------------------------
// -- :: Navbar
$(window).on('scroll', function () {
  if($(window).scrollTop() > 20 ) {
    $('.top-bar').removeClass('d-lg-block');
    $('nav').css('padding-top', '20px');
    $('nav').addClass('scrolled');
  } else {
    $('nav').removeClass('scrolled');
    $('.top-bar').addClass('d-lg-block');
  }
});

$('nav button').on('click', function() {
  $($(this).data('target')).fadeToggle();
});
document.addEventListener("DOMContentLoaded",function(){
  if ($(document).width() < 974) {
    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
  } else {
    return false;
  }
});


// Widnow Location jQuery
}(jQuery));
