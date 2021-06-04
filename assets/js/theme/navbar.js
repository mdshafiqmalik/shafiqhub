(function ($) {
'use strict';
// -- :: Loading Page
$('html').css('overflow-y', 'visible');
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

//Breadcrumbs based on URL location
if ($('#siteBreadcrumb ul.breadcrumb')) {
  var here = location.href.replace(/(\?.*)$/, '').split('/').slice(3);

  var parts = [{
    "text": 'Home',
    "link": '/'
  }];

  for (var j = 0; j < here.length; j++) {
    var part = here[j];
    var pageName = part.toLowerCase();
    pageName = part.charAt(0).toUpperCase() + part.slice(1);
    var link = '/' + here.slice(0, j + 1).join('/');
    $('#siteBreadcrumb ul.breadcrumb').append('<li><a href="' + link + '">' + pageName.replace(/\.(htm[l]?|asp[x]?|php|jsp)$/, '') + '</a></li>');
    parts.push({
      "text": pageName,
      "link": link
    });
  }
}
