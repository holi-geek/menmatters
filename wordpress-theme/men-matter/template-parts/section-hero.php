<?php
/**
 * Hero section.
 *
 * @package MenMatter
 */

$hero_bg = get_template_directory_uri() . '/assets/images/hero-bg.jpg';
$logo    = get_template_directory_uri() . '/assets/images/logo.png';
?>
<section id="home" class="mm-hero">
	<img class="mm-hero-bg" src="<?php echo esc_url( $hero_bg ); ?>" alt="" width="1920" height="1080" fetchpriority="high">
	<div class="mm-hero-overlay"></div>
	<div class="mm-hero-inner">
		<img class="mm-hero-logo" src="<?php echo esc_url( $logo ); ?>" alt="<?php esc_attr_e( 'Men Matter logo', 'men-matter' ); ?>" width="112" height="112" fetchpriority="high">

		<h1>
			<?php esc_html_e( 'Mental Health Matters.', 'men-matter' ); ?>
			<span class="accent"><?php esc_html_e( 'Men Matter.', 'men-matter' ); ?></span>
		</h1>

		<p class="mm-hero-sub">
			<?php esc_html_e( 'A community-based initiative improving mental wellbeing among men and youth through education, dialogue, and advocacy.', 'men-matter' ); ?>
		</p>

		<p class="mm-hero-tagline">🎗 think · talk · thrive 🎗</p>

		<div class="mm-hero-chips">
			<?php
			$chips = array(
				__( 'Community Dialogues', 'men-matter' ),
				__( 'Youth Mental Health', 'men-matter' ),
				__( 'Media Advocacy', 'men-matter' ),
				__( 'Prison Outreach', 'men-matter' ),
			);
			foreach ( $chips as $chip ) {
				echo '<span class="mm-chip">' . esc_html( $chip ) . '</span>';
			}
			?>
		</div>

		<div class="mm-cta-row">
			<a class="mm-btn mm-btn-primary" href="#get-involved"><?php esc_html_e( 'Get Involved', 'men-matter' ); ?></a>
			<a class="mm-btn mm-btn-outline" href="#contact"><?php esc_html_e( 'Contact Us', 'men-matter' ); ?></a>
		</div>
	</div>
</section>
