<?php
$GLOBALS['i_data_path'] = "../data.json";
$GLOBALS['get_data'] = file_get_contents($GLOBALS['i_data_path']);
$GLOBALS['decoded_data'] = json_decode($GLOBALS['get_data']);
if (isset($_POST['submit'])){
  if (!empty($_POST['folder'])) {
    $r_folder_name = $_POST['folder'];
    $folder_name = text_to_link($r_folder_name);
    // create Folder
    $is_folder_created = create_folder($folder_name);
    if ($is_folder_created) {
      // edit $i_data_path
      $i_data_json_edited = edit_data_json($folder_name);
      if ($i_data_json_edited) {
        // create json in that folder
        $is_json_created = create_json($folder_name);
        if ($is_json_created) {
        }
      }
    }
  }
  else
  {

  }
}
function edit_data_json($val){
  array_push($GLOBALS['decoded_data'] , $val);
  $encoded_data = json_encode($GLOBALS['decoded_data'], JSON_PRETTY_PRINT);
  if (file_put_contents($GLOBALS['i_data_path'], $encoded_data)) {
      return true;
  }else {
    return false;
  }
}

function create_json($folder_name){
  $myjson = fopen("../".$folder_name."/data.json","w");
  $data = '{
    "published":[],
    "drafts":[]
  }';
  fwrite($myjson, $data);
  fclose($myjson);
}

function create_folder($f_name){
  if (mkdir("../${f_name}")) {
    return true;
  }else {
    return false;
  }
}

function text_to_link($name){
  $i = mb_strtolower($name);
  $j = str_replace(" ","-",$i);
  return $k = preg_replace('/[^A-Za-z0-9\-]/', '', $j);
}
?>
