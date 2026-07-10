<?php
/**
 * Template for a single blog post.
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
					<div class="entry-meta">
						<?php
						printf(
							/* translators: %1$s: post date, %2$s: post author */
							esc_html__( 'Published on %1$s by %2$s', 'men-matter' ),
							esc_html( get_the_date() ),
							esc_html( get_the_author() )
						);
						?>
					</div>
				</header>

				<?php if ( has_post_thumbnail() ) : ?>
					<div class="entry-thumb"><?php the_post_thumbnail( 'large' ); ?></div>
				<?php endif; ?>

				<div class="entry-content">
					<?php the_content(); ?>
				</div>

				<footer style="margin-top:1.5rem;">
					<?php
					$cats = get_the_category_list( ', ' );
					if ( $cats ) {
						echo '<p class="entry-meta">' . esc_html__( 'Categories:', 'men-matter' ) . ' ' . wp_kses_post( $cats ) . '</p>';
					}
					$tags = get_the_tag_list( '', ', ' );
					if ( $tags ) {
						echo '<p class="entry-meta">' . esc_html__( 'Tags:', 'men-matter' ) . ' ' . wp_kses_post( $tags ) . '</p>';
					}
					?>
				</footer>
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
