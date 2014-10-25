<?php

//(thumb: myimage.png width: 200 height: 100)

class kirbytextExtended extends kirbytext {

  function __construct($text, $markdown=true) {
  
    parent::__construct($text, $markdown);
    $this->addTags('thumb');
    $this->addAttributes('crop', 'quality');
  
  }
  
  function thumb($params) {
  
    global $site;
  
    $defaults = array(
      'width'   => 200,
      'height'  => 200,
      'crop'    => false,
      'quality' => 100
    );

    $options = array_merge($defaults, $params);
    $thumb   = $params['thumb'];
    $page    = ($this->obj) ? $this->obj : $site->pages()->active();
    $image   = $page->images()->find($thumb);
    
    if(!$image) return false;    
    
    return thumb($image, array(
      'width'   => $options['width'], 
      'height'  => $options['height'],
      'crop'    => $options['crop'], 
      'quality' => $options['quality']
    ));
  
  }

}

?>