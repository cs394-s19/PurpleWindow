// Initialize Firebase

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD26AQhzl73lJeBzGZ4EsSOKcpICv2FA1o",
  authDomain: "purplewindow-3acf0.firebaseapp.com",
  databaseURL: "https://purplewindow-3acf0.firebaseio.com",
  projectId: "purplewindow-3acf0",
  storageBucket: "purplewindow-3acf0.appspot.com",
  messagingSenderId: "794968149806"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
