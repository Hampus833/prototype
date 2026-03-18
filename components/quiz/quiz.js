function renderQuiz() {
    //set quizPage = true;
    const parent = document.querySelector("main");
    parent.innerHTML = `
    <div id="quiz-content">
        <p>Stage 1</p>
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
            for (let a of q.answers) {
                const button = document.createElement("button");
                button.textContent = a;
                parent.appendChild(button);
            }
            break;
        }
    }
}