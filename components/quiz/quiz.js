function renderQuiz() {
    //check what question the user is on and render accordingly
    quizPage = true;
    const parent = document.querySelector("main");
    parent.innerHTML = `
    <div id="quiz-content">
        <h2>Stage 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur  
        semper sapien vitae arcu elementum, eget sagittis mi pellentesque.</p>
        <div id="answers">
        </div>
    </div>
    `;

    const answers = document.getElementById("answers");
    renderAnswers(answers);

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
    if (parseInt(clickedId) === currentQuestion().correctAnswer) {
        clickedButton.style.border = "3px solid #65B67E";
    } else {
        clickedButton.style.border = "3px solid #B66574";
    }

    inactiveButtons(clickedButton);
}

function inactiveButtons(button) {
    const buttons = document.querySelector("#answers").querySelectorAll("button");
    
    for (let b of buttons) {
        b.disabled = true;
        b.classList.add("answered");
        b.style.cursor = "auto";
    
    }
}

function currentQuestion() {
    for (q of quizQuestions) {
        if (appState.question === q.question) {
            return q;
        }
    }
}

