<?php
$server_name = 'localhost';
$db_name = 'simsim';
$user_name = 'root';
$user_password = '';

try {
  $connect = new PDO("mysql:host=${server_name};dbname=${db_name}", $user_name, $user_password);
  $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $statement = $connect->prepare("SELECT * FROM php_my_list_app");
  $statement->execute();
  $result = $statement->setFetchMode(PDO::FETCH_ASSOC);
  var_dump($result);
  $result = $statement->fetchAll();
  var_dump($result);
}
catch (PDOException $error) {
  echo 'Connection failed: ' . $error->getMessage();
}