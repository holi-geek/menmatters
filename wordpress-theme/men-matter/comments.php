<?php
/**
 * Comments template.
 *
 * @package MenMatter
 */

if ( post_password_required() ) return;
?>
<div id="comments" class="comments-area">
	<?php if ( have_comments() ) : ?>
		<h3><?php
			printf(
				/* translators: %s: comment count */
				esc_html( _n( '%s Comment', '%s Comments', get_comments_number(), 'men-matter' ) ),
				number_format_i18n( get_comments_number() )
			);
		?></h3>

		<ol class="comment-list" style="list-style:none;padding:0;">
			<?php wp_list_comments( array( 'style' => 'ol', 'short_ping' => true ) ); ?>
		</ol>

		<?php the_comments_pagination(); ?>
	<?php endif; ?>

	<?php if ( comments_open() ) comment_form(); ?>
</div>
