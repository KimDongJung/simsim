<?php
class MyUri {
  // public $requestUri = $_SERVER['REQUEST_URI']; 
  // public $requestUri = $_SERVER['REQUEST_URI']; 
  // const requestUri = $_SERVER['REQUEST_URI'];
  
  public function __construct(string $test_domain) {
    // $this->requestUri = empty($test_domain) ? $_SERVER['REQUEST_URI'] : $test_domain;
  }
  public static function getPureRequestUri () {
    return explode('?', $this->requestUri)[0];
  }
}
?>

<?php echo MyUri::getPureRequestUri()?>