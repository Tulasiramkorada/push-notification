// import { from } from "core-js/core/array";
import { initializeApp, getApps } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAEi15Q3aY3Gow3VpFKJLFyFPEB_tQUcyI",
  authDomain: "logapp-60658.firebaseapp.com",
  projectId: "logapp-60658",
  storageBucket: "logapp-60658.appspot.com",
  messagingSenderId: "311233086284",
  appId: "1:311233086284:web:2eba842a6866816aea45e9",
  measurementId: "G-YWMZP9X5XY"
};

  const apps=getApps();
  const app=!apps.length ? initializeApp(firebaseConfig) : apps[0];


  export const messaging= getMessaging(app);
