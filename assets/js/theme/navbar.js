(function ($) {
  let mobToc = document.getElementById('mobToc');
  let deskToc = document.getElementById('sb');
'use strict';
// -- :: Loading Page
$('html').css('overflow-y', 'visible');
// ----------------------------------
// -- :: Navbar
$(window).on('scroll', function () {
  if($(window).scrollTop() > 20 ) {
    $('.top-bar').removeClass('d-lg-block');
    $('.sp').css('top','.5rem');
    $('nav').addClass('scrolled');
  }else {
    $('nav').removeClass('scrolled');
    $('.top-bar').addClass('d-lg-block');
    $('.sp').css('top','auto');
  }
});
$(window).on('scroll', function (){
  if($(window).scrollTop() > 40 ) {
    mobToc.innerHTML = "";
    deskToc.innerHTML = breadCrumb;
  }else {
    mobToc.innerHTML = breadCrumb;
    deskToc.innerHTML = "";
  }
});



$('nav button').on('click', function() {
  $($(this).data('target')).fadeToggle();
});
// Posts
document.addEventListener("resize", function(){
  if($(document).width() < 991) {
      mobToc.innerHTML = breadCrumb;
      deskToc.innerHTML = "";
  }
  else{
    mobToc.innerHTML = "";
    deskToc.innerHTML = breadCrumb;
  }
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
