<?php
/**
 * Main template file — used as fallback and for blog index.
 *
 * @package MenMatter
 */

get_header(); ?>

<?php if ( is_front_page() && ! is_home() ) : ?>

	<?php
	get_template_part( 'template-parts/section', 'hero' );
	get_template_part( 'template-parts/section', 'about' );
	get_template_part( 'template-parts/section', 'programs' );
	get_template_part( 'template-parts/section', 'impact' );
	get_template_part( 'template-parts/section', 'get-involved' );
	?>

<?php else : ?>

	<section class="mm-main">
		<div class="container">
			<h1 class="mm-section" style="padding:0;margin-bottom:2rem;">
				<?php echo is_home() ? esc_html__( 'Latest Stories', 'men-matter' ) : esc_html( get_the_archive_title() ); ?>
			</h1>

			<?php if ( have_posts() ) : ?>
				<div class="mm-archive-grid">
					<?php while ( have_posts() ) : the_post(); ?>
						<article <?php post_class( 'mm-archive-card' ); ?>>
							<?php if ( has_post_thumbnail() ) : ?>
								<a class="thumb" href="<?php the_permalink(); ?>">
									<?php the_post_thumbnail( 'medium_large' ); ?>
								</a>
							<?php endif; ?>
							<div class="body">
								<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
								<p class="excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt(), 22 ) ); ?></p>
							</div>
						</article>
					<?php endwhile; ?>
				</div>

				<div class="mm-pagination">
					<?php the_posts_pagination(); ?>
				</div>
			<?php else : ?>
				<p><?php esc_html_e( 'No content found.', 'men-matter' ); ?></p>
			<?php endif; ?>
		</div>
	</section>

<?php endif; ?>

<?php get_footer(); ?>
