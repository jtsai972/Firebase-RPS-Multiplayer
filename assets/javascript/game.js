//Setting up Firebase
var config = {
    apiKey: "AIzaSyCGLo6YNDxMpesuapo0S00z9B5Na7x5Qvg",
    authDomain: "fir-project-25203.firebaseapp.com",
    databaseURL: "https://fir-project-25203.firebaseio.com",
    projectId: "fir-project-25203",
    storageBucket: "fir-project-25203.appspot.com",
    messagingSenderId: "683229760472",
    appId: "1:683229760472:web:4ff3016f898a5345c0c0ad",
    measurementId: "G-9PJ6STEY6C"
};
firebase.initializeApp(config);

var database = firebase.database();


//Setting up game
var choices = {
    rock: { beats: "scissors", loses: "paper" }, 
    paper: { beats: "rock", loses: "scissors" }, 
    scissors: { beats: "paper", loses: "rock" }
}
var players = {
    player1: { name: "", wins: 0, losses: 0, ties: 0 },
    player2: { name: "", wins: 0, losses: 0, ties: 0 }
};




function check() {

}