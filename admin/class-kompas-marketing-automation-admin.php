<?php

/**
 * The admin-facing functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    kompas-marketing-automation
 * @subpackage kompas-marketing-automation/admin
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    kompas-marketing-automation
 * @subpackage kompas-marketing-automation/public
 * @author     Your Name <email@example.com>
 */
class Kompas_Marketing_Automation_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name		= 'kompas-marketing-automation';
		$this->version			= '1.0.0';

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Plugin_Name_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Plugin_Name_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		// wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/plugin-name-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Plugin_Name_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Plugin_Name_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		 
		// wp_enqueue_script( $this->plugin_name, 'https://appboy21.coolpis.net/appboy.min.js', array( 'jquery' ), $this->version, false );
		// wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/kompas-marketing-automation-public.js', array( 'jquery' ), $this->version, false );

	}
	
	public function add_menu() {
		// create custom plugin settings menu
		add_action('admin_menu', array( $this, 'add_sidebar_menu'));
	
		//call register settings function
		add_action( 'admin_init', array( $this, 'register_admin_settings') );
	}

	public function add_sidebar_menu() {
		//create new top-level menu
		add_menu_page('KOMPAS.ID Braze Settings', 'Braze Settings', 'administrator', __FILE__, array( $this, 'braze_menu_init'), ''); // iconurl: plugins_url('/images/icon.png', __FILE__)
		
	}	
	
	
	public function register_admin_settings() {
		//register our settings
		register_setting( 'kompas-marketing-automation-settings-group', 'kompas_marketing_automation_custom_event_name' );
	}	
	

	public function braze_menu_init() {
		//include template file 
		include_once plugin_dir_path( __FILE__ ) . '/partials/kompas-marketing-automation-admin-display.php';
	}	

}
