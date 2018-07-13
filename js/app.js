

//question page
//first 3 options set from styles array
var questionsTitle =document.getElementById('questionstitle');
var questionHead = document.getElementById('header');
var questionBody = document.getElementById('body');
var questionArea = document.getElementById('question');
var questionNumber = document.getElementById('number');
var totalQuestions = document.getElementById('smaller');
var choice1 = document.getElementById('choice1')
var choice2 = document.getElementById('choice2')
var choice3 = document.getElementById('choice3')
var choice4 = document.getElementById('choice4')
var verdict = document.getElementById('result');









// summary page
// first option set from styles array
var summaryDescription = document.getElementById('summary')
var backButton = document.getElementById('back');
var summaryPage = document.getElementById('overlay');
var summary = document.getElementById('heading');
var rating = document.getElementById('rating');
var summaryCorrect = document.getElementById('correct');
var subjectImg = document.getElementById('subject');
var subjectName = document.getElementById('subjectname');

summaryPage.style.display = 'none';
// subjectImg.src=filmGrades[10][3]


// start page
var startPage = document.getElementById('startingpage');
var musicButton = document.getElementById('musicbutton');
var filmButton = document.getElementById('filmbutton');
var sportsButton = document.getElementById('sportsbutton');

// startPage.style.display = 'none';



// timer variables
var secs=30;
var timerID;


//arrays to catch the incoming arguements
var category=[];
var categoryGrades=[];
var categoryStyles=[];


// Takes my Questions array and removes question, leaving answer choices
var choices = musicQuestions[0].slice(1);
var randomised=[];
var answer;
var totalCorrect = 0;
var totalIncorrect = 0;
var guess;
var i=0;

//colors for choice buttons
// var colors= ['#ffcccc','#fffa65','#32ff7e','#7efff5'];
var colors= ['white','white','white','white'];




//functions//

//back to start button
function backToStart (){
secs=30;
timerID;
//arrays to catch the incoming arguements
category=[];
categoryGrades=[];
categoryStyles=[];
// // Takes my Questions array and removes question, leaving answer choices
// choices = musicQuestions[0].slice(1);
randomised=[];
answer;
totalCorrect = 0;
totalIncorrect = 0;
guess;
i=0;
summaryPage.style.display = 'none';
startPage.style.display = 'flex';


}
//Shuffles array and assigns results to the choice boxes
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        choice1.innerHTML = "<P>" + array[0] + "</P>";
        choice2.innerHTML = "<P>" + array[1] + "</P>";
        choice3.innerHTML = "<P>" + array[2] + "</P>";
        choice4.innerHTML = "<P>" + array[3] + "</P>";
    }

//handling your choice, after click 
function clickedValue (){
    clearInterval(timerID);
    guess = parseInt(this.innerText);
    var selectedTile = this;
    selectedTile.style.backgroundColor="#b2bec3";
        choice1.removeEventListener("click", clickedValue)
        choice2.removeEventListener("click", clickedValue)
        choice3.removeEventListener("click", clickedValue)
        choice4.removeEventListener("click", clickedValue)
//1 second delay from when you selct your choice -> when you find out whether your selection is correct or not
//2 second delay from confirmation whether you are correct or not -> displaying the next question  
setTimeout(function(){
    //if you get the answer correct
    if (guess === answer){
        verdict.style.color="white"
        verdict.style.backgroundColor='rgb(38, 255, 0';
        verdict.innerHTML="<p>CORRECT</p>"
        i++;
        totalCorrect++;
        setTimeout(function(){printQuestion(category, categoryGrades, categoryStyles)}, 2000)
    }else
    //if you get the answer incorrect
    {
        verdict.style.backgroundColor='red';
        verdict.style.color="white"
        verdict.innerHTML="<p>INCORRECT</p>"
        i++;
        totalIncorrect++;
        setTimeout(function(){printQuestion(category, categoryGrades, categoryStyles)}, 2000)
    }
    }, 1000)
    };



