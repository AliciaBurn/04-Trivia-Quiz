var startButton = document.getElementById("start-quiz"); 
var questionContainerElement = document.getElementById("quiz-body")
var answerButtonElement = document.getElementById("answer-buttons")
var timeEl = document.getElementById("timeleft");
var firstquestion = questions[0].title;
var firstOption = questions[0].choices[0];
var secondOption = questions[0].choices[1];
var thirdOption = questions[0].choices[2];
var fourthOption = questions[0].choices[3];
var secondsLeft = 75;
//var questions = "questions.js"

startButton.addEventListener("click", function() {
        document.getElementById("intro-body").style.display = "none";
        document.getElementById("quiz-body").style.display = "block";
        document.getElementById("quiz-question").textContent = firstquestion;
        document.getElementById("choice1").textContent = firstOption;
        document.getElementById("choice2").textContent = secondOption;
        document.getElementById("choice3").textContent = thirdOption;
        document.getElementById("choice4").textContent = fourthOption;
         


});

for (var i = 0; i < questions.length; i++) {
    var response = (questions[i]);
    if(response == questions[i].answer){
        alert("Correct")
    }
    console.log(questions[i].answer)

    }

    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft;
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
          }
      
        }, 1000);
      }
      
      function sendMessage() {
        timeEl.textContent = " ";
      
      
      }
      
      setTime();
    





