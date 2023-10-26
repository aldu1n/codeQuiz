var rootEl = document.body;
var mainEl = document.querySelector("main");
var startButton = document.getElementById("strbutton");
var navEl = document.querySelector("nav");
var titleEl = document.getElementById("title-text");
var textEl = document.getElementById("inst-text");
var scoreButton = document.getElementById("scrbutton");
var questionDiv = document.createElement("div");

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
    choice.textContent = item[i];
    choice.setAttribute('class', 'choice');
    var questData = ['a','b','c','d','e'];
    choice.setAttribute('id', questData[i])
    questionDiv.appendChild(choice);
}
    questionDiv.addEventListener('click', function(event){
        var element = event.target;
        var state = choice.getAttribute("data-answer");
        console.log(state);
        switch (item){
            case question1:
                if (element.matches('.choice') && element.matches('#d')){
                     question.remove();
                     showQuestion(question2);
                     for (var i = 0; i < 5; i++){
                         questionDiv.removeChild(questionDiv.firstChild);
                     }
                 }
                else if (element.matches('.choice')){
                timeLeft -= 10;
                question.remove();
                showQuestion(question2);
                for (var i = 0; i < 5; i++){
                    questionDiv.removeChild(questionDiv.firstChild);
                }
            }
            break;
            case question2:
                if (element.matches('.choice') && element.matches('#b')){
                    question.remove();
                    showQuestion(question3);
                    for (var i = 0; i < 5; i++){
                        questionDiv.removeChild(questionDiv.firstChild);
                    }
                }
               else if (element.matches('.choice')){
               timeLeft -= 10;
               question.remove();
               showQuestion(question3);
               for (var i = 0; i < 5; i++){
                   questionDiv.removeChild(questionDiv.firstChild);
               }
           }
            break;
            case question3:
                if (element.matches('.choice') && element.matches('#e')){
                    question.remove();
                    showQuestion(question4);
                    for (var i = 0; i < 5; i++){
                        questionDiv.removeChild(questionDiv.firstChild);
                    }
                }
               else if (element.matches('.choice')){
               timeLeft -= 10;
               question.remove();
               showQuestion(question4);
               for (var i = 0; i < 5; i++){
                   questionDiv.removeChild(questionDiv.firstChild);
               }
           }
            break;
            case question4:
                if (element.matches('.choice') && element.matches('#b')){
                    question.remove();
                    showQuestion(question5);
                    for (var i = 0; i < 5; i++){
                        questionDiv.removeChild(questionDiv.firstChild);
                    }
                }
               else if (element.matches('.choice')){
               timeLeft -= 10;
               question.remove();
               showQuestion(question5);
               for (var i = 0; i < 5; i++){
                   questionDiv.removeChild(questionDiv.firstChild);
               }
           }
            break;
            case question5:
                if (element.matches('.choice') && element.matches('#c')){
                    question.remove();
                    showScore();
                    for (var i = 0; i < 5; i++){
                        questionDiv.removeChild(questionDiv.firstChild);
                    }
                }
               else if (element.matches('.choice')){
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
    scoreHeader.textContent = "Your score is :";
    scoreHeader.setAttribute('id', 'score-header');
    mainEl.appendChild(scoreHeader);
    var finalScore = document.createElement("p");
    finalScore.textContent = timeLeft;
    finalScore.setAttribute('id', 'score');
    mainEl.appendChild(finalScore);
    var submitScore = document.createElement('button');
    submitScore.textContent = "Save my score";
    submitScore.setAttribute('id', 'submit-score');
    mainEl.appendChild(submitScore);


    submitScore.addEventListener('click', function(){
        submitScore.remove();
        var userNameInput = document.createElement('input');
        userNameInput.setAttribute('type', 'text');
        userNameInput.setAttribute("id", "name-input");
        userNameInput.setAttribute('placeholder', 'Enter your name')
        mainEl.appendChild(userNameInput);

        
        var submitUserName = document.createElement('button');
        submitUserName.textContent = "Save my score!";
        submitUserName.setAttribute('id', 'submit-username');
        mainEl.appendChild(submitUserName);

        submitUserName.addEventListener('click', function(){
            var userName = userNameInput.value;
            var score = parseInt(finalScore.textContent);

            if (userName == ""){
                var scoresPElFail = document.createElement('p');
                scoresPElFail.textContent = "Username cannot be empty!";
                scoresPElFail.setAttribute('id', 'username-fail');
                mainEl.appendChild(scoresPElFail);
                var failTime = 3;
                var timer = setInterval(function() {
                    failTime--;
                    if(failTime === 0) {
                        scoresPElFail.remove();
                    }
                }, 1000);
                setInterval(timer)
            
            }
            else {   
                
                
                localStorage.setItem('username', userName);
                localStorage.setItem('score', score);
 
                var userNameSuccess = document.createElement('p');
                userNameSuccess.setAttribute('id', 'username-success');
                userNameSuccess.textContent = "Highscore succesfully registered!";
                mainEl.appendChild(userNameSuccess);

                var startOverBtn = document.createElement('button');
                startOverBtn.textContent = "Start Over!";
                startOverBtn.setAttribute('id', 'start-over');
                mainEl.appendChild(startOverBtn);
            }

            startOverBtn.addEventListener('click', function(){
                location.reload();
            })
            
        })
    });
    
}


scoreButton.addEventListener('click', function(){
       mainEl.remove();

       var getUsername =localStorage.getItem('username');
       var getScore = localStorage.getItem('score');

    var scoresHEl = document.createElement('h1');
    scoresHEl.textContent = 'Saved Highscores'
    rootEl.appendChild(scoresHEl);

    
    var highscoreEl = document.createElement('p');
    highscoreEl.setAttribute('id', 'highscore-text');
    highscoreEl.textContent = getUsername + ' - ' + getScore;
    rootEl.appendChild(highscoreEl);


    var exitBtn = document.createElement('button');
    exitBtn.textContent = "Return";
    exitBtn.setAttribute('id', 'return-btn');
    rootEl.appendChild(exitBtn);

    exitBtn.addEventListener('click', function(){
        location.reload();
    })
    // for (var i = 0; i < localStorage.length; i++){
    // }

})



// Question Arrays
var question1 = [
        "What is JavaScript primarily used for in web development?",
        "a. Styling web pages",
        "b. Providing structural information",
        "c. Enhancing interactivity",
        "d. Managing server databases"
];

var question2 = [
        "Which JavaScript function is used to print content to the console?",
        "a. console.log()",
        "b. print()",
        "c. output()",
        "d. display()"
];

var question3 = [
         "Which of the following is NOT a valid way to declare a JavaScript variable?",
         "var x;",
         "let y;",
         "const z;",
         "variable w;"
];

var question4 = [
        `What does the term "DOM" stand for in JavaScript?`,
        "Document Object Model",
        "Data Object Management",
        "Dynamic Object Manipulation",
        "Digital Output Mode" 
];

var question5 = [
        "Which operator is used for comparing both value and data type in JavaScript?",
        "==",
        "===",
        "=",
        "!=="
];