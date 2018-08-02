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
      $("#addTrain").click(function(event){
      
      var trainFirstTime = $("#firstTrainTime").val().trim();
      var trainFreq = $("#frequency").val().trim();
      var trainName = $("#trainName").val().trim();
      var trainDestination = $("#destination").val().trim();
      var firstTimeConverted = moment(trainFirstTime, "HH:mm").subtract(1, "years");
      var timeDiff = moment().diff(moment(firstTimeConverted), "minutes");
      var remainder = timeDiff % trainFreq;
      var minsToTrain = trainFreq - remainder;
      var nextTrain = moment().add(minsToTrain, "minutes");

        event.preventDefault();
        var newTrain = {
            name: trainName,
            destination: trainDestination,
            frequency: trainFreq,
            nextArrival: nextTrain,
            minutesAway: minsToTrain
        };
        console.log("first train time: " + trainFirstTime);
        console.log("newTrain" + newTrain);
        console.log("first time conv" + firstTimeConverted);
        console.log("mins to train " + minsToTrain);
        console.log("next arrival " + nextTrain);
        
        
        
        
    })





















})