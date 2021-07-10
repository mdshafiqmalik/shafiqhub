<!DOCTYPE html>
<?php
include 'app.php';
 ?>
<html>
<head>
  <!-- :: Meta -->
  <meta charset="UTF-8">
  <meta http-equiv="Cache-Control" content="no-store">
  <meta http-equiv="Cache-Control" content="no-cache">
  <meta property="fb:pages" content="112504700372629" />
  <meta property="og:locale" content="en_US" />
  <meta name="linkedin:site" content="@shafiqhub" />
  <meta name="twitter:site" content="@shafiqhub" />
  <meta name="apple-mobile-web-app-title" content="Shafiq Hub" />
  <meta property="og:site_name" content="Shafiq Hub" />
  <meta name="application-name" content="Shafiq Hub" />
  <meta property="og:type" content="website" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Mohd. Shafiq Malik">
  <meta name="msapplication-tap-highlight" content="no">
  <meta name="theme-color" content="#222">
  <link rel="stylesheet" href="../assets/css/index/index.min.css">
  <link rel="stylesheet" href="../assets/css/lib/bootstrap.css">
  <link rel="stylesheet" href="style.css?version=1.1">
  <link rel="stylesheet" href="../assets/css/lib/font-awesome.min.css">
  <link rel="stylesheet" href="../assets/css/theme/navfooter.min.css">
  <link href='./favicon.ico' rel='icon' sizes="32x32"  type='image/x-icon'/>
  <link href='./favicon.ico' sizes="16x16" rel='icon' type='image/x-icon'/>
  <link href='./favicon.ico' sizes="48x48"  rel='icon' type='shortcut icon'/>
  <link rel='apple-touch-icon' sizes="180x180" type='apple-touch-icon image_src' href='./favicon.ico'/>
  <title>Shafiq Hub - Admin Panel </title>
</head>
<body>
  <!-- :: Navbar -->
<nav class="navbar navbar-expand-lg">
    <!-- navbar content -->
    <div class="container">
      <!-- brand -->
      <a class="navbar-brand" href="index.html">
        <h1 id="logoText">Shafiq Hub</h1>
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
          <a class="nav-link nav-first-link" id="Home" href="./index.html">Home</a>
        </li>
        <!-- nav item -->
        <li class="nav-item">
          <a class="nav-link" id="Blogs" href="./blog/index.html">Blog</a>
        </li>
        <!-- nav item -->
        <li class="nav-item">
          <a id="Newsletter" id="Newsletter" class="nav-link" href="./index.html/#aboutMe">About Me</a>
        </li>
        <!-- nav item -->
        <li class="nav-item d-lg-none">
          <a class="nav-link" id="ContactUs" href="mailto:contactshafiqhub@gmail.com?subject=Shafiq%20Hub%20Contact%20Us%20Mail">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="icontainer row">
<?php
foreach ( $GLOBALS['decoded_data'] as $array) {
  $otjson = file_get_contents("../{$array}/data.json");
  $otbj = json_decode($otjson);
  $state = str_replace("-"," ",$array);
  print '<div class="vx col-lg-12">
      <div class="area">
      <span>'.$state.' </span>
      <div class="lists">';
foreach ($otbj->published as $otarray) {
    $to_str = str_replace("-"," ",$otarray);
    print '<div class="posts">'.$to_str.'</div>';
    }
print '
<form id="create_post">
<input  type="text" name="" value="">
<input  type="submit" value="Create" name="submit"></input>
</form>
</div></div></div>';
}
 ?>

 <div class="vx col-lg-12">
   <div class="area">
     <form class="" action="" method="post">
       <span>Create new folder</span><br><br>
       <input id="t-1" type="text" name="folder" value="">&nbsp; &nbsp; <input type="submit" name="submit" value="Ceate">
       <p id="message"> </p>
   </div>
 </div>
 </div>

<!--  Footer -->
<footer>
  <!-- links -->
  <div class="row container">
    <div class= "row col-lg-6 col-md-7 col-sm-12 AboutUs">
      <!-- Content -->
      <div class="content">
        <h4 class="title">Why Shafiq Hub ?</h4>
        <hr  style="  margin-top: .3rem; border:1.5px solid white; width:267px; margin-left:0; background-color:white;">
        <p class="mb-0">Shafiq Hub is a website build to help you to earn money online. We help you to explore top online earning methods from internet through this website</p>
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
              <li><a href="../blogging" class="text-uppercase">Blogging</a></li>
              <li><a href="../investment" class="text-uppercase">Investing</a></li>
              <li><a href="../how-to-guides" class="text-uppercase">How to Guides</a></li>
              <li><a href="../online-earning" class="text-uppercase">Online Earning</a></li>
            </ul>

          </div>

          <!-- col -->
          <div class="col-lg-6 col-md-6 col-sm-5 col-5 mb-lg-0 mb-3">
            <ul class="list-unstyled mb-0">
              <li class="title text-uppercase mb-3">Pages</li>
              <li><a href="./blog/index.html" class="text-uppercase">Blogs</a></li>
              <li><a href="mailto:contactshafiqhub@gmail.com?subject=Shafiq%20Hub%20Contact%20Us%20Mail" class="text-uppercase">Contact me</a></li>
              <li><a href="#aboutMe" class="text-uppercase">about me</a></li>
              <li><a href="./terms-and-privacy.html" class="text-uppercase">Terms and privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- copyrights -->
  <div class="c-r text-center">
    <div class="row container n-2">
      <div class="col-lg-6 col-md-6 col-sm-12">
          <p class="mb-0">&copy; 2021 Shafiq Hub | All Right Reserved
          </p>
          <p class="comment mb-0">Developed and Owned By
            <a href="./index.html#aboutMe" target="_blank">Shafiq Malik
            </a>
          </p>
      </div>
      <div class="wrapper col-lg-6 col-md-6 col-12">
        <ul>
          <li class="facebook"><a href="https://www.facebook.com/shafiqhub/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li class="twitter"><a href="https://twitter.com/MdShafiqMalik"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li class="linkedin"><a href="https://in.linkedin.com/company/shafiq-hub"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li class="whatsapp"><a href="https://wa.me/0916006982206"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
        </ul>
      </div>
      </div>
   </div>
</footer>
<!-- :: Scripts -->
<script type="text/javascript" src="../assets/js/lib/jquery-bootstrap-popper.js?version=1.0"></script>
<script type="text/javascript" src="../assets/js/theme/navbar.min.js?version=1.0"></script>
<script type="text/javascript" src="app.js?version=1.0"></script>
<!-- <script type="text/javascript" src="./assets/js/index/index.min.js?version=1.0"></script> -->
</body>
</body>
</html>
