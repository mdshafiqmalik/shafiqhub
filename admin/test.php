<?php $i_data_path = "../data.json";
$get_data = file_get_contents($i_data_path);
$GLOBALS['decoded_data'] = json_decode($get_data);
FunctionName();
function FunctionName()
{
  print $decoded_data;
}

 ?>
