<?php
/**
 * The footer for the Men Matter theme.
 *
 * @package MenMatter
 */
?>
</main><!-- #mm-content -->

<footer id="colophon" class="mm-footer" role="contentinfo">
	<div class="container">
		<div class="mm-footer-grid">
			<div>
				<h4><?php bloginfo( 'name' ); ?></h4>
				<p><?php echo esc_html( get_bloginfo( 'description' ) ?: __( 'Think · Talk · Thrive. A Kenyan community mental health initiative for men and youth.', 'men-matter' ) ); ?></p>
			</div>

			<div>
				<h4><?php esc_html_e( 'Explore', 'men-matter' ); ?></h4>
				<?php
				if ( has_nav_menu( 'footer' ) ) {
					wp_nav_menu( array(
						'theme_location' => 'footer',
						'container'      => false,
						'depth'          => 1,
					) );
				} else {
					menmatter_default_menu();
				}
				?>
			</div>

			<div>
				<h4><?php esc_html_e( 'Contact', 'men-matter' ); ?></h4>
				<ul>
					<li>Kisumu, Kenya</li>
					<li><a href="mailto:info@menmatters.org">info@menmatters.org</a></li>
				</ul>
			</div>
		</div>

		<div class="mm-footer-bottom">
			&copy; <?php echo esc_html( date_i18n( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved.', 'men-matter' ); ?>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
