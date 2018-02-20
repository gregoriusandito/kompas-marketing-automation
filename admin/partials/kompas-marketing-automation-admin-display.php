<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Kompas_Marketing_Automation
 * @subpackage Kompas_Marketing_Automation/admin/partials
 */
 
?>

<div class="wrap">
<h2>Braze Settings</h2>
<?php settings_errors(); ?>
<form method="post" action="options.php">
    <?php settings_fields( 'kompas-marketing-automation-settings-group' ); ?>
    <?php do_settings_sections( 'kompas-marketing-automation-settings-group' ); ?>
    <table class="form-table">
        <tr valign="top">
        <th scope="row">Custom Event Name</th>
        <td><input type="text" required name="kompas_marketing_automation_custom_event_name" value="<?php echo get_option('kompas_marketing_automation_custom_event_name'); ?>" /></td>
        </tr>
    </table>
    
    <?php submit_button(); ?>     
</form>
</div>