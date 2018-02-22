<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://kompas.id
 * @since             1.0.0
 * @package           kompas-marketing-automation
 *
 * @wordpress-plugin
 * Plugin Name:       Kompas Marketing Automation
 * Plugin URI:        
 * Description:       Kompas marketing automation using Braze
 * Version:           1.0.0
 * Author:            Yosef Yudha Wijaya
 * Author URI:        https://yudhawijaya.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       kompas-marketing-automation
 * Domain Path:       
 */
// if someone deliberately call this file directly, exterminate! exterminate! exterminate!
if ( !defined( 'WPINC' ) ) {
    die;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-kompas-marketing-automation-activator.php
 */
function activate_kompas_marketing_automation () {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-kompas-marketing-automation-activator.php';
	Kompas_Marketing_Automation_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-kompas-marketing-automation-deactivator.php
 */
function deactivate_kompas_marketing_automation () {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-kompas-marketing-automation-deactivator.php';
	Kompas_Marketing_Automation_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_kompas_marketing_automation' );
register_deactivation_hook( __FILE__, 'deactivate_kompas_marketing_automation' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-kompas-marketing-automation.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_kompas_marketing_automation() {
	$plugin = new Kompas_Marketing_Automation();
	$plugin->run();
}

run_kompas_marketing_automation();