$("#startButton").html("Start")
      $("#startButton").on("click", startTime)
      $("#startButton").on("click", postQuestion)

      

var counter= 30;
function startTime() {
$("#startButton").html("Time Remainding: " + " " + counter + " " + " seconds")
function timeIt() {
  counter--
  $("#startButton").html ("Time Remainding: " + " " + counter + " " + " seconds")
  
  if (counter== 0) {
    clearInterval(interval);
    n++
          currentQuestionIndex++
          $("#options").empty();
          $("#question").empty();
          postQuestion();
          counter= 30;
          unanswered++
          startTime();
  }
}
var interval = setInterval(timeIt, 1000);
}



function fiveSec () {

}



var questions= [
  {
    q: "How many gallons of beer does a keg contain?",
    c: ["31", "15.5", "22.5"],
    answer: 1
  },

  {
    q: "Beer is the second most popular beverage; What is the first?",
    c: ["Tea", "Coffee", "Pepsi"],
    answer: 0
  },

  {
    q: "What is Cenosillicaphobia?",
    c: ["Fear of beer", "Fear of an empty glass", "Fear of yeast"],
    answer: 1
  },

  {
    q: "What state has had more breweries in its history than any other state?",
    c: ["Colorado", "California", "Pennsylvania"],
    answer: 2
  },

  {
    q: "What United States city goes by the nickname 'Beervana' because of all the microbreweries in the area?",
    c: ["Portland, Oregon", "San Diego, California", "Kansas City, Missouri"],
    answer: 0
  },

];

var currentQuestionIndex= 0;
var n= 0;


function postQuestion() {

  if (currentQuestionIndex < questions.length) {
    $("#question").append("<div>" + questions[n].q + "</div>")
    for (var i= 0; i < questions[n].c.length; i++) {
      var newDiv= $("<div>"); 
      newDiv.addClass("pickAnswer").attr('indexnum', i).text(questions[n].c[i]);
      $("#options").append(newDiv);
      
    }  
} else {
  resetGame();
}
}
var correct= 0;
var wrong= 0;
var unanswered=0;

  $(document).on("click", ".pickAnswer", function() {
            var userChoice = $(this).attr('indexnum');; 
               userChoice = parseInt(userChoice);
       
               if (userChoice === questions[currentQuestionIndex].answer) {
                 n++
                   currentQuestionIndex++
                   correct++
                   //$('#message').append("<p>You're Right!</p>");
                   $("#options").empty();
                   $("#question").empty();
                   counter= 30;
                   var interval = setInterval(1000);
                  clearInterval(interval);
                  postQuestion();
                    
console.log(correct)
               } else {
                 n++
                 wrong++
                   currentQuestionIndex++;
                   //$('#message').append("<p>Ooops missed this one!</p>");
                   $("#options").empty()
                   $("#question").empty();
                   counter= 30;
                   var interval = setInterval(1000);
                   clearInterval(interval);
                   postQuestion();
                    
               }
             })
      function resetGame() {
        $('#gameMessage').show();
        $('#question').hide();
        $('#options').hide();
        $('#timer').hide()

        $('#gameMessage').append("<p>You have completed the game!</p>");
        $('#gameMessage').append("<p>Total Correct: " + correct + "</p>");
        $('#gameMessage').append("<p>Total Incorrect: " + wrong + "</p>");
        $('#gameMessage').append("<p>Total Unanswered: " + unanswered + "</p>");

        $("#startButton").hide();
        
        if (counter=0) {
          
        }
    }


            

      