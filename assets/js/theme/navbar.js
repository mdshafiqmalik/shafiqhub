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
$('nav').html(`<!-- top bar -->
<div class="top-bar d-lg-block d-none">
  <div class="container">
    <div class="row">
      <div class="col-6">

        <div class="news">
          <span class="stat text-uppercase">new</span>
          <a href="#">Learn more about digital marketing, SEO, SEM techniques</a>
        </div>
      </div>
      <div class="col-6">
        <!-- links -->
        <ul class="links list-unstyled mb-0 d-flex align-items-center justify-content-end">
          <li>
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="mailto:shafiqhub@earnmore.tech?subject=Shafiq%20Hub%20Contact%20Us%20Mail">Contact Me </a>
          </li>
          <li>
            <a href="./sitemap.xml">Sitemap</a>
          </li>
          <li>
            <a href="./terms-and-privacy.html">Terms & Privacy</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<!-- navbar content -->
<div class="container">
  <!-- brand -->
  <a class="navbar-brand" href="index.html">
    <img src="./assets/images/logoFile/logo-w.png" class="img-fluid d-lg-block d-block" alt="Shafiq Hub">
  </a>
  <!-- toggler -->
  <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <!-- collapse menu -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">

      <!-- nav item -->
      <li class="nav-item">
        <a class="nav-link nav-first-link" id="Home" href="index.html">Home</a>
      </li>
      <!-- nav item -->
      <li class="nav-item">
        <a class="nav-link" id="Blogs" href="./blog/index.html">Blog</a>
      </li>
      <!-- nav item -->
      <li class="nav-item">
        <a id="Newsletter" id="Newsletter" class="nav-link" href="#aboutMe">About Me</a>
      </li>
      <!-- nav item -->
     <li class="nav-item d-lg-none">
       <a class="nav-link" id="ContactUs" href="mailto:shafiqhub@earnmore.tech?subject=Shafiq%20Hub%20Contact%20Us%20Mail">Contact Me</a>
    </li>
    </ul>
  </div>
</div>`);
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
