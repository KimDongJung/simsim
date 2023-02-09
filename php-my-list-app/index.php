<?php
  // $server_name = 'localhost';
  // $db_name = 'simsim';
  // $user_name = 'root';
  // $user_password = '';

  // try {
  //   $connect = new PDO("mysql:host=${server_name};dbname=${db_name}", $user_name, $user_password);
  //   $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //   // echo 'Connected successfully';

  //   $statement = $connect->prepare('INSERT INTO php_my_list_app (message) VALUES (:message)');
  //   $statement->bindParam(':message', $message);

  //   $message = "My first message!";
  //   $statement->execute();

  //   echo "New records created successfully";
  // }
  // catch (PDOException $error) {
  //   echo 'Connection failed: ' . $error->getMessage();
  // }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <section class="content">
    <ul class="content-list">
      <li class="content-item"><input class="content-item-check" type="checkbox">::Default Content <button class="content-delete-btn" type="button">DELETE</li>
    </ul>
    <hr>
    <input class="content-add-txt" type="text"> <button class="content-add-btn" type="button">ADD CONTENT</button> <button class="chekced-content-delete-btn" type="button">SELECTED DELETE</button>
    <p class="err-msg">Error:: <span class="err-msg-txt"></span></p>
  </section>
  <!-- //content -->

  <!-- script -->
  <script src="script.js"></script>
  <!-- //script -->
</body>
</html>