<?php snippet('header-project') ?>

<!-- .hero-wrap -->
<section class="hero-wrap wrap">
	<div class="container">
		<div class="grid">
    		<h1 class="unit span-grid">ISTD: Type Specimen</h1>
    		<h2 class="unit span-grid">The ISTD brief was to create a new way of specifying a typeface. This project looked at how to bridge the gap between print and web specimens, whilst adding an immersive element of interaction for users.</h2>
    		<a href="http://tg.tait.io" class="btn btn-wh btn-more unit" title="View the Trade Gothic Next working specimen" target="_BLANK">Visit the Trade Gothic Next specimen</a>
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
				<h3>Interaction with the typeface leads to better understanding of it’s characteristics and capabilities</h3>
				<p>ISTD set the brief of creating a new way of specifying type. This immediately led to the questions of how designers use type and how do they decide on typefaces when designing.</p>
				<p>Before making purchases the user will want to know what the possibilities are. The specimens created looked at letter users experiment and play with the typeface. This was possible by creating an interactive website that acts as an inspiration tool with different sections showing the typeface in a range of possible ways it could be used.</p>
			</div>
			<img class="unit two-of-three" src="<?php echo html($page->files()->find('typespec-mac.jpg')->url()) ?>" alt="Trade Gothic Next working type specimen">
    	</div>
    </div>
</section>
<!-- /.about-wrap -->

<!-- .typespec-inspire-wrap -->
<section class="typespec-inspire-wrap wrap">
 	<div class="container">
 		<div class="grid">
 			<h4 class="unit span-grid">Features</h4>
 			<div class="unit one-of-three">	
 				<h3>Designers can experiment and inspire with typefaces they don’t yet own.</h3>
 				<p>
 				By letting designers experiment with the typeface can create a sense of excitement. Playful ways the user can use the typeface include editing the kerning, font size, leading, weight, draggable layouts and even a canvas where the user can draw around the typeface in anyway possible.</p>
 				<p>To the right shows two examples of different interactions possible. The top image shows how the user can experiment with all of the possible variants of the typeface and also draw on the canvas to create inspiration. The bottom image shows the type tools activated allowing the user to edit the way the typeface looks including its kerning, leading and variant/weight.</p>
 			</div>
 			<div class="unit two-of-three">
 				<img src="<?php echo html($page->files()->find('typespec-2.png')->url()) ?>" alt="Engagement within the interactive specimen">
 				<img src="<?php echo html($page->files()->find('typespec-1.png')->url()) ?>" alt="Type editing within the interactive specimen">
 			</div>
 		</div>
 	</div>
 </section>
<!-- /.typespec-inspire-wrap -->

<!-- .typespec-horizontal-wrap -->
<section class="typespec-horizontal-wrap wrap">
	<div class="container">
		<div class="grid">
			<h4 class="unit span-grid">Book influenced navigation</h4>
			<h3 class="unit active typespec-tg-btn">Trade Gothic Next</h3>
			<h3 class="unit typespec-es-btn">Egyptian Slate</h3>
			<div class="typespec-tg">
				<img src="<?php echo html($page->files()->find('typespec-tg.png')->url()) ?>" alt="Trade Gothic Next Specimen">
				<a href="http://tg.tait.io" target="_BLANK" class="btn btn-bk btn-more unit" title="Visit the Trade Gothic Next specimen">Visit the Trade Gothic Next specimen</a>
			</div>
			<div class="typespec-es">
				<img src="<?php echo html($page->files()->find('typespec-es.png')->url()) ?>" alt="Egyptian Slate Specimen">
				<a href="http://es.tait.io" target="_BLANK" class="btn btn-bk btn-more unit" title="Visit the Egyptian Slate specimen">Visit the Egyptian Slate specimen</a>
			</div>
		</div>
	</div>
</section>
<!-- /.typespec-horizontal-wrap -->

<!-- .img-wrap -->
<section class="wrap img-wrap img-wide-wrap">
	<span class="img-wrap-content" style="background-image: url(<?php echo html($page->files()->find('feature.jpg')->url()) ?>);"></span>
</section>
<!-- /.img-wrap -->

<!-- .project-images-wrap -->
<section class="project-images-wrap wrap">
	<div class="container">
		<div class="grid">
        	<h4 class="unit">Typographic specifications booklet</h4>
	    	<ul class="unit span-grid">
    			<li><img src="<?php echo html($page->files()->find('typespec-7.jpg')->url()) ?>" alt="Typographic specifications booklet" title="Typographic specifications booklet"></li>
    			<li><img src="<?php echo html($page->files()->find('typespec-8.jpg')->url()) ?>" alt="Typographic specifications booklet" title="Typographic specifications booklet"></li>
    			<li><img src="<?php echo html($page->files()->find('typespec-3.jpg')->url()) ?>" alt="Typographic specifications booklet" title="Typographic specifications booklet"></li>
    			<li><img src="<?php echo html($page->files()->find('typespec-4.jpg')->url()) ?>" alt="Typographic specifications booklet" title="Typographic specifications booklet"></li>
    			<li><img src="<?php echo html($page->files()->find('typespec-5.jpg')->url()) ?>" alt="Typographic specifications booklet" title="Typographic specifications booklet"></li>
    			<li><img src="<?php echo html($page->files()->find('typespec-6.jpg')->url()) ?>" alt="Typographic specifications booklet" title="Typographic specifications booklet"></li>
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