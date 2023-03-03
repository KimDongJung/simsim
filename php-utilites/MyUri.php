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
}