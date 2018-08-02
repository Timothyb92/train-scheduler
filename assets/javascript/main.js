$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyCmt6sxSE_0GesyFhu2VfgLKTYMxGaN_l4",
        authDomain: "train-scheduler-37fc2.firebaseapp.com",
        databaseURL: "https://train-scheduler-37fc2.firebaseio.com",
        projectId: "train-scheduler-37fc2",
        storageBucket: "train-scheduler-37fc2.appspot.com",
        messagingSenderId: "455696826788"
      };
      firebase.initializeApp(config);

    var db = firebase.database();
    var connectedRef = db.ref(".info/connected");
    var connectionsRef = db.ref("/connections");
    var name = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrainTime = $("#firstTrainTime").val().trim();
    var freq = $("#frequency").val().trim();
    var minsAway;
    var trainTimeMoment = moment($("#firstTrainTime").val(), "HH:mm").format("X");
    var trainTimeFormat = moment.unix(trainTimeMoment).format("")

    // connectedRef.on("value", function(snapshot){
    //     if (snapshot.val()){
    //         var con = connectionsRef.push(true);
    //         con.onDisconnect().remove();
    //     }
    // })

    $("#addTrain").click(function(event){
        event.preventDevault();
        console.log(name);
        console.log(destination);
        console.log(firstTrainTime);
        console.log(freq);
    })





















})