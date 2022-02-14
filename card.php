<?php
/**
 * Plugin Name:       WPSL Card
 * Description:       WPSL generic card block.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Sam Lem
 * Author URI:				https://samlem.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       card
 *
 * @package           wpsl
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 */
function wpsl_card_block_init() {
	register_block_type( __DIR__ . '/build',
		array(
			'render_callback' => 'wpsl_card_render_callback',
		)
	);
}
add_action( 'init', 'wpsl_card_block_init' );


/**
 * Render block function (can be overridden using the `wpsl_card_render` filter hook.
 */
function wpsl_card_render_block ( $props ) {
	$url = $props["url"];
	$image = $props["imageId"];
	$title = $props["title"];

	if (!$url || !strlen($url) || !$image) {
		return;
	}

	$classes = "wpsl_card";
	$img_src = esc_url( wp_get_attachment_image_url( $image, 'large' ) );
	$img_srcset = esc_attr( wp_get_attachment_image_srcset( $image, 'medium' ) );

	$html = "<a href='$url' class='$classes'>";

	// Cover
	$html .= "<div class='wpsl_card-cover'>";
	// Overlay
	$html .= "<div class='wpsl_card-cover-overlay'></div>";
	// Image
	$html .= "
				<img
					class='wpsl_card-cover-img'
					src='$img_src'
					srcset='$img_srcset'
					sizes='(max-width: 768px) 100vw, 768px'
					alt=''
				/>";
	$html .= "</div>"; // .wpsl_card-cover-wrapper

	// Title
	if ($title && strlen($title) > 0) {
		$html .= "<div class='wpsl_card-title'>$title</div>";
	}
	$html .= "</a>";
	return $html;
};

add_filter('wpsl_card_render', 'wpsl_card_render_block');


/**
 * Render callback function, with `wpsl_card_render` filter hook.
 *
 * @param array $props {
 * 		@type string 'url' - URL to link
 * 		@type int 'imageId' - Selected image's WordPress ID
 * 		@type string 'title' - Optional. Card title, set in editor
 * }
 * @return string - HTML render
 */
function wpsl_card_render_callback ($props) {
	return apply_filters('wpsl_card_render', $props);
}
