var firebaseConfig = {
  apiKey: "AIzaSyCwTk6Zu7kzOKr7KYZs-EVPTd5EOi_Pm5Q",
  authDomain: "genzdictionary.firebaseapp.com",
  databaseURL: "https://genzdictionary.firebaseio.com",
  projectId: "genzdictionary",
  storageBucket: "genzdictionary.appspot.com",
  messagingSenderId: "974265179310",
  appId: "1:974265179310:web:507c1181b82ce40556213f",
  measurementId: "G-BMKER9GXS7"
};
firebase.initializeApp(firebaseConfig);

let map = firebase.database();

function testDB(){
  map.ref("mans").once('value').then(function(snapshot){
    let str = snapshot.val();
    console.log(str)
  });

}

// check the input with the database
var button = document.querySelector('input');
button.addEventListener('click', translate(sentence));

function translate(var sentence) {
    var result = "";
    for (var word : sentence) {

    }

}