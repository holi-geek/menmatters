<?php
/**
 * Programs section.
 *
 * @package MenMatter
 */

$programs = array(
	array(
		'title' => __( 'Community Dialogue', 'men-matter' ),
		'desc'  => __( 'Create safe spaces where men openly discuss stress, depression, anxiety, relationships, substance use and positive coping strategies.', 'men-matter' ),
	),
	array(
		'title' => __( 'Youth Mental Health', 'men-matter' ),
		'desc'  => __( 'Helping young people develop emotional resilience before crisis occurs.', 'men-matter' ),
	),
	array(
		'title' => __( 'Prison Outreach', 'men-matter' ),
		'desc'  => __( 'Restore hope, emotional wellbeing and dignity among incarcerated men through mental health education, support and reintegration preparation.', 'men-matter' ),
	),
	array(
		'title' => __( 'Media Advocacy', 'men-matter' ),
		'desc'  => __( 'Normalize conversations around mental health using radio, television, newspapers and digital media to educate communities.', 'men-matter' ),
	),
	array(
		'title' => __( 'Gender Based Violence Prevention', 'men-matter' ),
		'desc'  => __( 'Prevent GBV by helping boys and men build healthy relationships, emotional regulation and non-violent conflict resolution.', 'men-matter' ),
	),
	array(
		'title' => __( 'Family Conversations', 'men-matter' ),
		'desc'  => __( 'Strengthen communication, emotional understanding and healthy relationships within families.', 'men-matter' ),
	),
	array(
		'title' => __( 'Mental Health Screening', 'men-matter' ),
		'desc'  => __( 'Identify emotional distress early and connect individuals to appropriate support before problems become severe.', 'men-matter' ),
	),
	array(
		'title' => __( 'Men Matter Leadership Academy', 'men-matter' ),
		'desc'  => __( 'Develop competent, ethical and compassionate community mental health leaders who can implement the Men Matter model.', 'men-matter' ),
	),
);
?>
<section id="programs" class="mm-section">
	<div class="container">
		<h2><?php esc_html_e( 'Our Programs', 'men-matter' ); ?></h2>
		<p class="mm-section-lead"><?php esc_html_e( 'Eight initiatives building dialogue, resilience and dignity across Kenyan communities.', 'men-matter' ); ?></p>

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
