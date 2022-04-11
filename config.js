import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA2pPKg1qtIbR7wdC5zPD20DSHyODj1KAA",
    authDomain: "teamvoting-app-4982e.firebaseapp.com",
    databaseURL: "https://teamvoting-app-4982e-default-rtdb.firebaseio.com",
    projectId: "teamvoting-app-4982e",
    storageBucket: "teamvoting-app-4982e.appspot.com",
    messagingSenderId: "223743124929",
    appId: "1:223743124929:web:33390f5b82d63b661f3b40",
    measurementId: "G-1CCV8HFKL5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();