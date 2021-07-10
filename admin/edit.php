<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <script type="text/javascript">
    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
    </script>
    <?php
    $data_path = "./template.json";
    $get_data = file_get_contents($data_path);
    $decoded_data = json_decode($get_data);
    ?>


    <form class="" action="" method="post">
        <input id="has" type='text' name='data' value="<?php echo $decoded_data->hello ?>">
        <input type="submit" name="submit" value="Update">
        <span id="message"></span>
    </form>
    <?php
    if (isset($_POST["submit"])) {
      $new_data = $_POST["data"];
      $decoded_data->hello = $new_data;
      $encd = json_encode($decoded_data);
    }
     ?>
  </body>
</html>
