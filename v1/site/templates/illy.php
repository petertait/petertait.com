<?php snippet('header-project') ?>

<!-- .hero-wrap -->
<section class="hero-wrap wrap">
	<div class="container">
		<div class="grid">
    		<h1 class="unit span-grid">Assorted Illustrative Works</h1>
    		<h2 class="unit span-grid">Corporate and playful illustrations. A mixture of styles and approaches are important – ranging illustrative styles for a mixture of purposes.</h2>
    		<a href="#" class="move-right-btn btn-dark">Right</a>
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
				<h3>An illustrative diagram showing the work process of a company.</h3>
				<p>There was a need to help communicate how this company worked through projects. Clients found it difficult to fully grasp how the process worked. This diagram set out to help illustrate through only image in a step-by-step guide – easy for clients to understand.</p>
				<p>Using a minimal visual style helped unify the overall message and was used as the starting point for the overall visual identity of the entire project.</p>
			</div>
			<img class="unit two-of-three" src="<?php echo html($page->files()->find('illy-1.png')->url()) ?>" alt="Process Illustration Snippet" title="Process Illustration Snippet">
    	</div>
    </div>
</section>
<!-- /.about-wrap -->

<!-- .illy-1-wrap -->
<section class="illy-1-wrap wrap">
	<div class="container">
		<div class="grid">
			<h4 class="unit span-grid">Process illustration</h4>
			<div class="illy-wide-wrap"></div>
		</div>
	</div>
</section>
<!-- /.illy-1-wrap -->

<!-- .img-wrap -->
<section class="wrap img-wrap img-wide-wrap">
	<span class="img-wrap-content" style="background-image: url(<?php echo html($page->files()->find('feature.jpg')->url()) ?>);"></span>
</section>
<!-- /.img-wrap -->

<!-- .illy-2-wrap -->
<section class="illy-2-wrap wrap">
	<div class="container">
		<div class="grid">
			<h4 class="unit span-grid">Info</h4>
			<div class="unit one-of-two illy-3">	
    			<h3>Describing the innovation and thought processes</h3>
    			<p>The whole purpose of this illustration was to create the most easiest way to describe a workflow for the company. The styling is friendly and playful, this makes it easier to follow for people who are not experts in the field.</p>
    		</div>
    		<div class="unit one-of-two illy-4">	
    			<h3>Selling the idea and the process behind it.</h3>
    			<p>The secondary purpose to the illustration was to actually sell the company and it's way of working. New clients may misunderstand the services that the company offer – thus by simplifying this into a cartoon, it helps them fully understand all of the services on offer.</p>
    		</div>
    	</div>
    </div>
</section>
<!-- /.illy-2-wrap -->

<!-- .illy-3-wrap -->
<section class="illy-3-wrap wrap">
	<div class="container">
		<div class="grid">
			<h4 class="unit span-grid">Process illustration</h4>
		</div>
	</div>
</section>
<!-- /.illy-3-wrap -->

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