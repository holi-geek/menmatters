<?php
/**
 * Search results template.
 *
 * @package MenMatter
 */

get_header(); ?>

<section class="mm-main">
	<div class="container">
		<header style="text-align:center;margin-bottom:2.5rem;">
			<h1 style="color:var(--mm-primary);">
				<?php
				/* translators: %s: search query */
				printf( esc_html__( 'Search results for: %s', 'men-matter' ), '<span>' . get_search_query() . '</span>' );
				?>
			</h1>
		</header>

		<?php if ( have_posts() ) : ?>
			<div class="mm-archive-grid">
				<?php while ( have_posts() ) : the_post(); ?>
					<article <?php post_class( 'mm-archive-card' ); ?>>
						<?php if ( has_post_thumbnail() ) : ?>
							<a class="thumb" href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'medium_large' ); ?></a>
						<?php endif; ?>
						<div class="body">
							<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
							<p class="excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt(), 22 ) ); ?></p>
						</div>
					</article>
				<?php endwhile; ?>
			</div>
			<div class="mm-pagination"><?php the_posts_pagination(); ?></div>
		<?php else : ?>
			<p style="text-align:center;"><?php esc_html_e( 'Nothing matched your search. Try different keywords.', 'men-matter' ); ?></p>
			<div style="text-align:center;margin-top:1rem;"><?php get_search_form(); ?></div>
		<?php endif; ?>
	</div>
</section>

<?php get_footer(); ?>
