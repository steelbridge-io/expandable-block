<?php
/**
 * Plugin Name: expandable-block
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: expandable-block — based on bootstrap css. Provides a verticasl list of collapsable containers.
 * Running bootstrap 3.3.7.
 * plugin created via create-guten-block.
 * Author: chris@steelbridge.io
 * Author URI: https://steelbridge.io
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
