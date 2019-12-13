var startButton = document.getElementById("start-quiz");
var questionContainerElement = document.getElementById("quiz-body")
var answerButtonElement = document.getElementById("answer-buttons")
var timeEl = document.getElementById("timeleft");
var i = 0
var chosenAnswer = ''//fill in;
var timerInterval;

var secondsLeft = 90;
var score = 0;


startButton.addEventListener("click", function () {
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



function changequestion() {
  answerButtonElement.addEventListener("click", function (event) {


    if (secondsLeft <= 0 || i > questions.length - 1) {
      //may need to change to >=0
      clearInterval(timerInterval);
      document.getElementById("quiz-body").style.display = "none";
      document.getElementById("result-body").style.display = "block";
      document.getElementById("score").textContent = "Score: " + secondsLeft;
    } else {
      chosenAnswer = event.target.textContent;
      if (chosenAnswer === questions[i].answer) {

      } else {
        secondsLeft -= 20;
      }
      i++
      document.getElementById("quiz-question").textContent = questions[i].title;
      document.getElementById("choice1").textContent = questions[i].choices[0];
      document.getElementById("choice2").textContent = questions[i].choices[1];
      document.getElementById("choice3").textContent = questions[i].choices[2];
      document.getElementById("choice4").textContent = questions[i].choices[3];
    }

    chosenAnswer = '';
  });
}


function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft <= 0 || i > questions.length - 1) {
      //may need to change to >=0
      clearInterval(timerInterval);
      document.getElementById("quiz-body").style.display = "none";
      document.getElementById("result-body").style.display = "block";
      document.getElementById("score").textContent = "Score: " + secondsLeft;
    }

  }, 1000);
  
}

function sendMessage() {
  timeEl.textContent = " ";

}








