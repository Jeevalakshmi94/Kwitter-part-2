
//ADD YOUR FIREBASE LINKS HERE


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDJr-Ih4nCnUnerS5EPaRQ0b3kZjF1AakM",
    authDomain: "class-test-ced3e.firebaseapp.com",
    databaseURL: "https://class-test-ced3e-default-rtdb.firebaseio.com",
    projectId: "class-test-ced3e",
    storageBucket: "class-test-ced3e.appspot.com",
    messagingSenderId: "84531601029",
    appId: "1:84531601029:web:da00fabf61530c587293ec",
    measurementId: "G-4EFFLHND0Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


