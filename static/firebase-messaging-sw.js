importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyAEi15Q3aY3Gow3VpFKJLFyFPEB_tQUcyI",
    authDomain: "logapp-60658.firebaseapp.com",
    projectId: "logapp-60658",
    storageBucket: "logapp-60658.appspot.com",
    messagingSenderId: "311233086284",
    appId: "1:311233086284:web:2eba842a6866816aea45e9",
    measurementId: "G-YWMZP9X5XY"
  };

  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging()
    messaging.onBackgroundMessage((payload) => {
        console.log(
            "[firebase-messaging-sw.js] Received background message ",
            payload
        )
    })