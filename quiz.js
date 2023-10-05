const questions = [
    {
        question: "What does DBMS stand for?",
        choices: ["Database Management System","Data Backup and Management System", "Data Business Management Software", "Database Model System"],
        correctAnswer: 0
    },
    {
        question: "Which language is commonly used to query a database?",
        choices: ["JavaScript", "Java", "SQL", "Python"],
        correctAnswer: 2
    },
    {
        question: "What is a primary key in a database?",
        choices: ["A key used for opening the database", "A key used for encryption", "A unique identifier for a record", "A password for the database"],
        correctAnswer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const currentQ = questions[currentQuestion];

    questionElement.textContent = currentQ.question;
    choicesElement.innerHTML = "";

    currentQ.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", () => checkAnswer(index));
        choicesElement.appendChild(choiceButton);
    });
}

function checkAnswer(selectedIndex) {
    const currentQ = questions[currentQuestion];
    if (selectedIndex === currentQ.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>Your Score: ${score} out of ${questions.length}</p>
        <a href="certifcate.html" style="text-decoration : none;background : whitesmoke; ">GET certificate</a>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
}

displayQuestion();
