<?php
/**
 * Search form template.
 *
 * @package MenMatter
 */
?>
<form role="search" method="get" class="mm-search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label class="screen-reader-text" for="s"><?php esc_html_e( 'Search for:', 'men-matter' ); ?></label>
	<input type="search" id="s" name="s" value="<?php echo esc_attr( get_search_query() ); ?>" placeholder="<?php esc_attr_e( 'Search…', 'men-matter' ); ?>" style="padding:0.6rem 0.9rem;border:1px solid var(--mm-border);border-radius:0.5rem;min-width:220px;">
	<button type="submit" class="mm-btn mm-btn-primary" style="padding:0.6rem 1.25rem;"><?php esc_html_e( 'Search', 'men-matter' ); ?></button>
</form>