function printQuestion(Questions, Grades, Styles){
    startPage.style.display= 'none';

    category = Questions;
    categoryGrades = Grades;
    categoryStyles = Styles;

    if(i < Questions.length){
    verdict.style.backgroundColor='white';
    verdict.innerHTML=""    //Printing Question and setting Question Number/Out Of.. to the page
    questionArea.innerHTML = Questions[i][0];
    questionNumber.innerHTML = i+1;
    totalQuestions.innerHTML = Questions.length;
    questionsTitle.innerHTML=categoryStyles[0];
questionHead.style.backgroundColor=categoryStyles[1];
// questionBody.style.backgroundColor=categoryStyles[2];
    //Setting score totals and Answer values
    answer = Questions[i][1];
    var quickarray = Questions[i].splice(1);
    shuffle(quickarray);
    // shuffle(colors);

    choice1.style.backgroundColor=colors[0]
    choice2.style.backgroundColor=colors[1]
    choice3.style.backgroundColor=colors[2]
    choice4.style.backgroundColor=colors[3]


choice1.addEventListener("click", clickedValue)
choice2.addEventListener("click", clickedValue)
choice3.addEventListener("click", clickedValue)
choice4.addEventListener("click", clickedValue)

secs=30;
verdict.style.color="black";
verdict.innerHTML="<p>"+ secs +"</p>";


timerID = setInterval(function(){
    secs --;
    verdict.innerHTML="<p>"+ secs +"</p>";
    if (secs === 0){
        clearInterval(timerID);

        verdict.style.backgroundColor='red';
        verdict.style.color="white"

        verdict.innerHTML="<p>OUT OF TIME</p>"
        choice1.style.backgroundColor='#b2bec3'
        choice2.style.backgroundColor='#b2bec3'
        choice3.style.backgroundColor='#b2bec3'
        choice4.style.backgroundColor='#b2bec3'
        choice1.removeEventListener("click", clickedValue)
        choice2.removeEventListener("click", clickedValue)
        choice3.removeEventListener("click", clickedValue)
        choice4.removeEventListener("click", clickedValue)




        i++;
        totalIncorrect++;
        setTimeout(function(){printQuestion(Questions, categoryGrades, categoryStyles)}, 2000)


    }
}, 1000)
    



} else {
summaryDescription.innerHTML="<p>"+categoryStyles[3]+"</p>"
summary.innerHTML=categoryGrades[totalCorrect][0]
rating.innerHTML=categoryGrades[totalCorrect][1]
summaryCorrect.innerHTML= totalCorrect + ' out of ' + (totalCorrect+totalIncorrect)
subjectImg.src=categoryGrades[totalCorrect][3]
subjectName.innerHTML=categoryGrades[totalCorrect][2]
summaryPage.style.display = 'flex';

}
}

//buttons on start screen
musicButton.addEventListener('click',(function (){ printQuestion(musicQuestions,musicGrades,musicStyles)}))
filmButton.addEventListener('click',(function (){ printQuestion(filmQuestions,filmGrades,filmStyles)}))
sportsButton.addEventListener('click',(function (){ printQuestion(sportsQuestions,sportsGrades,sportsStyles)}))
//button summary screen
backButton.addEventListener('click',(function(){(backToStart())}))

console.log(i);
















// var correctAnswers = 0;
// var category;
// var answer;
// var question;





// function printAllQuestions (category){
//     for(var i = 0; i < category.length; i += 1) {
//         document.write('<p>' + (i+1) +'. ' + category[i][0]+ '</p>');
//     }
// };

// // printAllQuestions(musicQuestions)

// function randomNumber ()



// function Quiz(category) {
//     for(var i = 0; i < category.length; i += 1) {
//         var question = category[i][0];
//         var answer = category[i][1];
//         var options = category[i][0,1,2,3];

//         var correctGuess;
//         var points;
//         var questionNumber;

