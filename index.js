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

let totalQuestions = questions.length;
let currentQuestionIndex = 0;
let score = 0;


updateQuestion(currentQuestionIndex);


allChoices.forEach((choice, i) => {
    choice.addEventListener('click', function(e) {
        let selectedAnswer = i + 1; 

        if (selectedAnswer === questions[currentQuestionIndex].answer) {
            e.target.style.backgroundColor = "green";
            score += 10;
            scoreEl.innerText = score;
        } else {
            e.target.style.backgroundColor = "red";
        }

        
        setTimeout(function() {
            e.target.style.backgroundColor = "white"; 

            currentQuestionIndex++;
            if (currentQuestionIndex < totalQuestions) {
                updateQuestion(currentQuestionIndex);
            } else {
                showGameOver();
            }
        }, 1000);
    });
});

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
    score = 0;
    scoreEl.innerText = score;
    gameOverPage.style.display = 'none';
    gamePage.style.display = 'flex';
    updateQuestion(currentQuestionIndex);
});







 
