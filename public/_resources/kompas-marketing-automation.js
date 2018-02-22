let manifest_url            =   kompas_automation_global_vars.home_url + '/manifest.json';
let service_worker_url      =   kompas_automation_global_vars.home_url + '/service-worker.js';

// lets check the manifest.json & service-worker.js
let manifest_check      = jQuery.ajax({
                            url       : manifest_url,
                            type      : 'GET',
                        }),
    sw_check            = jQuery.ajax({
                            url       : service_worker_url,
                            type      : 'GET',
                        });

jQuery.when(manifest_check, sw_check)
    .done(() => {
        // include the components when all the files 
        // (manifest & service worker) exists 
        require("./_braze-init.js");
    })
    .fail((error) => {
        // thrown error
        console.error(error);
    });
