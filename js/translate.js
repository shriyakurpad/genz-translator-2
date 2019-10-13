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

let btn = document.getElementById("my-btn");
btn.addEventListener("click", translate);

let dict = firebase.database();

function testDB(){
  dict.ref("mans").once('value').then(function(snapshot){
    let str = snapshot.val();
    console.log(str)
  });
}

function translate() {
    let sentence = document.getElementById('textinput').value;
    // console.log(sentence)
    // let sentenceArray = sentence.split(" ");
    // let word = "";
    // console.log(sentence);
    let leadsRef = dict.ref('lingo');
    leadsRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          let key = childSnapshot.key; // "ada"
          let lingo = snapshot.child("lingo/"+key).key;
          let word = childSnapshot.val();
          // console.log(lingo);

           if (sentence.includes(lingo)) {
               console.log("key:" + lingo + " val:" + word);
           }

        });
    });


    // for (let i in sentenceArray) {
    //   word = sentenceArray[i];
    //   console.log(word);
    // }
    // var leadsRef = dict.ref('lingo');
    // leadsRef.on('value', function(snapshot) {
    //     snapshot.forEach(function(childSnapshot) {
    //       var childData = childSnapshot.val();
    //       console.log(childData);
    //     });
    // });
    // dict.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // });

}


// check the input with the database
// document.getElementById('submit').onclick = function() {
//     console.log("TEST");
// }
