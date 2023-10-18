var rootEl = document.body;
var mainEl = document.querySelector("main");
var startButton = document.getElementById("strbutton");
var navEl = document.querySelector("nav");
var titleEl = document.getElementById("title-text");
var textEl = document.getElementById("inst-text");

var timeLeft = 60;

function startQuiz(){
    var time = document.createElement("p");
    time.textContent = 60;
    time.setAttribute('id','timer');
    navEl.appendChild(time);
    
    titleEl.remove();
    startButton.remove();
    textEl.remove();

    showQuestion()
    
    var timer = setInterval(function() {
        timeLeft--;
        time.textContent = timeLeft;
        
        if(timeLeft === 0) {
            clearInterval(timer);
        }
    }, 1000);
    setInterval(timer)

}



function showQuestion(){
  var question = document.createElement("p");
  question.textContent = question1[0];
  question.setAttribute('id', 'question');
  mainEl.appendChild(question);
for (let i = 1; i < question1.length; i++) {
    var choice = document.createElement("button");
    choice.setAttribute('id', 'choice');
    choice.textContent = question1[i];
    mainEl.appendChild(choice);
  }
}




startButton.addEventListener('click', startQuiz)


// Question Arrays
var question1 = [
        "What is JavaScript primarily used for in web development?",
        "a. Styling web pages",
        "b. Providing structural information",
        "c. Enhancing interactivity",//corect
        "d. Managing server databases"
];

var question2 = [
    {
        question: "Which JavaScript function is used to print content to the console?",
        choiceA: "console.log()",//correct
        choiceB: "print()",
        choiceC: "output()",
        choiceD: "display()"

    }
];

var question3 = [
    {
        question: "Which of the following is NOT a valid way to declare a JavaScript variable?",
        choiceA: "var x;",
        choiceB: "let y;",
        choiceC: "const z;",
        choiceD: "variable w;"//correct

    }
];

var question4 = [
    {
        question: `What does the term "DOM" stand for in JavaScript?`,
        choiceA: "Document Object Model",//correct
        choiceB: "Data Object Management",
        choiceC: "Dynamic Object Manipulation",
        choiceD: "Digital Output Mode"

    }
];

var question5 = [
    {
        question: "Which operator is used for comparing both value and data type in JavaScript?",
        choiceA: "==",
        choiceB: "===",//correct
        choiceC: "=",
        choiceD: "!=="

    }
];


















// var question1 = [
//     {
//         question: "What is JavaScript primarily used for in web development?",
//         choiceA: "Styling web pages",
//         choiceB: "Providing structural information",
//         choiceC: "Enhancing interactivity",//corect
//         choiceD: "Managing server databases"

//     }
// ];













// var questionArr = [
//   {
//     question: "What is this question?",
//     answer: "a question",
//     choiceA: "an answer",
//     choiceB: "a question"
//   }
// ]
// var q = 0;
// function showQuestion(){
//   console.log(questionArr[q]);
// }
// showQuestion();