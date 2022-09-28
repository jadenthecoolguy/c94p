
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDrE43REjZI873PjSZ3-edbAG2LEuofxpw",
      authDomain: "kwitter-f4031.firebaseapp.com",
      databaseURL: "https://kwitter-f4031-default-rtdb.firebaseio.com",
      projectId: "kwitter-f4031",
      storageBucket: "kwitter-f4031.appspot.com",
      messagingSenderId: "339119362646",
      appId: "1:339119362646:web:8f00f40ee712525129a1f7"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
