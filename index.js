let questions = [
    {
        question: 'Which HTML tag is used to define an inline style?',
        choice1: '<script>',
        choice2: '<css>',
        choice3: '<style>',
        choice4: '<span>',
        answer: 3,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choice1: 'text-color',
        choice2: 'font-color',
        choice3: 'text-style',
        choice4: 'color',
        answer: 4,
    },
    {
        question: 'Which of the following is the correct way to comment in HTML?',
        choice1: '// Comment',
        choice2: '<!-- Comment -->',
        choice3: '/* Comment */',
        choice4: '<! Comment>',
        answer: 2,
    },
];

let playBtn = document.querySelector(".anc");
let Ques = document.querySelector(".question");
let allChoices = document.querySelectorAll(".choice");
let gamePage = document.querySelector(".game-page");
let gameOverPage = document.querySelector(".gameOver");
let scoreElement = document.querySelector(".score");
let scoreEl = document.querySelector("#scoreEl");
let questionNumber = document.querySelector("#Quest");
let playAgainBtn = document.querySelector(".playAgainBtn");
let allBar = document.querySelectorAll(".bar");

let totalQuestions = questions.length;
let currentQuestionIndex = 0;
let score = 0;


updateQuestion(currentQuestionIndex);

let optionSelected = false;
allChoices.forEach((choice, i) => {
    choice.addEventListener('click', function(e) {
        if (!optionSelected) {
            let selectedAnswer = i + 1; 

            if (selectedAnswer === questions[currentQuestionIndex].answer) {
                e.target.style.backgroundColor = "green";
                score += 10;
                scoreEl.innerText = score;
            } else {
                e.target.style.backgroundColor = "red";
            }

            optionSelected = true;
            setTimeout(function() {
                allChoices.forEach(choice => choice.style.backgroundColor = "white");
                optionSelected = false;
                currentQuestionIndex++;
                questionNumber.innerText = "Question " + (currentQuestionIndex+1) +"/3";

                if (currentQuestionIndex < totalQuestions) {
                    updateQuestion(currentQuestionIndex);
                    updateProgressBar(currentQuestionIndex);
                } else {
                    showGameOver();
                }
            }, 1000);
        }
    });
});
function updateProgressBar(index){
    allBar[index].style.backgroundColor = "#067cf1";
}
function updateQuestion(index) {
    Ques.innerText = questions[index].question;
    allChoices.forEach((choice, i) => {
        choice.innerText = questions[index]["choice" + (i + 1)];
    });
}

function showGameOver() {
    gamePage.style.display = 'none';
    gameOverPage.style.display = 'flex';
    scoreElement.innerText = score;
}
playAgainBtn.addEventListener('click', function() {
    currentQuestionIndex = 0;
    questionNumber.innerText = "Question " + (currentQuestionIndex+1) +"/3";
    score = 0;
    scoreEl.innerText = score;
    gameOverPage.style.display = 'none';
    gamePage.style.display = 'flex';
    updateQuestion(currentQuestionIndex);
    for(var i = 1;i<allBar.length;i++){
        allBar[i].style.backgroundColor = "white";
    }
});








 
