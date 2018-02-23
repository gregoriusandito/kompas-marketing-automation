/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var manifest_url = kompas_automation_global_vars.home_url + '/manifest.json';
var service_worker_url = kompas_automation_global_vars.home_url + '/service-worker.js';

// lets check the manifest.json & service-worker.js
var manifest_check = jQuery.ajax({
    url: manifest_url,
    type: 'GET'
}),
    sw_check = jQuery.ajax({
    url: service_worker_url,
    type: 'GET'
});
jQuery.when(manifest_check, sw_check).done(function (manifest_check, sw_check) {
    // include the components when all the files 
    // (manifest & service worker) exists 
    __webpack_require__(2);
}).fail(function (error) {
    // throw error
    console.error(error);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var cookie = __webpack_require__(3);

// console.log(fetch_user_id[0]);

+function (a, p, P, b, y) {
    appboy = {};appboyQueue = [];for (var s = "initialize destroy getDeviceId toggleAppboyLogging setLogger openSession changeUser requestImmediateDataFlush requestFeedRefresh subscribeToFeedUpdates logCardImpressions logCardClick logFeedDisplayed requestInAppMessageRefresh logInAppMessageImpression logInAppMessageClick logInAppMessageButtonClick logInAppMessageHtmlClick subscribeToNewInAppMessages removeSubscription removeAllSubscriptions logCustomEvent logPurchase isPushSupported isPushBlocked isPushGranted isPushPermissionGranted registerAppboyPushMessages unregisterAppboyPushMessages submitFeedback ab ab.User ab.User.Genders ab.User.NotificationSubscriptionTypes ab.User.prototype.getUserId ab.User.prototype.setFirstName ab.User.prototype.setLastName ab.User.prototype.setEmail ab.User.prototype.setGender ab.User.prototype.setDateOfBirth ab.User.prototype.setCountry ab.User.prototype.setHomeCity ab.User.prototype.setLanguage ab.User.prototype.setEmailNotificationSubscriptionType ab.User.prototype.setPushNotificationSubscriptionType ab.User.prototype.setPhoneNumber ab.User.prototype.setAvatarImageUrl ab.User.prototype.setLastKnownLocation ab.User.prototype.setUserAttribute ab.User.prototype.setCustomUserAttribute ab.User.prototype.addToCustomAttributeArray ab.User.prototype.removeFromCustomAttributeArray ab.User.prototype.incrementCustomUserAttribute ab.User.prototype.addAlias ab.InAppMessage ab.InAppMessage.SlideFrom ab.InAppMessage.ClickAction ab.InAppMessage.DismissType ab.InAppMessage.OpenTarget ab.InAppMessage.ImageStyle ab.InAppMessage.Orientation ab.InAppMessage.CropType ab.InAppMessage.prototype.subscribeToClickedEvent ab.InAppMessage.prototype.subscribeToDismissedEvent ab.InAppMessage.prototype.removeSubscription ab.InAppMessage.prototype.removeAllSubscriptions ab.InAppMessage.Button ab.InAppMessage.Button.prototype.subscribeToClickedEvent ab.InAppMessage.Button.prototype.removeSubscription ab.InAppMessage.Button.prototype.removeAllSubscriptions ab.SlideUpMessage ab.ModalMessage ab.FullScreenMessage ab.HtmlMessage ab.ControlMessage ab.Feed ab.Feed.prototype.getUnreadCardCount ab.Card ab.ClassicCard ab.CaptionedImage ab.Banner ab.WindowUtils display display.automaticallyShowNewInAppMessages display.showInAppMessage display.showFeed display.destroyFeed display.toggleFeed sharedLib".split(" "), i = 0; i < s.length; i++) {
        for (var m = s[i], k = appboy, l = m.split("."), j = 0; j < l.length - 1; j++) {
            k = k[l[j]];
        }k[l[j]] = new Function("return function " + m.replace(/\./g, "_") + "(){appboyQueue.push(arguments)}")();
    }appboy.getUser = function () {
        return new appboy.ab.User();
    };appboy.getCachedFeed = function () {
        return new appboy.ab.Feed();
    };(y = p.createElement(P)).type = 'text/javascript';y.src = kompas_automation_global_vars.appboy_relative_path;y.async = 1;(b = p.getElementsByTagName(P)[0]).parentNode.insertBefore(y, b);
}(window, document, 'script');

appboy.initialize("4a5d11c5-a352-457f-91ab-f295e0f44228", {
    baseUrl: "https://sdk.iad-03.braze.com/api/v3",
    enableHtmlInAppMessages: true,
    enableLogging: true,
    minimumIntervalBetweenTriggerActionsInSeconds: 1,
    safariWebsitePushId: ''

});

appboy.registerAppboyPushMessages();
// appboy.toggleAppboyLogging();
// appboy.display.automaticallyShowNewInAppMessages();

// soft push messaging

appboy.subscribeToNewInAppMessages(function (inAppMessages) {
    var message = inAppMessages[0];
    if (message != null) {
        var shouldDisplay = true;

        if (message instanceof appboy.ab.InAppMessage) {
            // Read the key-value pair for msg-id
            // var msgId = message.extras["msg-id"];

            // If this is our push primer message
            if (msgId == "push-primer") {
                // We don't want to display the soft push prompt to users on browsers that don't support push, or if the user
                // has already granted/blocked permission
                if (!appboy.isPushSupported() || appboy.isPushPermissionGranted() || appboy.isPushBlocked()) {
                    shouldDisplay = false;
                }
                if (message.buttons[0] != null) {
                    // Prompt the user when the first button is clicked
                    message.buttons[0].subscribeToClickedEvent(function () {
                        appboy.registerAppboyPushMessages();
                    });
                }
            }
        }

        // Display the message
        if (shouldDisplay) {
            appboy.display.showInAppMessage(message);
        }
    }

    // Remove this message from the array of IAMs and return whatever's left
    return inAppMessages.slice(1);
});

// soft push messaging

/*
* If you have a unique identifier for this user (e.g. they are logged into your site) it's a good idea to call
* changeUser here.
* See https://js.appboycdn.com/web-sdk/latest/doc/module-appboy.html#.changeUser for more information.
*/
// if( cookie.userid ) {
//     appboy.changeUser(cookie.userid);  
// } 

if (kompas_automation_global_vars.surrogate_key) {
    appboy.changeUser(kompas_automation_global_vars.surrogate_key);
}

// if custom event exist, activate logCustomEvent
// default: send current url
if (kompas_automation_global_vars.custom_event) {
    appboy.logCustomEvent(kompas_automation_global_vars.custom_event, { url: kompas_automation_global_vars.this_url });
}

appboy.openSession();
// appboy.display.showFeed(); <-- only active when we want to use the appboy' news feed

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var get_cookie = void 0,
    my_cookie = void 0,
    mycookie_parse = '',
    username = '',
    userid = '';

// https://www.w3schools.com/js/js_cookies.asp
get_cookie = function get_cookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

mycookie = get_cookie('kantormu');

// parse cookies
// https://assets.kompas.id/wp-content/themes/mumed_kompas_dot_id_2016/assets/libs/accesslogs/accesslogs.js?ver=1.0.3
if (mycookie) {
    mycookie_parse = JSON.parse(mycookie);
    username = mycookie_parse.user.username;
    if (_typeof(mycookie_parse.user.id) !== ( true ? 'undefined' : _typeof(undefined))) {
        userid = mycookie_parse.user.id;
    }
}

var exports = module.exports = {
    'username': username,
    'userid': userid
};

/***/ })
/******/ ]);