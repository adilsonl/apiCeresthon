const functions = require('firebase-functions');
var admin = require("firebase-admin");

var serviceAccount = require("./ceresthon.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fluttertestes-1381d.firebaseio.com"
})
 //https://firebase.google.com/docs/functions/write-firebase-functions
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 exports.funcao = functions.https.onRequest((req,res)=>{

 })