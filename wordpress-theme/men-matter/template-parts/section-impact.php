<?php
/**
 * Impact section.
 *
 * @package MenMatter
 */

$stats = array(
	array( 'num' => '2,500+', 'label' => __( 'Men reached', 'men-matter' ) ),
	array( 'num' => '40+',    'label' => __( 'Community dialogues', 'men-matter' ) ),
	array( 'num' => '15',     'label' => __( 'Partner schools', 'men-matter' ) ),
	array( 'num' => '6',      'label' => __( 'Counties active', 'men-matter' ) ),
);
?>
<section id="impact" class="mm-section mm-section-alt">
	<div class="container">
		<h2><?php esc_html_e( 'Our Impact', 'men-matter' ); ?></h2>
		<p class="mm-section-lead"><?php esc_html_e( 'Measurable change since day one.', 'men-matter' ); ?></p>

		<div class="mm-grid mm-grid-4">
			<?php foreach ( $stats as $s ) : ?>
				<div class="mm-card mm-stat">
					<div class="mm-stat-num"><?php echo esc_html( $s['num'] ); ?></div>
					<div class="mm-stat-label"><?php echo esc_html( $s['label'] ); ?></div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
