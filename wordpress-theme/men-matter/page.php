<?php
/**
 * Template for a single static page.
 *
 * @package MenMatter
 */

get_header(); ?>

<section class="mm-main">
	<div class="container">
		<?php while ( have_posts() ) : the_post(); ?>
			<article <?php post_class( 'mm-entry' ); ?>>
				<header>
					<h1 class="entry-title"><?php the_title(); ?></h1>
				</header>

				<?php if ( has_post_thumbnail() ) : ?>
					<div class="entry-thumb"><?php the_post_thumbnail( 'large' ); ?></div>
				<?php endif; ?>

				<div class="entry-content">
					<?php
					the_content();
					wp_link_pages( array(
						'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'men-matter' ),
						'after'  => '</div>',
					) );
					?>
				</div>
			</article>

			<?php if ( comments_open() || get_comments_number() ) : ?>
				<div class="mm-entry" style="margin-top:2rem;">
					<?php comments_template(); ?>
				</div>
			<?php endif; ?>
		<?php endwhile; ?>
	</div>
</section>

<?php get_footer(); ?>
