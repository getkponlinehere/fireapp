
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

  loadButton.addEventListener("click",function(){
    //   docRef.get().then(function(doc){
    //       if(doc && doc.exists){
    //           const mydata=doc.data();
    //           status.innerText=mydata.testdata;
    //       }
    //   }).catch(function (error){
    //       alert(error);
    //   });
    //firestore.settings({timestampsInSnapshots: true});
    // const collection = firestore.collection('samples');
    // collection.get().then(snapshot=>{
    //     snapshot.forEach(doc=>{
    //         alert(doc.testdata);
    //     });
    // });

    function show(doc){
        alert("Testdata:"+doc.data().testdata);
        alert("Testdata1:"+doc.data().testdata1);
    }
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
      alert("hello");
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

   }
  getRealtimeUpdates();
