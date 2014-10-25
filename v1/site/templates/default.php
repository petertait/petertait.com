<?php snippet('header') ?>

<section class="wrap">
  <div class="grids">
	<div class="grid-12 default">
    <h1><?php echo html($page->title()) ?></h1>
    <?php echo kirbytext($page->text()) ?>
    </div>
  </div>
</section>

<?php snippet('footer') ?>