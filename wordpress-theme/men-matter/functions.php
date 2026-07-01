<?php
/**
 * Men Matter theme functions.
 *
 * @package MenMatter
 */

if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! defined( 'MM_VERSION' ) ) {
	define( 'MM_VERSION', '1.0.0' );
}

/**
 * Theme setup.
 */
function menmatter_setup() {
	load_theme_textdomain( 'men-matter', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'editor-styles' );
	add_editor_style( 'assets/css/editor-style.css' );

	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list',
		'gallery', 'caption', 'style', 'script',
	) );

	add_theme_support( 'custom-logo', array(
		'height'      => 100,
		'width'       => 100,
		'flex-height' => true,
		'flex-width'  => true,
	) );

	add_theme_support( 'editor-color-palette', array(
		array( 'name' => __( 'Emerald', 'men-matter' ),    'slug' => 'primary',   'color' => '#26a26a' ),
		array( 'name' => __( 'Terracotta', 'men-matter' ), 'slug' => 'secondary', 'color' => '#e05a1f' ),
		array( 'name' => __( 'Amber', 'men-matter' ),      'slug' => 'accent',    'color' => '#f2b825' ),
		array( 'name' => __( 'Beige', 'men-matter' ),      'slug' => 'background','color' => '#fdfaf5' ),
		array( 'name' => __( 'Charcoal', 'men-matter' ),   'slug' => 'foreground','color' => '#21262e' ),
	) );

	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'men-matter' ),
		'footer'  => __( 'Footer Menu', 'men-matter' ),
	) );
}
add_action( 'after_setup_theme', 'menmatter_setup' );

/**
 * Enqueue styles and scripts.
 */
function menmatter_enqueue_assets() {
	wp_enqueue_style(
		'men-matter-style',
		get_stylesheet_uri(),
		array(),
		MM_VERSION
	);

	wp_enqueue_script(
		'men-matter-nav',
		get_template_directory_uri() . '/assets/js/navigation.js',
		array(),
		MM_VERSION,
		true
	);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'menmatter_enqueue_assets' );

/**
 * Register widget area (footer).
 */
function menmatter_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Footer Widgets', 'men-matter' ),
		'id'            => 'footer-1',
		'description'   => __( 'Widgets shown in the footer.', 'men-matter' ),
		'before_widget' => '<div class="mm-footer-widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h4>',
		'after_title'   => '</h4>',
	) );
}
add_action( 'widgets_init', 'menmatter_widgets_init' );

/**
 * Fallback for the primary menu when none is assigned.
 */
function menmatter_default_menu() {
	echo '<ul>';
	echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Home', 'men-matter' ) . '</a></li>';
	echo '<li><a href="' . esc_url( home_url( '/#about' ) ) . '">' . esc_html__( 'About', 'men-matter' ) . '</a></li>';
	echo '<li><a href="' . esc_url( home_url( '/#programs' ) ) . '">' . esc_html__( 'Programs', 'men-matter' ) . '</a></li>';
	echo '<li><a href="' . esc_url( home_url( '/#impact' ) ) . '">' . esc_html__( 'Impact', 'men-matter' ) . '</a></li>';
	echo '<li><a href="' . esc_url( home_url( '/#get-involved' ) ) . '">' . esc_html__( 'Get Involved', 'men-matter' ) . '</a></li>';
	echo '</ul>';
}

/**
 * Custom excerpt length.
 */
function menmatter_excerpt_length( $length ) {
	return 24;
}
add_filter( 'excerpt_length', 'menmatter_excerpt_length' );
