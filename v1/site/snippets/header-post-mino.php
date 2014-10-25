<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php echo html($site->title()) ?> – <?php echo html($page->title()) ?></title>
    <meta name="description" content="Peter is a graphic & web designer based around Winchester. He has experience ranging from global corporations to family firms.">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    
	<link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico">
	<link rel="apple-touch-icon-precomposed" href="assets/img/apple-touch-icon-precomposed.png"/>
	
	<?php 
		echo css('assets/css/styles.css');
		echo js('http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
	?>
	
    <script>WebFontConfig = { fontdeck: { id: '21164' } };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();</script>
    <script type="text/javascript" src="//use.typekit.net/rwq0zmu.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
    
    <!-- custom css -->
    <?php foreach($page->files()->findByExtension('css') as $css): ?>
    <?php echo css($css->url()) ?>
    <?php endforeach ?>
    <!-- custom javascript -->
    <?php foreach($page->files()->findByExtension('js') as $js): ?>
    <?php echo js($js->url()) ?>
    <?php endforeach ?>
    
    <!-- Responsive CSS -->
    <?php echo css('assets/css/responsive.css'); ?>
    
    <!--[if gt IE 6]> 
    	<link rel="stylesheet" type="text/css" href="assets/css/ie-styles.css" />
    <![endif]-->
    
</head>	

<body class="post">

	<!--[if lt IE 7]>
	    <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->
	
	<!-- #main-header -->
	<header id="main-header">
		<div class="container">
	    	<h1 id="main-logo"><a href="/" title="Peter Tait – Graphic Designer" class="ir">Peter Tait</a></h1>
	    	<?php $items = $pages->visible(); if($items->count() > 0): ?>
	    	<nav id="main-nav">
	    		<ul>
	    			<?php foreach($items as $item): ?>
	    			<li><a<?php ecco($item->isOpen(), ' class="active"') ?> href="<?php echo $item->url() ?>" title="Visit the <?php echo html($item->title()) ?> page"><?php echo html($item->title()) ?></a></li>
	    			<?php endforeach ?>
	    		</ul>
	    	</nav>
	    	<?php endif ?>
		</div>
	</header>
	<!-- /#main-header -->