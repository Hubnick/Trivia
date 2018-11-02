//==============================
//stored info
var count = 13
var correct = 0
var incorrect = 0
var timeTicker


//===============================
//click start button + logic below
$(document).on("click", "#start", function () {
    startGame();
    // alert("clicked");
});


function startGame() {

    //(1)
    timeTicker = setInterval(counter, 1000);

    $("#mutable").prepend("<h2>Time Remaining: <div id='count'>13</div> Seconds</h2>");

    //(2)
    //append div with each question
    for (var i = 0; i < questionArray.length; i++) {

        $("#mutable").append("<h3>" + questionArray[i].question + "</h3>");

        //each question gets its answers in radio format
        for (var j = 0; j < questionArray[i].answers.length; j++) {

            $("#mutable").append("<input type='radio' name='question-" + i +

                "' value='" + questionArray[i].answers[j] + "''>" + questionArray[i].answers[j]);
        }
    }

    $("#mutable").append("<button id='done'>Done</button>");

    $("#start").remove();

}

//(1)

function counter() {

    $("#count").html(count);

    count--;

    if (count === 0) {
        alert("Out of Time");
        //(3)
        stopGame();
    }
}


//(2)
var questionArray = [{
    question: "What is 8 + 2?",
    answers: ["10", "9", "8", "7"],
    trueAnswer: "10"
}, {
    question: "What is 8 x 2?",
    answers: ["13", "14", "15", "16"],
    trueAnswer: "16"
}, {
    question: "What is 8 - 2?",
    answers: ["4", "5", "6", "7"],
    trueAnswer: "6"
}, {
    question: "What is 8 / 2?",
    answers: ["2", "3", "4", "5"],
    trueAnswer: "4"
}, {
    question: "What is 2 + 8?",
    answers: ["10", "9", "8", "7"],
    trueAnswer: "10"
}, {
    question: "What is 2 x 8?",
    answers: ["13", "14", "15", "16"],
    trueAnswer: "16"
}, {
    question: "What is 2 - 8?",
    answers: ["-4", "-5", "-6", "-7"],
    trueAnswer: "-6"
}, {
    question: "What is 2 / 8?",
    answers: ["2", "3", "4", "0.25"],
    trueAnswer: "0.25"
}];



//=================================
//click done button and logic below
$(document).on("click", "#done", function () {
    //(3)
    stopGame();
});

//(3)
function stopGame() {

    for (var k = 0; k < questionArray.length; k++) {
        $.each($("input[name='question-" + k + "']:checked"), function () {
            if ($(this).val() === questionArray[k].trueAnswer) {
                correct++;
            }
            else {
                incorrect++;
            }
        });
    }

    //(4)
    this.score();
}

//(4)
function score() {

    clearInterval(timeTicker);

    // $("#mutable h2").remove();

    $("#mutable").html("<h2>All Done!</h2>");
    $("#mutable").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $("#mutable").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    $("#mutable").append("<h3>Unanswered: " + (questionArray.length - (this.incorrect + this.correct)) + "</h3>");
}
// };