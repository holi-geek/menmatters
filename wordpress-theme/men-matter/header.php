<?php
/**
 * The header for the Men Matter theme.
 *
 * @package MenMatter
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="screen-reader-text" href="#mm-content"><?php esc_html_e( 'Skip to content', 'men-matter' ); ?></a>

<header class="mm-navbar" role="banner">
	<div class="mm-navbar-inner">
		<a class="mm-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>">
			<?php if ( has_custom_logo() ) : ?>
				<?php the_custom_logo(); ?>
			<?php else : ?>
				<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/logo.png' ); ?>" alt="<?php bloginfo( 'name' ); ?>" width="36" height="36">
			<?php endif; ?>
			<span><?php bloginfo( 'name' ); ?></span>
		</a>

		<button class="mm-menu-toggle" aria-controls="mm-primary-menu" aria-expanded="false" aria-label="<?php esc_attr_e( 'Toggle menu', 'men-matter' ); ?>">&#9776;</button>

		<nav class="mm-menu" id="mm-primary-menu" role="navigation" aria-label="<?php esc_attr_e( 'Primary', 'men-matter' ); ?>">
			<?php
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'container'      => false,
				'menu_class'     => '',
				'fallback_cb'    => 'menmatter_default_menu',
				'depth'          => 2,
			) );
			?>
		</nav>
	</div>
</header>

<main id="mm-content" class="mm-site-content">
