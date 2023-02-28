<?php
// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);
$is_init_content = (!empty($data->type) && $data->type === 'init');
$is_add_content = (!empty($data->type) && $data->type === 'add');
$is_delete_content = (!empty($data->type) && $data->type === 'delete');
$server_name = 'localhost';
$db_name = 'simsim';
$user_name = 'root';
$user_password = '';

try {
  $connect = new PDO("mysql:host=${server_name};dbname=${db_name}", $user_name, $user_password);
  $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  if ($is_init_content) {
    $statement = $connect->prepare("SELECT * FROM php_my_list_app");

    $statement->execute();

    $result = $statement->setFetchMode(PDO::FETCH_ASSOC);
    $result = $statement->fetchAll();
  }
  if ($is_init_content) {
    
  }
  if ($is_add_content) {
    $statement = $connect->prepare('INSERT INTO php_my_list_app (message) VALUES (:message)');
    $statement->bindParam(':message', $message);

    $message = $data->message;
    $statement->execute();

    // DRY
    $statement = $connect->prepare("SELECT * FROM php_my_list_app");

    $statement->execute();

    $result = $statement->setFetchMode(PDO::FETCH_ASSOC);
    $result = $statement->fetchAll();
  }

  if ($is_delete_content) {
    $content_id = $data->target_id;
    $sql = "DELETE FROM php_my_list_app WHERE id=${content_id}";
    $connect->exec($sql);

    // DRY
    $statement = $connect->prepare("SELECT * FROM php_my_list_app");

    $statement->execute();

    $result = $statement->setFetchMode(PDO::FETCH_ASSOC);
    $result = $statement->fetchAll();
  }

  

}
catch (PDOException $error) {
  echo 'Connection failed: ' . $error->getMessage();
}

header("Content-Type: application/json; charset=utf-8");
// echo json_encode($person, JSON_UNESCAPED_UNICODE);
echo json_encode($result, JSON_UNESCAPED_UNICODE);
