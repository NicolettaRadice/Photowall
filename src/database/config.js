import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBdoiB8PeA0PCeLN0LsKyWh8136CFzLAaU",
    authDomain: "photowall-27722.firebaseapp.com",
    databaseURL: "https://photowall-27722.firebaseio.com",
    projectId: "photowall-27722",
    storageBucket: "photowall-27722.appspot.com",
    messagingSenderId: "555534850671",
    appId: "1:555534850671:web:74c8978b09b4801d1f8b9a",
    measurementId: "G-76Y9X3467C"
  };
  
  firebase.initializeApp(firebaseConfig)
  const database = firebase.database()
  
  export {database}
