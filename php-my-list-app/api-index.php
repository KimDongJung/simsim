<?php
header("Content-Type: application/json; charset=utf-8");

// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);

$server_name = 'localhost';
$db_name = 'simsim';
$user_name = 'root';
$user_password = '';

try {
  $connect = new PDO("mysql:host=${server_name};dbname=${db_name}", $user_name, $user_password);
  $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo 'Connected successfully';

  $statement = $connect->prepare('INSERT INTO php_my_list_app (message) VALUES (:message)');
  $statement->bindParam(':message', $message);

  $message = $data->message;
  $statement->execute();

  echo "New records created successfully";
}
catch (PDOException $error) {
  echo 'Connection failed: ' . $error->getMessage();
}


// $person = [];
// $is_post_request = $_SERVER['REQUEST_METHOD'] == 'POST' ? true : false;

// if ($is_post_request) {
//   foreach ($_POST as $post_key => $post_value) {
//     $person[$post_key] = $post_value;
//   }
// }



// echo json_encode($person, JSON_UNESCAPED_UNICODE);
echo json_encode($data, JSON_UNESCAPED_UNICODE);