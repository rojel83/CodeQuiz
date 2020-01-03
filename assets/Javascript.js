questions = [{
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
}, {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
}, {
    title: "Arrays in JavaScript can be used to store _________",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
}, {
    title: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
}, {
    title: "A very useful tool used during debuggingfor printing content to the debugger is:",
    choices: ["JavaScript", "terminal/ bash", "for loops", "console.log"],
    answer: "console.log"
}, ]

var indexQandA = 0;
var questions = [{
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
}, {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
}, {
    title: "Arrays in JavaScript can be used to store _________",
    choices: ["numbers and strings", "other arrays", "booleans", "all-of-the-above"],
    answer: "all-of-the-above"
}, {
    title: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
}, {
    title: "A very useful tool used during debuggingfor printing content to the debugger is:",
    choices: ["JavaScript", "terminal/ bash", "for loops", "console.log"],
    answer: "console.log"
}, ]


var secondsLeft = (questions.length) * 15;
var highScoreList = document.querySelector("#high-score");
var highScores = ["AAG : 70", "JPG : 54", "KMG : 65"];
var highScoreForm = document.querySelector(".show-onclick");