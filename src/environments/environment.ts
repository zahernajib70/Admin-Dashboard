// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDyawPquR9k41-4DIY1YX2cnCZhtvlPfbo",
    authDomain: "go2parts-senior-3490d.firebaseapp.com",
    projectId: "go2parts-senior-3490d",
    storageBucket: "go2parts-senior-3490d.appspot.com",
    messagingSenderId: "225368192480",
    appId: "1:225368192480:web:ee2fa075afd79ef20aa785"
  }
  ,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiemFoZXJuYWppYiIsImEiOiJjbDJtNHkyY20wazdlM2NuazdwamV5bGMxIn0.TPaPQ_nBYCWwyeTAIvHWfw'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
