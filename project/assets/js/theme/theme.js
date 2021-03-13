(function ($) {

  'use strict';

  // -- :: Loading Page
  $(window).on('load', function () {
    $('#loading').fadeOut(1000);
    $('html').css('overflow-y', 'visible');
  });
  // ----------------------------------

  // -- :: Navbar
  $(window).on('scroll', function () {
    if($(window).scrollTop() > 20 ) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  });

  $('nav button').on('click', function() {
    $($(this).data('target')).fadeToggle();
  });

  $(document).ready(function () {
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
  // ----------------------------------------------------------


}(jQuery));
