var rootEl = document.body;
var mainEl = document.querySelector("main");
var startButton = document.getElementById("strbutton");
var navEl = document.querySelector("nav");
var titleEl = document.getElementById("title-text");
var textEl = document.getElementById("inst-text");
var scoreButton = document.getElementById("scrbutton");

var timeLeft = 60;

function startQuiz(){
    var time = document.createElement("p");
    time.textContent = timeLeft;
    time.setAttribute('id','timer');
    navEl.appendChild(time);
    
    titleEl.remove();
    startButton.remove();
    textEl.remove();

    showQuestion(question1);
    
    var timer = setInterval(function() {
        timeLeft--;
        time.textContent = timeLeft;
        
        if(timeLeft === 0) {
            clearInterval(timer);
        }
    }, 1000);
    setInterval(timer)

}

startButton.addEventListener('click', startQuiz)

function showQuestion(item){
  var question = document.createElement("p");
  question.textContent = item[0];
  question.setAttribute('id', 'question');
  mainEl.appendChild(question);
  var questionDiv = document.createElement("div");
  questionDiv.setAttribute('id', 'question-div');
  mainEl.appendChild(questionDiv);
for (var i = 1; i < item.length; i++) {
    var choice = document.createElement("button");
    choice.setAttribute('class', 'choice');
    choice.textContent = item[i];
    questionDiv.appendChild(choice);
}
    questionDiv.addEventListener('click', function(event){
        var element = event.target;
        switch (item){
            case question1: if (element.matches('.choice')){
                timeLeft -= 10;
                question.remove();
                showQuestion(question2);
                for (var i = 0; i < 5; i++){
                    questionDiv.removeChild(questionDiv.firstChild);
                }
            }
            break;
            case question2: if (element.matches('.choice')){
                timeLeft -= 10;
                question.remove();
                showQuestion(question3);
                for (var i = 0; i < 5; i++){
                    questionDiv.removeChild(questionDiv.firstChild);
                }
            }
            break;
            case question3: if (element.matches('.choice')){
                timeLeft -= 10;
                question.remove();
                showQuestion(question4);
                for (var i = 0; i < 5; i++){
                    questionDiv.removeChild(questionDiv.firstChild);
                }
            }
            break;
            case question4: if (element.matches('.choice')){
                timeLeft -= 10;
                question.remove();
                showQuestion(question5);
                for (var i = 0; i < 5; i++){
                    questionDiv.removeChild(questionDiv.firstChild);
                }
            }
            break;
            case question5: if (element.matches('.choice')){
                timeLeft -= 10;
                question.remove();
                showScore();
                for (var i = 0; i < 5; i++){
                    questionDiv.removeChild(questionDiv.firstChild);
                }
            }
            break;
        }
    })
}

function showScore(){
    var scoreHeader = document.createElement("h2");
    scoreHeader.textContent = "Your score is:"
    scoreHeader.setAttribute('id', 'score-header');
    mainEl.appendChild(scoreHeader);
    var score = document.createElement("p");
    score.textContent = timeLeft;
    score.setAttribute('id', 'score');
    mainEl.appendChild(score);
    var submitScore = document.createElement('button');
    submitScore.textContent = "Save my score";
    submitScore.setAttribute('id', 'submit-score');
    mainEl.appendChild(submitScore);
}


// Question Arrays
var question1 = [
        "What is JavaScript primarily used for in web development?",
        "a. Styling web pages",
        "b. Providing structural information",
        "c. Enhancing interactivity",//corect
        "d. Managing server databases"
];

var question2 = [
        "Which JavaScript function is used to print content to the console?",
        "a. console.log()",//correct
        "b. print()",
        "c. output()",
        "d. display()"
];

var question3 = [
         "Which of the following is NOT a valid way to declare a JavaScript variable?",
         "var x;",
         "let y;",
         "const z;",
         "variable w;"//correct
];

var question4 = [
        `What does the term "DOM" stand for in JavaScript?`,
        "Document Object Model",//correct
        "Data Object Management",
        "Dynamic Object Manipulation",
        "Digital Output Mode" 
];

var question5 = [
        "Which operator is used for comparing both value and data type in JavaScript?",
        "==",
        "===",//correct
        "=",
        "!=="
];