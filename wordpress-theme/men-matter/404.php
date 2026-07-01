<?php
/**
 * 404 template.
 *
 * @package MenMatter
 */

get_header(); ?>

<section class="mm-main">
	<div class="container" style="text-align:center;">
		<h1 style="color:var(--mm-primary);font-size:4rem;margin:0;">404</h1>
		<p class="mm-section-lead"><?php esc_html_e( 'The page you are looking for cannot be found.', 'men-matter' ); ?></p>
		<a class="mm-btn mm-btn-primary" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Back to Home', 'men-matter' ); ?></a>
	</div>
</section>

<?php get_footer(); ?>
