cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.vibration/www/vibration.js",
        "id": "org.apache.cordova.vibration.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification",
        "clobbers": [
            "plugin.notification.local"
        ]
    },
    {
        "file": "plugins/org.transistorsoft.cordova.background-geolocation/www/BackgroundGeoLocation.js",
        "id": "org.transistorsoft.cordova.background-geolocation.BackgroundGeoLocation",
        "clobbers": [
            "plugins.backgroundGeoLocation"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device": "0.2.9",
    "org.apache.cordova.dialogs": "0.2.7",
    "org.apache.cordova.vibration": "0.3.8",
    "de.appplant.cordova.plugin.local-notification": "0.8.0dev",
    "org.transistorsoft.cordova.background-geolocation": "0.2.0",
    "org.apache.cordova.geolocation": "0.3.7"
}
// BOTTOM OF METADATA
});