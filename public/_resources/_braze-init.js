+function(a,p,P,b,y){appboy={};appboyQueue=[];for(var s="initialize destroy getDeviceId toggleAppboyLogging setLogger openSession changeUser requestImmediateDataFlush requestFeedRefresh subscribeToFeedUpdates logCardImpressions logCardClick logFeedDisplayed requestInAppMessageRefresh logInAppMessageImpression logInAppMessageClick logInAppMessageButtonClick logInAppMessageHtmlClick subscribeToNewInAppMessages removeSubscription removeAllSubscriptions logCustomEvent logPurchase isPushSupported isPushBlocked isPushGranted isPushPermissionGranted registerAppboyPushMessages unregisterAppboyPushMessages submitFeedback ab ab.User ab.User.Genders ab.User.NotificationSubscriptionTypes ab.User.prototype.getUserId ab.User.prototype.setFirstName ab.User.prototype.setLastName ab.User.prototype.setEmail ab.User.prototype.setGender ab.User.prototype.setDateOfBirth ab.User.prototype.setCountry ab.User.prototype.setHomeCity ab.User.prototype.setLanguage ab.User.prototype.setEmailNotificationSubscriptionType ab.User.prototype.setPushNotificationSubscriptionType ab.User.prototype.setPhoneNumber ab.User.prototype.setAvatarImageUrl ab.User.prototype.setLastKnownLocation ab.User.prototype.setUserAttribute ab.User.prototype.setCustomUserAttribute ab.User.prototype.addToCustomAttributeArray ab.User.prototype.removeFromCustomAttributeArray ab.User.prototype.incrementCustomUserAttribute ab.User.prototype.addAlias ab.InAppMessage ab.InAppMessage.SlideFrom ab.InAppMessage.ClickAction ab.InAppMessage.DismissType ab.InAppMessage.OpenTarget ab.InAppMessage.ImageStyle ab.InAppMessage.Orientation ab.InAppMessage.CropType ab.InAppMessage.prototype.subscribeToClickedEvent ab.InAppMessage.prototype.subscribeToDismissedEvent ab.InAppMessage.prototype.removeSubscription ab.InAppMessage.prototype.removeAllSubscriptions ab.InAppMessage.Button ab.InAppMessage.Button.prototype.subscribeToClickedEvent ab.InAppMessage.Button.prototype.removeSubscription ab.InAppMessage.Button.prototype.removeAllSubscriptions ab.SlideUpMessage ab.ModalMessage ab.FullScreenMessage ab.HtmlMessage ab.ControlMessage ab.Feed ab.Feed.prototype.getUnreadCardCount ab.Card ab.ClassicCard ab.CaptionedImage ab.Banner ab.WindowUtils display display.automaticallyShowNewInAppMessages display.showInAppMessage display.showFeed display.destroyFeed display.toggleFeed sharedLib".split(" "),i=0;i<s.length;i++){for(var m=s[i],k=appboy,l=m.split("."),j=0;j<l.length-1;j++)k=k[l[j]];k[l[j]]=(new Function("return function "+m.replace(/\./g,"_")+"(){appboyQueue.push(arguments)}"))()}appboy.getUser=function(){return new appboy.ab.User};appboy.getCachedFeed=function(){return new appboy.ab.Feed};(y=p.createElement(P)).type='text/javascript';y.src=kompas_automation_global_vars.relative_path + '/appboy.min.js';y.async=1;(b=p.getElementsByTagName(P)[0]).parentNode.insertBefore(y,b)}(window,document,'script');

appboy.initialize(process.env.PLUGIN_KOMPAS_MARKETING_AUTO_BRAZE_KEY, {
    baseUrl: process.env.PLUGIN_KOMPAS_MARKETING_AUTO_BRAZE_URL,
    enableHtmlInAppMessages: true,
    enableLogging: false, 
    minimumIntervalBetweenTriggerActionsInSeconds: 1, 
    safariWebsitePushId:'' 
    
});

appboy.registerAppboyPushMessages();

// soft push messaging
appboy.subscribeToNewInAppMessages(function(inAppMessages) {
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
                    message.buttons[0].subscribeToClickedEvent(function() {
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

if( kompas_automation_global_vars.surrogate_key ) {
    appboy.changeUser(kompas_automation_global_vars.surrogate_key);  
} 

// if custom event exist, activate logCustomEvent
// default: send current url
if ( kompas_automation_global_vars.custom_event ) {
    appboy.logCustomEvent( kompas_automation_global_vars.custom_event, {url: kompas_automation_global_vars.this_url} );    
}

appboy.openSession();
// appboy.display.showFeed(); <-- only active when we want to use the appboy' news feed