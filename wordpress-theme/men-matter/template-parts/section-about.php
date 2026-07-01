<?php
/**
 * About section.
 *
 * @package MenMatter
 */
?>
<section id="about" class="mm-section mm-section-alt">
	<div class="container">
		<div class="mm-ribbon-title">
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.75 9.89 20 12l-2.25 2.11a2 2 0 0 0-.13 2.78L19 19l-1.94 1.35a2 2 0 0 1-2.71-.34L12 17l-2.35 3.01a2 2 0 0 1-2.71.34L5 19l1.38-2.11a2 2 0 0 0-.13-2.78L4 12l2.25-2.11a2 2 0 0 0 .13-2.78L5 5l1.94-1.35a2 2 0 0 1 2.71.34L12 7l2.35-3.01a2 2 0 0 1 2.71-.34L19 5l-1.38 2.11a2 2 0 0 0 .13 2.78Z"/></svg>
			<h2><?php esc_html_e( 'Our Story', 'men-matter' ); ?></h2>
		</div>

		<p class="mm-section-lead">
			<?php
			printf(
				/* translators: %s: founder name */
				esc_html__( 'Founded by psychiatric nurse %s, Men Matter addresses stigma, depression, and harmful coping mechanisms by creating safe spaces for conversation and healing. Our goal is to strengthen emotional wellbeing, promote mental health literacy, and empower men and youth in underserved communities.', 'men-matter' ),
				'<strong style="color:var(--mm-secondary);">Georgina Achieng Otieno</strong>'
			);
			?>
		</p>

		<div class="mm-grid mm-grid-3">
			<div class="mm-card">
				<h3><?php esc_html_e( 'Mission', 'men-matter' ); ?></h3>
				<p><?php esc_html_e( 'Promote emotional wellbeing and reduce stigma around mental health among men and youth through community engagement and education.', 'men-matter' ); ?></p>
			</div>
			<div class="mm-card">
				<h3><?php esc_html_e( 'Vision', 'men-matter' ); ?></h3>
				<p><?php esc_html_e( 'A community where men and youth speak openly about mental health and access the support they need without fear or judgment.', 'men-matter' ); ?></p>
			</div>
			<div class="mm-card">
				<h3><?php esc_html_e( 'Values', 'men-matter' ); ?></h3>
				<p><strong><?php esc_html_e( 'Compassion · Inclusion · Respect · Empowerment', 'men-matter' ); ?></strong></p>
			</div>
		</div>
	</div>
</section>
