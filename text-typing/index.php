<?php
/**
 * Plugin Name: Text Typing - Block
 * Description: Make your text in amazing typing effect.
 * Version: 1.0.6
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: text-typing
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'TTB_PLUGIN_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.6' );
define( 'TTB_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'TTB_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'TTBPlugin' ) ) {
	class TTBPlugin{
		function __construct(){
			add_action( 'enqueue_block_assets', [$this, 'enqueueBlockAssets'] );
			add_action( 'init', [$this, 'onInit'] );
		}

		function enqueueBlockAssets(){
			wp_register_script( 'typedJS', TTB_DIR_URL . 'public/js/typed.min.js', [], '2.0.12', true );
		}

		function onInit() {
			register_block_type( __DIR__ . '/build' );
		}
	}
	new TTBPlugin();
}