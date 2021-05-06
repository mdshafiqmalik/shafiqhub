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

$('footer').html(`<div class="row container">
      <div class= "row col-lg-6 col-md-7 col-sm-12 AboutUs">
        <!-- Content -->
        <div class="content">
          <h6 class="title">Why Shafiq Hub ?</h6>
          <hr  style="  margin-top: .3rem; border:1.5px solid white; width:267px; margin-left:0; background-color:white;">
          <p class="mb-0"> This website is intended to help those people who want to start their carrier in making websites and blogs. If you are stucked in your blogging carrier then you are on the right place.</p>
        </div>
      </div>
      <div class="links col-lg-6 col-md-5 col-sm-12">
        <div>
          <!-- row -->
          <div class="row">
            <!-- col -->
            <div class="col-lg-6 col-md-6 col-sm-7 col-7 mb-lg-0 mb-3">
              <ul class="list-unstyled mb-0">
                <li class="title text-uppercase mb-3">Topics</li>
                <li><a href="#" class="text-uppercase">Starting a blog</a></li>
                <li><a href="#" class="text-uppercase">boost blog traffic</a></li>
                <li><a href="#" class="text-uppercase">tips and trciks</a></li>
                <li><a href="#" class="text-uppercase">earn from blogs</a></li>
              </ul>

            </div>

            <!-- col -->
           <div class="col-lg-6 col-md-6 col-sm-5 col-5 mb-lg-0 mb-3">
             <ul class="list-unstyled mb-0">
               <li class="title text-uppercase mb-3">Pages</li>
               <li><a href="./blog/index.html" class="text-uppercase">Blogs</a></li>
               <li><a href="mailto:shafiqhub@earnmore.tech?subject=Shafiq%20Hub%20Contact%20Us%20Mail" class="text-uppercase">Contact me</a></li>
               <li><a href="#aboutMe" class="text-uppercase">about me</a></li>
               <li><a href="./terms-and-privacy.html" class="text-uppercase">Terms and privacy</a></li>
             </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- copyrights -->
    <div class="n-2">
      <div class="c-r text-center">
        <div class="container">
          <p class="mb-0">&copy; 2021 Shafiq Hub | All Right Reserved
          </p>
          <p class="comment mb-0">Developed and Owned By
            <a href="./index.html#aboutMe" target="_blank">Shafiq Malik
            </a>
          </p>
        </div>
      </div>
    </div>`);
// Widnow Location jQuery
}(jQuery));
