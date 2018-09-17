var app_firebase = {}
(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDeh0-RllOkvz7hmspeMgrGaRA1QCkz8JQ",
        authDomain: "gigabro-website.firebaseapp.com",
        databaseURL: "https://gigabro-website.firebaseio.com",
        projectId: "gigabro-website",
        storageBucket: "gigabro-website.appspot.com",
        messagingSenderId: "246260407173"
    };
    firebase.initializeApp(config);
    app_firebase = firebase;
})