//Questions

questions = [{
    title: "Commonly used data types DO NOT include?:",
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

$(document).ready(function() {

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

    // JQuery begings==================================

    $("#start").on("click", function() {
        $('#startText').remove();
        loadQandA();
        setTimer();
    });

    $("#highScores").on("click", function() {
        $('.show-onclick').empty();
        $('.empty').empty();
        init()
        scores();
    });


    function scores() {
        $('.empty').empty();
        $('.show-onclick').empty();
        $('.show-onclick').append('<button type="button" class="btn btn-info" id= "clear" style= "float:left;">Clear High Scores</button><button type="button" class="btn btn-info" id= "restart" style= "float:right;">Restart</button>');

        $("#restart").click(function() {
            location.reload();
        });

        $("#clear").on("click", function() {
            highScores = [];
            storeScores();
            renderScores();
        });
        renderScores();
    }


    function setTimer() {
        $("#seconds-left").text(secondsLeft);
        var countdown = setInterval(function() {
            secondsLeft--;
            $("#seconds-left").text(secondsLeft);
            if (secondsLeft <= 0) {
                clearInterval(countdown);
            }
        }, 1000);
    }


    function renderScores() {
        // Clear highScoreList element
        highScoreList.innerHTML = "";


        // Render a new li for each score
        for (var i = 0; i < highScores.length; i++) {
            var highScore = highScores[i];


            var li = document.createElement("li");
            li.textContent = highScore;
            highScoreList.append(li);
        }
    }

    function init() {
        // Get stored scores from localStorage

        var storedScoresString = localStorage.getItem("highScores");

        // Parsing the JSON string to an object

        var storedHighScores = JSON.parse(storedScoresString);


        // If scores were retrieved from localStorage, update the scores array to it

        if (storedHighScores !== null) {
            highScores = storedHighScores;
        }

        // Render highScores to the DOM

        renderScores();
    }

    function storeScores() {

        // Stringify and set "highScores" key in localStorage to highScores array

        var highScoresString = JSON.stringify(highScores);

        localStorage.setItem("highScores", highScoresString);
    }


    function correctAnswer() {
        resetRound();
    }

    function incorrectAnswer() {
        resetRound();
        timerDown();
    }

    function timerStop() {
        $("#timer").remove();

    }

    function timerDown() {
        secondsLeft = secondsLeft -= 15;

    }

    function resetRound() {
        $('.answers').empty();

        if (indexQandA < questions.length) {
            loadQandA();
        } else {
            timerStop();
            $('.question').remove();
            $('.show-onclick').append('<div class="form-group"> <label id= "initials" ></label><input class="form-control" id= "input" type="text" name="name" placeholder="Enter initials"></div><button id= "highScoresSubmit" class="btn btn-primary">Submit</button>');
            var score = secondsLeft
            $("#initials").append("Your score is: " + score);
            var highScoreForm = document.getElementById("form");
            // When form is submitted....
            highScoreForm.addEventListener("submit", function(event) {
                event.preventDefault();
                var highScoreInput = document.getElementById("input").value;
                var highScoresText = (highScoreInput + " : " + score);
                init()
                scores();
                // Return from function if  text is blank
                if (highScoresText === "") {
                    return;
                }


                // Add new highScoresText to array, clear the input
                highScores.push(highScoresText);


                // Store scores in localStorage and re-render the list
                storeScores();
                renderScores();
            });

        }
    }


    function loadQandA() {
        choices = questions[indexQandA].choices;
        var question = questions[indexQandA].title;
        $('.question').html(question);
        for (var i = 0; i < 4; i++) {
            var displayAnswer = questions[indexQandA].choices[i];
            $('.answers').append('<h4 class= "button-answer" id=' + displayAnswer + '>' + displayAnswer + '</h4><br>');
        }

        $("h4").click(function() {
            var id = $(this).attr('id');
            var answer = questions[indexQandA].answer;
            if (id === answer) {
                answered = true;
                console.log("correct")
                    // $('.question').text("Correct Answer");
                indexQandA++;
                correctAnswer();

            } else {
                answered = true;
                // $('.question').text("Wrong Answer");
                indexQandA++;
                incorrectAnswer();
            }
        });
    }



});