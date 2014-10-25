<?php snippet('header') ?>	

<!-- .hero-wrap -->
<section class="hero-wrap wrap">
	<div class="container">
		<div class="grid">
    		<h1  class="unit span-grid">Peter is a graphic designer based in London. Specialising in designing interfaces, websites, print and branding.</h1>
    		<a href="mailto:contact@petertait.com" title="Get in contact with Peter Tait" class="unit btn btn-more btn-bk">Get in contact</a>
    		<a href="#" class="move-right-btn" title="Scroll right">Right</a>
    	</div>
    </div>
</section>
<!-- /.hero-wrap -->

<!-- .archive-work-wrap -->
<section class="archive-work-wrap wrap">
	<div class="container">
		<div class="grid">
        	<h4 class="unit">Case Studies</h4>
	    	<ul class="archive-work unit span-grid">
	    		<?php foreach($pages->find('work')->children()->visible() as $project): ?>
	    		<li>
	    			<a href="<?php echo html($project->url()) ?>" title="View <?php echo html($project->title()) ?>">
	    				<img src="<?php echo html($project->files()->find('feature.jpg')->url()) ?>" alt="<?php echo html($project->title()) ?>">
	    				<h4><strong><?php echo html($project->title()) ?></strong> <?php echo html($project->type()) ?></h4>
	    			</a>
	    		</li>
	    		<?php endforeach ?>
	    	</ul>
	    </div>
	 </div>
</section>
<!-- /.archive-work-wrap -->

<!-- .img-wrap -->
<section class="wrap img-wrap img-wrap-final">
	<span class="img-wrap-content" style="background-image: url(<?php echo html($page->files()->find('feature.jpg')->url()) ?>);"></span>
</section>
<!-- /.img-wrap -->

<?php snippet('footer') ?>
