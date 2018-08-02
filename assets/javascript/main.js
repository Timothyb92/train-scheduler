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
      
      var trainFirstTime = $("#firstTrainTime").val().trim();
      var trainFreq = $("#frequency").val().trim();
      var trainName = $("#trainName").val().trim();
      var trainDestination = $("#destination").val().trim();
      var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
      var timeDiff = moment().diff(moment(firstTimeConverted), "minutes");
      var remainder = timeDiff % trainFreq;
      var minutesTillTrain = trainFreq - remainder;
      var nextTrain = moment().add(minutesTillTrain, "minutes");

    $("#addTrain").click(function(event){
        event.preventDefault();
        console.log("first train time: ");
        console.log(trainFirstTime);
        
    })





















})