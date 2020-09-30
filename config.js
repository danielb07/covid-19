import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDnLymFUnG-jUv2uqenkqsyvgxNk6tXg6I",
    authDomain: "covid-19-app-3ea96.firebaseapp.com",
    databaseURL: "https://covid-19-app-3ea96.firebaseio.com",
    projectId: "covid-19-app-3ea96",
    storageBucket: "covid-19-app-3ea96.appspot.com",
    messagingSenderId: "42963493708",
    appId: "1:42963493708:web:7b54796c1daf6805f7e5e9",
    measurementId: "G-MN0P9HVG3F"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();