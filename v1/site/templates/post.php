<?php snippet('header') ?>

<!-- .blog-post-wrap -->
<section class="blog-post-wrap wrap">
	<!-- .container -->
	<div class="container">
		<!-- .grid -->
		<div class="grid">
			<h4 class="unit span-grid"><?php echo html($page->date('F jS, Y')) ?></h4>
			<article class="unit span-grid">
				<h1><?php echo html($page->title()) ?></h1>
				<h2><?php echo html($page->subtitle()) ?></h2>
				<?php echo kirbytext($page->text()) ?>
			</article>
	    </div>
	    <!-- /.grid -->
	 </div>
	 <!-- /.container -->
	 <!-- .next-post -->
	 <a href="<?php echo html($page->nextVisible()->url()) ?>" class="next-post" title="<?php echo html($page->nextVisible()->title()) ?>">
	 	<div class="container">
	 		<div class="grid">
	 			<h4 class="unit span-grid">Read next</h4>
	 			<h2 class="unit span-grid"><?php echo html($page->nextVisible()->title()) ?></h2>
	 		</div>
	 	</div>
	 </a>
	 <!-- /.next-post -->
</section>
<!-- /.blog-post-wrap -->

<!-- .img-wrap -->
<section class="wrap img-wrap img-wide-wrap">
	<span class="img-wrap-content" style="background-image: url(<?php echo html($page->files()->find('feature.jpg')->url()) ?>);"></span>
</section>
<!-- /.img-wrap -->

<!-- .archive-blog-wrap -->
<section class="archive-blog-wrap wrap">
	<div class="container">
		<div class="grid">
			<h4 class="unit"><a href="#" title="View all of Peter's Work">Recent Posts</a></h4>
	    	<ul class="unit span-grid">
	    		<?php $posts = $page->parent()->children()->visible()->shuffle()->limit(3) ?>
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
	    	<a href="/blog" class="btn btn-bk btn-more unit" title="Read more of Peter's blog posts">More posts</a>
	    </div>
	 </div>
</section>
<!-- /.archive-blog-wrap -->

<?php snippet('footer') ?>