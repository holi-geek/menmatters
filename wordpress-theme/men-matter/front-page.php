<?php
/**
 * Front page — same as index but only shows homepage sections.
 *
 * @package MenMatter
 */

get_header();

get_template_part( 'template-parts/section', 'hero' );
get_template_part( 'template-parts/section', 'about' );
get_template_part( 'template-parts/section', 'programs' );
get_template_part( 'template-parts/section', 'impact' );
get_template_part( 'template-parts/section', 'get-involved' );

get_footer();
