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
    var trainName = $("#trainName").val().trim();
    var trainDestination = $("#destination").val().trim();
    var trainFirstTime = $("#firstTrainTime").val().trim();
    var trainFreq = $("#frequency").val().trim();
    var minsAway;
    var trainTimeMoment = moment($("#firstTrainTime").val(), "HH:mm").format("X");
    var trainTimeFormat = moment.unix(trainTimeMoment).format("h:mma");


    $("#addTrain").click(function(event){
        event.preventDevault();
        var newTrain = {
            name: trainName,
            destination: trainDestination,
            frequency: trainFreq,
            firstTime: trainFirstTime,
            
        };
    })





















})