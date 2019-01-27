<?php
include 'connect.php'

function get_single_user ($pdo,$user) {
$query = "SELECT * FROM users WHERE id ='$user'";
$get_user = $pdo-> query(query);
$result = array();
while ($row = $get_user->fetch(POD::FETCH_ASSOC))  {
  $results[] = $row;
}

  return $results;
}
function get_all_users)($pdo) {
  $query= "SELECT * FROM users";
  $result = array();
  while($row = $get_user->fetch(POD::FETCH_ASSOC)) {
    $results [] = $row;
  }
return $results
}
