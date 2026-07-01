<?php
/**
 * Programs section.
 *
 * @package MenMatter
 */

$programs = array(
	array( 'title' => __( 'Community Dialogues', 'men-matter' ), 'desc' => __( 'Safe barbershop, church and marketplace conversations that break the silence around men’s mental health.', 'men-matter' ) ),
	array( 'title' => __( 'Youth Mental Health', 'men-matter' ), 'desc' => __( 'School-based programmes and peer-support circles that build resilience in young people early.', 'men-matter' ) ),
	array( 'title' => __( 'Media Advocacy', 'men-matter' ),     'desc' => __( 'Radio shows, social campaigns and storytelling that shift the national conversation on stigma.', 'men-matter' ) ),
	array( 'title' => __( 'Prison Outreach', 'men-matter' ),    'desc' => __( 'Counselling and reintegration support for incarcerated men and boys in Kisumu and beyond.', 'men-matter' ) ),
);
?>
<section id="programs" class="mm-section">
	<div class="container">
		<h2><?php esc_html_e( 'Our Programs', 'men-matter' ); ?></h2>
		<p class="mm-section-lead"><?php esc_html_e( 'Four pillars driving change across Kenyan communities.', 'men-matter' ); ?></p>

		<div class="mm-grid mm-grid-4">
			<?php foreach ( $programs as $p ) : ?>
				<div class="mm-card">
					<h3><?php echo esc_html( $p['title'] ); ?></h3>
					<p><?php echo esc_html( $p['desc'] ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
