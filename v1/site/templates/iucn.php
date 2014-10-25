<?php snippet('header-project') ?>

<!-- .hero-wrap -->
<section class="hero-wrap wrap">
	<div class="container">
		<div class="grid">
    		<h1 class="unit span-grid">IUCN: Red List Discover</h1>
    		<h2 class="unit span-grid">IUCN Red List wanted a way to introduce more people to their inventory species by making their website simpler and easier.</h2>
    		<a href="http://discover.iucnredlist.org" class="btn btn-bk btn-more unit" title="View the IUCN Red List Discover website" target="_BLANK">Visit the IUCN Red List Discover website</a>
    		<a href="#" class="move-right-btn" title="Scroll right">Right</a>
    	</div>
    </div>
</section>
<!-- /.hero-wrap -->

<!-- .about-wrap -->
<section class="about-wrap wrap">
	<div class="container">
		<div class="grid">
			<h4 class="unit span-grid">Info</h4>
			<div class="unit one-of-three">	
				<h3>IUCN Red List wanted a way to introduce more people to their inventory of species.</h3>
				<p>The aim of the new section of the IUCN Red List was to welcome the general public and to encourage their interaction with an important subject.</p>	
				<p>Making complex data from IUCN’s largest database in the world simple was made possible by prioritising what content should be made available to the user. Imagery was important in helping non-experts to understand each species. Iconography was created for each species and habitat to placehold where there was no imagery within the database. This resulted in every species page contained helpful profile picture to help the user instantly recognise using image recognition.</p>
			</div>
			<img class="unit two-of-three" src="<?php echo html($page->files()->find('iucn-mac.jpg')->url()) ?>" alt="IUCN Red List website">
    	</div>
    </div>
</section>
<!-- /.about-wrap -->

<!-- .iucn-illy-wrap -->
<section class="iucn-illy-wrap wrap">
	<div class="container">
		<div class="grid">
			<h4 class="unit span-grid">Species illustrations</h4>
			<div class="unit one-of-three">	
				<h3>Helping beginners was vital in opening up the Red List to a larger demographic.</h3>
				<p>Due to the expansive database of species of the Red List, some do not yet have photographic imagery that can be used to profile and recognise them by.</p>
				<p>This led to the decision of creating illustrations for all of the categories of species and other icons including habitats – all in the aim of helping newcomers to understand not feel out of depth within the site.</p>
			</div>
			<div class="unit two-of-three"></div>
    	</div>
    </div>
</section>
<!-- /.iucn-illy-wrap -->

<!-- .img-wrap -->
<section class="wrap img-wrap img-wide-wrap">
	<span class="img-wrap-content" style="background-image: url(<?php echo html($page->files()->find('feature.jpg')->url()) ?>);"></span>
</section>
<!-- /.img-wrap -->

<!-- .iucn-slider-wrap -->
<section class="iucn-slider-wrap wrap">
	<div class="container">
		<div class="grid">
			<h4 class="unit span-grid">Screens</h4>
			<div class="slider">
			  <a href="#" class="control-next">Previous</a>
			  <a href="#" class="control-prev">Next</a>
			  <ul>
			     <li><img src="<?php echo html($page->files()->find('iucn-2.jpg')->url()) ?>" alt="IUCN Red List Discover screen" title="IUCN Red List Discover screen"></li>
			     <li><img src="<?php echo html($page->files()->find('iucn-3.jpg')->url()) ?>" alt="IUCN Red List Discover screen" title="IUCN Red List Discover screen"></li>
			     <li><img src="<?php echo html($page->files()->find('iucn-4.jpg')->url()) ?>" alt="IUCN Red List Discover screen" title="IUCN Red List Discover screen"></li>
			     <li><img src="<?php echo html($page->files()->find('iucn-5.jpg')->url()) ?>" alt="IUCN Red List Discover screen" title="IUCN Red List Discover screen"></li>
			     <li><img src="<?php echo html($page->files()->find('iucn-6.jpg')->url()) ?>" alt="IUCN Red List Discover screen" title="IUCN Red List Discover screen"></li>
			     <li><img src="<?php echo html($page->files()->find('iucn-7.jpg')->url()) ?>" alt="IUCN Red List Discover screen" title="IUCN Red List Discover screen"></li>
			     <li><img src="<?php echo html($page->files()->find('iucn-8.jpg')->url()) ?>" alt="IUCN Red List Discover screen" title="IUCN Red List Discover screen"></li>
			  </ul>  
			</div>
		</div>
	</div>
</section>
<!-- /.iucn-slider-wrap -->


<!-- .next-wrap -->
<section class="wrap img-wrap next-wrap <?php echo html($page->nextVisible()->template()) ?>">
	<div class="img-wrap-content">
		<div class="container">
			<div class="grid">
				<h4 class="unit">Next Project</h4>
				<h1 class="unit span-grid"><a href="<?php echo html($page->nextVisible()->url()) ?>" title="<?php echo html($page->nextVisible()->title()) ?>"><?php echo html($page->nextVisible()->title()) ?></a></h1>
				<h3 class="unit span-grid"><?php echo html($page->nextVisible()->subtitle()) ?></h3>
				<a href="<?php echo html($page->nextVisible()->url()) ?>" class="btn btn-bk btn-more unit" title="<?php echo html($page->nextVisible()->title()) ?>">View project</a>
			</div>
		</div>
	</div>
</section>
<!-- /.next-wrap -->

<?php snippet('footer') ?>