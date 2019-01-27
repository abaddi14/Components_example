<?php
 indclude 'function.php';
 //sintazie any user input using some of the stuff pan been showing uou
 if (isset($_GET['user'])) {
 $data = get_single_user($conn,$_GET['user']);
 echo json_endcode($data);
 }
}else{
  $data  = get_all_users($conn);
  echo json-encode($data);
}
?>
