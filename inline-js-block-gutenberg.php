<?php
/**
 * Plugin Name:    Inline JS block for Gutenberg
 * Description:    This plugin adds an Above the fold JS in your webpages to reduce page load time or Any custom needs for your designs.
 * Version:        1.0.0
 * Author:         WPBrigade
 * Author URI:     https://WPBrigade.com/
 * Text Domain:    inline-js-block-gutenberg
 * Domain Path:    /languages
 *
 * @package WPBBlocks
 * @category blocks
 * @author WPBrigade
 */

defined( 'ABSPATH' ) || exit;


define('PLUGIN_NAME', 'inline js block' );
define('PLUGIN_VERSION', '1.0.0');

/**
 * Enqueue js library for block.
 *
 * @return void
 */
function inline_js_block__enqueue_block_editor_assets() {
	// 'wp-api', 'jquery' 'underscore'.
	wp_enqueue_script( 'inline-js-block-js', plugins_url( 'js/block.build.js', __FILE__ ), array( 'wp-blocks', 'wp-i18n', 'wp-element', 'underscore' ), PLUGIN_VERSION );
	wp_enqueue_style( 'inline-js-block-css', plugins_url( 'css/blocks.style.css', __FILE__ ), array( 'wp-blocks' ), PLUGIN_VERSION );
}

add_action( 'enqueue_block_editor_assets', 'inline_js_block__enqueue_block_editor_assets' );


/**
 * Enqueue css for blocks.
 *
 * @return void
 */
function inline_js_block_enqueue_block_assets() {
	wp_enqueue_style( 'inline-js-block-css', plugins_url( 'css/blocks.style.css', __FILE__ ), array( 'wp-blocks' ), PLUGIN_VERSION );
}

add_action( 'enqueue_block_assets', 'inline_js_block_enqueue_block_assets' );
