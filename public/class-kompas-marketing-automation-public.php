<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://kompas.id
 * @since      1.0.0
 *
 * @package    kompas-marketing-automation
 * @subpackage kompas-marketing-automation/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    kompas-marketing-automation
 * @subpackage kompas-marketing-automation/public
 * @author     Gregorius Andito Herjuno <gregorius.andito@kompas.com>
 */
class Kompas_Marketing_Automation_Public {

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
	 * Braze Key
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    
	 */
	private $braze_key;
	
	/**
	 * Mcrypt Key Arguments
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    
	 */
	private $mcrypt_key_args;	

	/**
	 * The dotenv settings
	 *
	 * @since    1.1.0
	 * @access   private
	 * @var      string 
	 */
	private $dotenv;

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
		 
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/kompas-marketing-automation-public.js', array( 'jquery' ), $this->version, true );
		
	    wp_localize_script( $this->plugin_name, 'kompas_automation_global_vars', array(
	        // 'relative_path'			=> plugin_dir_url( __FILE__ ). 'js',
	        // 'custom_event'			=> get_option('kompas_marketing_automation_custom_event_name') ? get_option('kompas_marketing_automation_custom_event_name') : '',
	        'this_url'				=> $this->get_current_page_link(),
	        'home_url'				=> home_url(),
	        'ajax_url'				=> admin_url( 'admin-ajax.php' )
	    ) );

	}
	
	public function add_manifest() {
		
		$link = '<link rel="manifest" href="'. home_url() .'/manifest.json">';
		
        echo $link;
	}
	
	private function get_current_page_link() {
		$queried_object = get_queried_object();
		
		if ( $queried_object->term_id ) :
			$url = get_term_link( $queried_object );
		elseif ( is_cart() || is_checkout() || is_product() || is_product_category() || is_shop() || is_page(array('produk-kategori','katalog','wishlist')) ) :
			$url = home_url().$_SERVER['REQUEST_URI'];
		else :
			$url = get_permalink();
		endif;	
		
		return $url;
	}
	
	private function get_uuid() {
		
		// init: wpdb
		global $wpdb;
		
		// get user
		global $current_user;
		$user_id = get_current_user_id();
		
		$main_db = $wpdb->base_prefix.'users_guid';
		
        $the_query		=	"SELECT user_guid FROM $main_db ug
        					WHERE ug.user_id = $user_id 
        				";
        				
		$result			=	$wpdb->get_row( $the_query );		
		
		return $result->user_guid; 
		
	}	
	
	public function get_user_data_json() {
		
		$data	=	array(
						'user_id'				=> $this->get_uuid() ? $this->get_uuid() : '',
						'relative_path'			=> plugin_dir_url( __FILE__ ). 'js',
						'custom_event'			=> get_option('kompas_marketing_automation_custom_event_name') ? get_option('kompas_marketing_automation_custom_event_name') : '',
					);
		
		echo json_encode( $data );
		wp_die();
	}
	
	
}
