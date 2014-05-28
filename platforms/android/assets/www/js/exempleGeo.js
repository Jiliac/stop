document.addEventListener("deviceready", onDeviceReady, true); 


function onDeviceReady() {
    alert('Device ready');

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    var bgGeo = window.plugins.backgroundGeoLocation;

    // BackgroundGeoLocation is highly configurable.
    bgGeo.configure(callbackFn, failureFn, {
        /*
        url: 'http://only.for.android.com/update_location.json', // <-- only required for Android; ios allows javascript callbacks for your http
        authToken: 'user_secret_auth_token',    // <-- only required for Android; ios allows javascript callbacks for your http
        */
        desiredAccuracy: 10,
        stationaryRadius: 20,
        distanceFilter: 30,
        debug: true // <-- enable this hear sounds for background-geolocation life-cycle.
    });

    // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
    bgGeo.start();
    alert('ok');


}

function onSuccess(position) {
    window.plugin.notification.local.add({ message: 'First GeoLocation callback:  ' + position.coords.latitude + ', ' + position.coords.longitude });
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
      'message: ' + error.message + '\n');
}

/**
* This callback will be executed every time a geolocation is recorded in the background.
*/
var callbackFn = function(location) {
    window.plugin.notification.local.add({ message: 'Background GeoLocation callback:  ' + position.coords.latitude + ', ' + position.coords.longitude });
    alert("Location recorded");
};


var failureFn = function(error) {
    console.log('BackgroundGeoLocation error');
    alert("BackgroundGeoLocation error");
}

  // If you wish to turn OFF background-tracking, call the #stop method.
    // bgGeo.stop()