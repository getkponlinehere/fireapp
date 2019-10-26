
var firebaseConfig = {
    apiKey: "AIzaSyAiL1yRmcs9dl88XHxnyWJH9GgKBVADTyg",
    authDomain: "learnweb-cbf28.firebaseapp.com",
    databaseURL: "https://learnweb-cbf28.firebaseio.com",
    projectId: "learnweb-cbf28",
    storageBucket: "learnweb-cbf28.appspot.com",
    messagingSenderId: "73489874933",
    appId: "1:73489874933:web:6a71f116b76e933847aabc",
    measurementId: "G-QREJMKKQSQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore=firebase.firestore();
  

  const inputText=document.querySelector("#textdata");
  const inputText1=document.querySelector("#textdata1");
  const saveButton=document.querySelector("#save");
  const loadButton=document.querySelector("#load");
  const status=document.querySelector("#status");

  saveButton.addEventListener("click",function(){
    const textTosave=inputText.value;
    const textTosave1=inputText1.value;
  const docRef=firestore.doc("samples/"+textTosave);  
    docRef.set({
          testdata:textTosave,
          testdata1:textTosave1
      })
      .then(function(){
          alert("success");
      })
      .catch(function(error){
          console.log("failed");
      });
  });

function show(doc){
        // alert("Testdata:"+doc.data().testdata);
        // alert("Testdata1:"+doc.data().testdata1);
        var tableref=document.getElementById("table_id").getElementsByTagName('tbody')[0];
        var newRow = tableref.insertRow();
        var newCell = newRow.insertCell(0);
        var newCell1 = newRow.insertCell(1);
        var newText = document.createTextNode(doc.data().testdata);
        var newText1 = document.createTextNode(doc.data().testdata1);
        newCell.appendChild(newText);
        newCell1.appendChild(newText1);
    }
  loadButton.addEventListener("click",function(){
    firestore.collection("samples")//.where("capital", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            show(doc);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    
  });
  
  
 getRealtimeUpdates = function(){
    //  alert("hello");
    //     firestore.collection("samples").onSnapshot(function(doc){
    //     if(doc && doc.exists){
    //             show(doc);
    //             //const mydata=doc.data();

    //             //status.innerText=mydata.testdata;
    //         }
    //    });
    // firestore.collection("samples")//.where("capital", "==", true)
    // .get()
    // .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         show(doc);
    //     });
    // })
    // .catch(function(error) {
    //    console.log("Error getting documents: ", error);
    // });

    firestore.collection("samples")//.where("state", "==", "CA")
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            //cities.push(doc.data().name);
            show(doc);
        });
        //console.log("Current cities in CA: ", cities.join(", "));
    });

   }
  //getRealtimeUpdates();
