<?php
$message ='';
$error ='';

if (isset($_POST["submit"])) {
  if (empty($_POST["Uname"])) {
    $error = "<label>Enter Name</label>";
  }elseif (empty($_POST["Ueamil"])) {
    $error = "<label>Enter Email</label>";
  }else {
    if (file_exists('data.json')) {
      $current_data = file_get_contents('data.json');
      $array_data = json_decode($current_data);
      $extra = array('Name' => $_POST['Uname'] ,
      'Email' => $_POST['Ueamil']
     );
     $array_data[] = $extra;
     $final_result = json_encode($array_data);
     if (file_put_contents('data.json', $final_result)) {
       $message = "<label>Data Submitted Succesfully<label>";
     }
    }else {
      $error ="<label>File not exist</label>";
    }
  }
}
 ?>
