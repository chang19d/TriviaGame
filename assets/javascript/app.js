$('.startButton').click(startGame);

var q1 = {question:"In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
          a:"William and Elizabeth", 
          b:"Joseph and Catherine",
          c:"John and Mary",
          d:"George and Anne",
          answer: "c"
        
        };
var q2 = {question:"When did the Liberty Bell get its name?", 
    a:"When it was made, in 1701", 
    b:"When it rang on July 4, 1776",
    c:"In the 19th century",
    d:"None of the above",
    answer:"c"
};
var q3 = {question:"Which of the following items was owned by the fewest U.S. homes in 1990?", 
          a:"Home computer", 
          b:"Compact disk player",
          c:"Cordless phone",
          d:"Dishwasher",
          answer:"b"
};
var q4 = {question:"Who holds the record for the most victories in a row on the professional golf tour?", 
            a:"Jack Nicklaus", 
            b:"Arnold Palmer",
            c:"Byron Nelson",
            d:"Ben Hogan",
            answer:"c"
};
var q5 = {question:"During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?", 
          a:"Cocker spaniel", 
          b:"German shepherd",
          c:"Labrador retriever",
          d:"Poodle",
          answer:"a"
};
console.log(q5);
var questionsArray = [q1,q2,q3,q4,q5];
var correctAnswers = 0;
var incorrectAnswers = 0;


console.log(JSON.stringify(questionsArray));
console.log(questionsArray[1]);
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var clockRunning = false;
// Our stopwatch object
var stopwatch = {
    time: 30,
    start: function() {

        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
          intervalId = setInterval(stopwatch.count, 1000);
          clockRunning = true;
        }
        
    },
    stop: function() {

        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;

        return 0;
        
    },
    count: function() {
      
        // DONE: increment time by 1, remember we cant use "this" here.
        stopwatch.time--;
    
        // DONE: Use the variable we just created to show the converted time in the "display" div.
        $("#display").text(stopwatch.time);
        
        if(stopwatch.time == 0){
            stopwatch.stop();
            stopwatch.time = 30;
            console.log(stopwatch.time);
            displayEndScreen();
        }
    },
 
    };

var $questionsDiv = $(".questionsDiv");
var questionToAsk;
var answer1;
var answer2;
var answer3;
var answer4;
var userAnswer;
var correctChoice;

    function pickRandomQuestion(){
        var indexOfQuestion = Math.floor(Math.random() * 5);
        questionToAsk = questionsArray[indexOfQuestion].question;
        correctChoice = questionsArray[indexOfQuestion].answer;
        answer1 = questionsArray[indexOfQuestion].a;
        answer2 = questionsArray[indexOfQuestion].b;
        answer3 = questionsArray[indexOfQuestion].c;
        answer4 = questionsArray[indexOfQuestion].d;
        console.log(questionToAsk);
        console.log(answer1);
    }
    function refreshQuestion(){
        $(".smallQuestionsDiv").empty();
        $(".smallAnswersDiv").empty();
        pickRandomQuestion();
        $(".smallQuestionsDiv").text(questionToAsk);
        
        $(".smallAnswersDiv").append("<button type='button' class='btn btn-outline-success answer1' data-answer='a'></button>");
        $(".smallAnswersDiv").append("<button type='button' class='btn btn-outline-success answer2' data-answer='b'></button>");
        $(".smallAnswersDiv").append("<button type='button' class='btn btn-outline-success answer3' data-answer='c'></button>");
        $(".smallAnswersDiv").append("<button type='button' class='btn btn-outline-success answer4' data-answer='d'></button>");
        
        $(".answer1").text(answer1);
        $(".answer2").text(answer2);
        $(".answer3").text(answer3);
        $(".answer4").text(answer4);

    }
    function startGame(){
        
        $questionsDiv.empty();
        $questionsDiv.html("<div id='display'>30</div>");
        $questionsDiv.append("<div class = 'smallQuestionsDiv'></div></br>");
        $questionsDiv.append("<div class = 'smallAnswersDiv'></div>");
        
        refreshQuestion();
        stopwatch.start();
    }

    function displayEndScreen(){
        $questionsDiv.empty();
        $questionsDiv.html("<h1>Times Up!</h1></br>");
        $questionsDiv.append("<h2 class = 'correctAnswers'></h2>");
        $(".correctAnswers").text("Correct Answers: " + correctAnswers);
        $questionsDiv.append("<h2 class = 'incorrectAnswers'></h2>");
        $(".incorrectAnswers").text("Incorrect Answers: " + incorrectAnswers);
        $questionsDiv.append("<h2 class = 'unanswered'></h2>");
        $(".unanswered").text("Unanswered: " + unanswered);
    }

    $('body').on('click', '.answer1, .answer2, .answer3, .answer4', function () {
        console.log("Answer: " + $(this).attr("data-answer"));
        userAnswer=$(this).attr("data-answer");

        if(userAnswer === correctChoice){
            correctAnswers++;
            refreshQuestion();
        }else{
            incorrectAnswers++;
            refreshQuestion();
        }
    });



