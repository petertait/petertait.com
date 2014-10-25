<?php snippet('header-project') ?>

<!-- .hero-wrap -->
<section class="hero-wrap wrap">
	<div class="container">
		<div class="grid">
    		<h1 class="unit span-grid">Metrik</h1>
    		<h2 class="unit span-grid">Metrik is a geometric typeface created in response to the creators personal ethos on what design means to him and his work. Built using a minimal amount of shapes, resulting in a unique aesthetic – ideal for the purpose of branding.</h2>
    		<a href="#" class="move-right-btn" title="Scroll right ">Right</a>
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
    			<h3>A typeface built around its creators personal ethos.</h3>
    			<p>Metrik is a current work in progress with more weights and highly detailed refinement in the pipeline. The initial workings have created a unique typeface that is highly distinguishable from other geometric typefaces currently on the market. The use of serifs on certain letters creates an unusual character whilst also adding legibility to letters that struggle at smaller sizes.</p>
    			<p>Built for branding and for display use. Future refinement may lead to a book weight with the purpose of better legibility at smaller sizes. Classic fonts including Futura are favourites among designers – Metrik looks to become an alternative to these where unique style is desirable.</p>
    		</div>
    		<div class="unit two-of-three metrik-abc"></div>
    	</div>
    </div>
</section>
<!-- /.about-wrap -->

<!-- .metrik-shapes-wrap -->
<section class="metrik-shapes-wrap static-wrap wrap">
 	<div class="container">
 		<div class="grid">
 			<h4 class="unit span-grid">Geometric structure</h4>
 			<div class="unit span-grid metrik-shapes"></div>
 		</div>
 	</div>
 </section>
<!-- /.metrik-shapes-wrap -->

<!-- .metrik-text-wrap -->
<section class="metrik-text-wrap wrap">
	<div class="container">
		<div class="grid">
			<h4 class="unit span-grid">Text samples</h4>
			<div class="unit span-grid metrik-text"></div>
		</div>
	</div>
</section>
<!-- /.metrik-text-wrap -->

<!-- .img-wrap -->
<section class="wrap img-wrap img-wide-wrap">
	<span class="img-wrap-content" style="background-image: url(<?php echo html($page->files()->find('feature.jpg')->url()) ?>);"></span>
</section>
<!-- /.img-wrap -->

<!-- .project-images-wrap -->
<section class="project-images-wrap wrap">
	<div class="container">
		<div class="grid">
        	<h4 class="unit">Metrik's printed specimen</h4>
	    	<ul class="unit span-grid">
	    		<li><img src="<?php echo html($page->files()->find('metrik-1.jpg')->url()) ?>" alt="Metrik - geometric typeface" title="Metrik printed specimen"></li>
	    		<li><img src="<?php echo html($page->files()->find('metrik-2.jpg')->url()) ?>" alt="Metrik - geometric typeface" title="Metrik printed specimen"></li>
	    		<li><img src="<?php echo html($page->files()->find('metrik-3.jpg')->url()) ?>" alt="Metrik - geometric typeface" title="Metrik printed specimen"></li>
	    		<li><img src="<?php echo html($page->files()->find('metrik-4.jpg')->url()) ?>" alt="Metrik - geometric typeface" title="Metrik printed specimen"></li>
	    		<li><img src="<?php echo html($page->files()->find('metrik-5.jpg')->url()) ?>" alt="Metrik - geometric typeface" title="Metrik printed specimen"></li>
	    		<li><img src="<?php echo html($page->files()->find('metrik-6.jpg')->url()) ?>" alt="Metrik - geometric typeface" title="Metrik printed specimen"></li>
	    		<li><img src="<?php echo html($page->files()->find('metrik-7.jpg')->url()) ?>" alt="Metrik - geometric typeface" title="Metrik printed specimen"></li>
	    	</ul>
	    </div>
	 </div>
</section>
<!-- /.project-images-wrap -->

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