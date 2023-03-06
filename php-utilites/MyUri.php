<?php
class MyUri {
  public static function getPureRequestUri (string $test_uri = '') {
    $request_uri = empty($_SERVER['REQUEST_URI']) ? empty($test_uri) ? null : $test_uri : $_SERVER['REQUEST_URI'];
    $request_uri_has_value = $request_uri !== null;
    
    if ($request_uri_has_value) {
      $request_uri = explode('?', $request_uri)[0];
    }

    return $request_uri;
  }
  
  public static function getGetData (array $test_get = []) {
    $get = empty($_GET) ? empty($test_get) ? null : $test_get : $_GET;
    $get_has_value = $get !== null;

    if ($get_has_value) {
      foreach ($get as $get_key => $get_value) {
        $get[$get_key] = htmlspecialchars($get_value, ENT_QUOTES, 'UTF-8');
      }
    }
    
    return $get;
  }
}