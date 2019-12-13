var startButton = document.getElementById("start-quiz"); 
var questionContainerElement = document.getElementById("quiz-body")
var answerButtonElement = document.getElementById("answer-buttons")
var timeEl = document.getElementById("timeleft");
var i = 0

var secondsLeft = 90;
var score = 0;


startButton.addEventListener("click", function() {
        document.getElementById("intro-body").style.display = "none";
        document.getElementById("quiz-body").style.display = "block";
        document.getElementById("quiz-question").textContent = questions[i].title;
        document.getElementById("choice1").textContent = questions[i].choices[0];
        document.getElementById("choice2").textContent = questions[i].choices[1];
        document.getElementById("choice3").textContent = questions[i].choices[2];
        document.getElementById("choice4").textContent = questions[i].choices[3];
        setTime()
        changequestion()     
});



function changequestion(){
    answerButtonElement.addEventListener("click", function() {
     i++
      document.getElementById("quiz-question").textContent = questions[i].title;
      document.getElementById("choice1").textContent = questions[i].choices[0];
      document.getElementById("choice2").textContent = questions[i].choices[1];
      document.getElementById("choice3").textContent = questions[i].choices[2];
      document.getElementById("choice4").textContent = questions[i].choices[3];

      var chosenAnswer = ''//fill in;
      if(chosenAnswer == (questions[0].answer)) {
        

      
      }else {
        secondsLeft -= 15;
      }

  
    });
}






    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft;
      
          if(secondsLeft <= 0 || i > questions.length -1) {
            //may need to change to >=0
            clearInterval(timerInterval);
            document.getElementById("quiz-body").style.display = "none";
            document.getElementById("result-body").style.display = "block";
          }
      
        }, 1000);
      }
      
      function sendMessage() {
        timeEl.textContent = " ";
      
      
      }
    





