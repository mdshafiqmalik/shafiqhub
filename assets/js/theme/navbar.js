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
$.getScript('https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js', function () {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKjB8oCGQ6oBWTdUQea18vsJLIAsU5NFE",
  authDomain: "shafiqhub-db.firebaseapp.com",
  databaseURL: "https://shafiqhub-db-default-rtdb.firebaseio.com",
  projectId: "shafiqhub-db",
  storageBucket: "shafiqhub-db.appspot.com",
  messagingSenderId: "647856676003",
  appId: "1:647856676003:web:04d1b539d00471b2db7316",
  measurementId: "G-Z5TN9P43EY"
};
firebase.initializeApp(firebaseConfig);
var rootRef = firebase.database().ref();
var pageViewsRef = rootRef.child('pageviews');
if (window && window.location && window.location.pathname) {
// update page views
  var pathkey = slug(window.location.pathname);
  pageRef = pageViewsRef.child(pathkey);
  var counted = false;

  pageRef.on('value', function (pageviews) {
    var pageviewsCount = pageviews.val();
    var $pageviews = $('.pageviews');
    $pageviews.attr('title', pageviewsCount + ' people saw this post');
    $pageviews.text(pageviewsCount);
    $pageviews.addClass('initialized');
    if (!counted) {
      counted = true;
      pageRef.transaction(function (views) {
        return views + 1;
      });
    }
  });
}
});
