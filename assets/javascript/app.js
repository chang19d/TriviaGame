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
var q6 = {question:"Who is third behind Hank Aaron and Babe Ruth in major league career home runs?", 
          a:"Reggie Jackson", 
          b:"Harmon Killebrew",
          c:"Willie Mays",
          d:"Frank Robinson",
          answer:"c"
};
var q7 = {question:"In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?", 
          a:"8%", 
          b:"18%",
          c:"38%",
          d:"58%",
          answer:"b"
};
var q8 = {question:"In 1985, five percent of U.S. households had telephone answering machines. By 1990 what percentage of homes had answering machines?", 
          a:"10%", 
          b:"15%",
          c:"31%",
          d:"51%",
          answer:"c"
};
var q9 = {question:"The first black American pictured on a U.S. postage stamp was who?", 
          a:"Frederick Douglass", 
          b:"Booker T. Washington",
          c:"Louis Armstrong",
          d:"Joe Louis",
          answer:"d"
};
var q10 = {question:"What did the 'D' in 'D-Day' stand for?", 
          a:"Doom", 
          b:"Day",
          c:"Dwight(Eisenhower)",
          d:"Dunkirk",
          answer:"b"
};
var q11 = {question:"The Brownie Box Camera introduced by Eastman Kodak in 1900 had a retail price of what?", 
          a:"1$", 
          b:"5$",
          c:"10$",
          d:"20$",
          answer:"a"
};
var q12 = {question:"Which of these characters turned 40 years old in 1990?", 
          a:"Charlie Brown", 
          b:"Bugs Bunny",
          c:"Mickey Mouse",
          d:"Fred Flintstone",
          answer:"a"
};
var q13 = {question:"When Mt. St. Helens erupted on May 18, 1980, how many people were killed?", 
          a:"1", 
          b:"57",
          c:"143",
          d:"426",
          answer:"b"
};
var q14 = {question:"In J. Edgar Hoover, what did the J stand for?", 
          a:"James", 
          b:"John",
          c:"Joseph",
          d:"Jimtavius Maximus",
          answer:"b"
};

console.log(q5);
var questionsArray = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14];
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
var arrayOfUsedQuestions=[];
var indexOfQuestion=0;
    function questionCheck(){
        indexOfQuestion = Math.floor(Math.random() * 14);
        
        for(var i = 0; i<arrayOfUsedQuestions.length; i++){
            if(arrayOfUsedQuestions[i] == indexOfQuestion){
                questionCheck();
            }
        }
    }
    function pickRandomQuestion(){
        questionCheck();
        arrayOfUsedQuestions.push(indexOfQuestion);
        
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
        $questionsDiv.html("<div id='display' style='font-size:400%; margin-top:-8%; margin-bottom:-4%;'>30</div>");
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



