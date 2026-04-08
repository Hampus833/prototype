function renderQuiz() {
    //check what question the user is on and render accordingly
    const questionInfo = currentQuestion();
    quizPage = true;
    levelUpPage = false;
    const parent = document.querySelector("main");
    parent.innerHTML = `
    <div id="quiz-content">
        <h2 id="stage-text">Stage ${questionInfo.question}</h2>
        <p>${questionInfo.description}</p>
        <div id="answers">
        </div>
        <p id="info-text">${questionInfo.info}</p>
    </div>
    `;

    document.getElementById("info-text").style.visibility = "hidden";
    const answers = document.getElementById("answers");
    renderAnswers(answers);
    inactiveContinue();
    alreadyAnswered();
    
}

function renderAnswers(parent) {
    for (let q of quizQuestions) {
        if (appState.question === q.question) {
            let counter = 1;
            for (let a of q.answers) {
                const button = document.createElement("button");
                button.textContent = a;
                button.setAttribute("id", counter);
                parent.appendChild(button);
                button.addEventListener("click", correctAnswer);
                counter++
            }
            counter = 0;
            break;
        }
    }
}

function correctAnswer(event) {
    event.preventDefault();
    
    const clickedId = event.target.id;
    const clickedButton = event.target;
    checkCorrectAnswer(clickedButton, clickedId);

    currentQuestion().answered = true;
    currentQuestion().buttonPressed = clickedButton.id;
    inactiveButtons(clickedButton);
    updateLeaderboard();
    activeContinue();
    displayInfo();
}

function checkCorrectAnswer(btn, btnId) {
    const question = currentQuestion();
    if (parseInt(btnId) === question.correctAnswer) {
        btn.style.border = "3px solid #65B67E";
        if (!question.answered) {
            unlockBadge(5);
            addPlayerPoints();
            allAnswersCorrect();
            displayInfo("#65B67E");
        }
    } else {
        unlockBadge(6);
        btn.style.border = "3px solid #B66574";
        displayInfo("#B66574");
    }

}

function inactiveButtons(button) {
    const buttons = document.querySelector("#answers").querySelectorAll("button");
    for (let b of buttons) {
        b.disabled = true;
        if (b.id !== button.id) {
            b.classList.add("answered");   
        }
    }
}

function alreadyAnswered() {
    const question = currentQuestion();
    const btn = document.getElementById(question.buttonPressed);
    if (question.answered) {
        inactiveButtons(btn);
        checkCorrectAnswer(btn, btn.id);
        activeContinue();
        btn.classList.remove("answered");

    }
}

function displayInfo(color) {
    const info = document.getElementById("info-text");
    info.style.visibility = "visible";
    info.style.color = color;
}

