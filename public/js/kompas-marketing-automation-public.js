!function(e){var s={};function t(a){if(s[a])return s[a].exports;var o=s[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=s,t.d=function(e,s,a){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s=0)}([function(e,s,t){e.exports=t(1)},function(e,s,t){var a=kompas_automation_global_vars.home_url+"/manifest.json",o=kompas_automation_global_vars.home_url+"/service-worker.js",p=null,r=null,n=null,i=jQuery.ajax({url:a,type:"GET"}),b=jQuery.ajax({url:o,type:"GET"}),u=jQuery.ajax({url:kompas_automation_global_vars.ajax_url,type:"GET",dataType:"JSON",data:{action:"get_user_data_json"},success:function(e){p=e.user_id,r=e.relative_path,n=e.custom_event}});jQuery.when(i,b,u).done(function(e,s,t){!function(e,s,t,a,o){appboy={},appboyQueue=[];for(var p="initialize destroy getDeviceId toggleAppboyLogging setLogger openSession changeUser requestImmediateDataFlush requestFeedRefresh subscribeToFeedUpdates logCardImpressions logCardClick logFeedDisplayed requestInAppMessageRefresh logInAppMessageImpression logInAppMessageClick logInAppMessageButtonClick logInAppMessageHtmlClick subscribeToNewInAppMessages removeSubscription removeAllSubscriptions logCustomEvent logPurchase isPushSupported isPushBlocked isPushGranted isPushPermissionGranted registerAppboyPushMessages unregisterAppboyPushMessages submitFeedback ab ab.User ab.User.Genders ab.User.NotificationSubscriptionTypes ab.User.prototype.getUserId ab.User.prototype.setFirstName ab.User.prototype.setLastName ab.User.prototype.setEmail ab.User.prototype.setGender ab.User.prototype.setDateOfBirth ab.User.prototype.setCountry ab.User.prototype.setHomeCity ab.User.prototype.setLanguage ab.User.prototype.setEmailNotificationSubscriptionType ab.User.prototype.setPushNotificationSubscriptionType ab.User.prototype.setPhoneNumber ab.User.prototype.setAvatarImageUrl ab.User.prototype.setLastKnownLocation ab.User.prototype.setUserAttribute ab.User.prototype.setCustomUserAttribute ab.User.prototype.addToCustomAttributeArray ab.User.prototype.removeFromCustomAttributeArray ab.User.prototype.incrementCustomUserAttribute ab.User.prototype.addAlias ab.InAppMessage ab.InAppMessage.SlideFrom ab.InAppMessage.ClickAction ab.InAppMessage.DismissType ab.InAppMessage.OpenTarget ab.InAppMessage.ImageStyle ab.InAppMessage.Orientation ab.InAppMessage.CropType ab.InAppMessage.prototype.subscribeToClickedEvent ab.InAppMessage.prototype.subscribeToDismissedEvent ab.InAppMessage.prototype.removeSubscription ab.InAppMessage.prototype.removeAllSubscriptions ab.InAppMessage.Button ab.InAppMessage.Button.prototype.subscribeToClickedEvent ab.InAppMessage.Button.prototype.removeSubscription ab.InAppMessage.Button.prototype.removeAllSubscriptions ab.SlideUpMessage ab.ModalMessage ab.FullScreenMessage ab.HtmlMessage ab.ControlMessage ab.Feed ab.Feed.prototype.getUnreadCardCount ab.Card ab.ClassicCard ab.CaptionedImage ab.Banner ab.WindowUtils display display.automaticallyShowNewInAppMessages display.showInAppMessage display.showFeed display.destroyFeed display.toggleFeed sharedLib".split(" "),n=0;n<p.length;n++){for(var i=p[n],b=appboy,u=i.split("."),l=0;l<u.length-1;l++)b=b[u[l]];b[u[l]]=new Function("return function "+i.replace(/\./g,"_")+"(){appboyQueue.push(arguments)}")()}appboy.getUser=function(){return new appboy.ab.User},appboy.getCachedFeed=function(){return new appboy.ab.Feed},(o=s.createElement(t)).type="text/javascript",o.src=r+"/appboy.min.js",o.async=1,(a=s.getElementsByTagName(t)[0]).parentNode.insertBefore(o,a)}(window,document,"script"),appboy.initialize("4a5d11c5-a352-457f-91ab-f295e0f44228",{baseUrl:"https://sdk.iad-03.braze.com/api/v3",enableHtmlInAppMessages:!0,enableLogging:!1,minimumIntervalBetweenTriggerActionsInSeconds:1,safariWebsitePushId:"web.kompas.id"}),appboy.registerAppboyPushMessages(),appboy.subscribeToNewInAppMessages(function(e){var s=e[0];if(null!=s){var t=!0;s instanceof appboy.ab.InAppMessage&&"push-primer"==msgId&&((!appboy.isPushSupported()||appboy.isPushPermissionGranted()||appboy.isPushBlocked())&&(t=!1),null!=s.buttons[0]&&s.buttons[0].subscribeToClickedEvent(function(){appboy.registerAppboyPushMessages()})),t&&appboy.display.showInAppMessage(s)}return e.slice(1)}),p&&appboy.changeUser(p),n&&appboy.logCustomEvent(n,{url:kompas_automation_global_vars.this_url}),appboy.openSession()}).fail(function(e){console.error(e)})}]);