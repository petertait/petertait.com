<?php snippet('header') ?>	

<!-- .hero-wrap -->
<section class="hero-wrap wrap">
	<div class="container">
		<div class="grid">
    		<h1  class="unit span-grid"><a href="/info">Peter</a> is a designer at <a href="http://pebblecode.com" alt="Pebble {Code}'s website" target="_BLANK">Pebble {Code}</a>, helping solve complex business problems.</h1>
    		<a href="/info" class="btn btn-bk btn-more unit" title="Learn more about Peter Tait">More info</a>
    		<a href="#" class="move-right-btn" title="Scroll right">Right</a>
    	</div>
    </div>
</section>
<!-- /.hero-wrap -->

<!-- .archive-work-wrap -->
<section class="archive-work-wrap wrap">
	<div class="container">
		<div class="grid">
        	<h4 class="unit"><a href="/work" title="View all of Peter's Work">Recent Case Studies</a></h4>
	    	<ul class="archive-work unit span-grid">
	    		<?php foreach($pages->find('work')->children()->visible()->limit(3) as $project): ?>
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

<!-- .archive-blog-list-wrap -->
<section class="archive-blog-list-wrap wrap">
	<div class="container">
		<div class="grid">
			<h4 class="unit"><a href="/blog" title="Read Peter's Blog">Recent Posts</a></h4>
	    	<ul class="unit span-grid">
	    		<?php foreach($pages->find('blog')->children()->visible()->flip()->limit(5) as $post): ?>
	    			<li>
	    				<h3><a href="<?php echo html($post->url()) ?>" title="Read <?php echo html($post->title()) ?>"><?php echo html($post->title()) ?></a></h3>
	    			</li>
	    		<?php endforeach ?>
	    	</ul>
	    </div>
	 </div>
</section>
<!-- /.archive-blog-list-wrap -->

<!-- .img-wrap -->
<section class="wrap img-wrap img-wrap-final">
	<span class="img-wrap-content" style="background-image: url(<?php echo html($page->files()->find('feature.jpg')->url()) ?>);"></span>
</section>
<!-- /.img-wrap -->
	
<?php snippet('footer') ?>	