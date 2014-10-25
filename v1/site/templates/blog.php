<?php snippet('header') ?>
	
<!-- .blog-feature-wrap -->
<section class="hero-wrap blog-feature-wrap wrap" style="background-image: url(<?php echo html($page->children()->first()->files()->find('thumb.jpg')->url()) ?>)">
	<div class="container">
		<div class="grid">
			<h4 class="unit">Featured Post</h4>
    		<h1 class="unit span-grid"><a href="<?php echo html($page->children()->first()->url()) ?>"><?php echo html($page->children()->first()->title()) ?></a></h1>
    		<h3 class="unit span-grid"><?php echo html($page->children()->first()->subtitle()) ?></h3>
    		<a href="<?php echo html($page->children()->first()->url()) ?>" class="btn btn-wh btn-more unit" title="<?php echo html($page->children()->first()->title()) ?>">Read post</a>
    	</div>
    </div>
</section>
<!-- /.blog-feature-wrap -->

<!-- .archive-blog-wrap -->
<section class="archive-blog-wrap wrap">
	<div class="container">
		<div class="grid">
			<h4 class="unit"><a href="#" title="View all of Peter's Work">Recent Posts</a></h4>
	    	<ul class="unit span-grid">
	    		<?php $posts = $page->children()->visible()->flip()->limit(3) ?>
	    		<?php foreach($posts as $post): ?>
	    		<li>
	    		    <a href="<?php echo $post->url() ?>" title="Read <?php echo html($post->title()) ?>">
	    		    <img src="<?php echo html($post->files()->find('thumb.jpg')->url()) ?>" alt="<?php echo html($post->title()) ?>">
	    		    	<h5><?php echo html($post->date('F jS, Y')) ?></h5>
	    		    	<h3><?php echo html($post->title()) ?></h3>
	    			  </a>
	    		</li>
	    		<?php endforeach ?>
	    	</ul>
	    	<a href="#" class="btn btn-bk btn-more btn-posts unit" title="View more Blog posts">More posts</a>
	    </div>
	 </div>
</section>
<!-- /.archive-blog-wrap -->

<!-- .img-wrap -->
<section class="wrap img-wrap">
	<span class="img-wrap-content" style="background-image: url(<?php echo html($page->files()->find('feature.jpg')->url()) ?>);"></span>
</section>
<!-- /.img-wrap -->

<!-- .archive-blog-list-wrap -->
<section class="archive-blog-list-wrap wrap">
	<div class="container">
		<div class="grid">
			<h4 class="unit"><a href="/blog" title="Read Peter's Blog">Recent Posts</a></h4>
	    	<ul class="unit span-grid">
	    		<?php foreach($page->children()->visible()->flip() as $post): ?>
	    			<li>
	    				<h3><a href="<?php echo html($post->url()) ?>" title="Read <?php echo html($post->title()) ?>"><?php echo html($post->title()) ?></a></h3>
	    			</li>
	    		<?php endforeach ?>
	    	</ul>
	    </div>
	 </div>
</section>
<!-- /.archive-blog-list-wrap -->

<?php snippet('footer') ?>