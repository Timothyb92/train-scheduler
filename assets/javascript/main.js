$(document).ready(function(){
    var config = {
        authDomain: "train-scheduler-37fc2.firebaseapp.com",
        databaseURL: "https://train-scheduler-37fc2.firebaseio.com",
        projectId: "train-scheduler-37fc2",
        storageBucket: "train-scheduler-37fc2.appspot.com",
        messagingSenderId: "455696826788"
    };
    firebase.initializeApp(config);

    var name = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrainTime = $("#firstTrainTime").val().trim();
    var freq = $("#frequency").val().trim();
    var minsAway;

    $("#addTrain").click(function(event){
        event.preventDevault();
        console.log(name);
        console.log(destination);
        console.log(firstTrainTime);
        console.log(freq);
    })





















})