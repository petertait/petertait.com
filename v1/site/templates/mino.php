<?php snippet('header-project') ?>

<!-- .hero-wrap -->
<section class="hero-wrap wrap">
	<div class="container">
		<div class="grid">
    		<h1 class="unit span-grid">Mino</h1>
    		<h2 class="unit span-grid">A minimal typeface created in the space of two days, using a simple yet robust geometric grid, built with only a simple overlay of circles and dots.</h2>
    		<a href="#" class="move-right-btn btn-drk" title="Scroll right ">Right</a>
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
    			<h3>Efficiently built with the most minimal amount of strokes.</h3>
    			<p>With a short timeframe, creating an efficient way to create each letterform without compromising quality led to the use of a grid that could help establish the shapes for each letter, also leading to a more unified visual language.</p>
    			<p>The core to this typeface is its grid that each letterform is built upon. This very simple structure creates a simple stroke that turns into an easy-to-read letter.</p>
    			<p>Suitable only as a display face, and built for a unique brand that wants to stand out as forward thinking and a refined approach to their work. Only the minimal amount of components are created to each letter. Parts to each letter have been analysed and tested to create the most refined and cut down shape.</p>
    		</div>
    		<div class="unit two-of-three mino-abc"></div>
    	</div>
    </div>
</section>
<!-- /.about-wrap -->

<!-- .mino-grid-wrap -->
<section class="mino-grid-wrap static-wrap wrap"></section>
<!-- /.mino-grid-wrap -->

<!-- .mino-compared-wrap -->
<section class="mino-compared-wrap wrap">
	<div class="container">
		<div class="grid">
			<h4 class="unit span-grid">Grid structure</h4>
			<h3 class="unit active mino-grid-btn">Grid</h3>
			<h3 class="unit mino-preview-btn">Preview</h3>
			<div class="mino-grid mino-type"></div>
			<div class="mino-preview mino-type"></div>
		</div>
	</div>
</section>
<!-- /.mino-compared-wrap -->

<!-- .img-wrap -->
<section class="wrap img-wrap img-wrap-final">
	<span class="img-wrap-content" style="background-image: url(<?php echo html($page->files()->find('feature.jpg')->url()) ?>);"></span>
</section>
<!-- /.img-wrap -->

<!-- .next-wrap -->
<section class="wrap img-wrap next-wrap <?php echo html($page->siblings()->first()->template()) ?>">
	<div class="img-wrap-content">
		<div class="container">
			<div class="grid">
				<h4 class="unit">Next Project</h4>
				<h1 class="unit span-grid"><a href="<?php echo html($page->siblings()->first()->url()) ?>" title="<?php echo html($page->siblings()->first()->title()) ?>"><?php echo html($page->siblings()->first()->title()) ?></a></h1>
				<h3 class="unit span-grid"><?php echo html($page->siblings()->first()->subtitle()) ?></h3>
				<a href="<?php echo html($page->siblings()->first()->url()) ?>" class="btn btn-bk btn-more unit" title="<?php echo html($page->siblings()->first()->title()) ?>">View project</a>
			</div>
		</div>
	</div>
</section>
<!-- /.next-wrap -->

<?php snippet('footer') ?>