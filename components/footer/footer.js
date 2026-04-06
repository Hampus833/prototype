function renderFooter() {
    const footer = document.querySelector("footer");
    footer.innerHTML = `
    <p id="points">${appState.points} Points</p>
    <button id="continue" class="continue-button">Continue</button>
    `;

    // if (!quizPage) {
    //     document.getElementById("continue").style.visibility = "hidden";
    // }
    showContinue();
    document.getElementById("continue").addEventListener("click", nextQuestion)
    //for testing
    //inactiveContinue();
}

function showContinue() {
    if (!quizPage && !levelUpPage) {
        document.getElementById("continue").style.visibility = "hidden";
    } else {
        document.getElementById("continue").style.visibility = "visible";
    }
}

function inactiveContinue() {
    if (quizPage) {
        const con = document.querySelector("#continue")
        con.disabled = true;
        con.classList.add("answered");
    }
}

function activeContinue() {
        const con = document.querySelector("#continue")
        con.disabled = false;
        con.classList.remove("answered");
}

function showAcquiredPoints(points) {
    const wrapper = document.getElementById("wrapper");
    const p = document.createElement("p");
    p.setAttribute("id", "points-popup");
    p.textContent = "+" + points;
    
    wrapper.appendChild(p);
    popUpTimer(p);
}

function updatePoints() {
    document.getElementById("points").textContent = `${appState.points} Points`;
}

function nextQuestion(event) {
    
    //unlock the correct badges
    switch (appState.question) {
        case 1:
            if (!levelUpPage) {
                console.log("current question: " + appState.question);
                showLevelUpScreen();
            } else {
                showQuestionScreen();
                console.log("current question: " + appState.question);
            }
            break;
        case 2:
            if (!levelUpPage) {
                console.log("current question: " + appState.question);
                showLevelUpScreen();
            } else {
                showQuestionScreen();
                console.log("current question: " + appState.question);
            }
            break;
        case 3:
            console.log("current question: " + appState.question);
            updateQuestion();
            questionType();
            break;
        case 4:
            if (!levelUpPage) {
                console.log("current question: " + appState.question);
                showLevelUpScreen();
            } else {
                showQuestionScreen();
                console.log("current question: " + appState.question);
            }
            break;
        case 5:
            console.log("current question: " + appState.question);
            updateQuestion();
            questionType();
            break;
        case 6:   
            if (!levelUpPage) {
                console.log("current question: " + appState.question);
                showLevelUpScreen();
            } else {
                showQuestionScreen();
                console.log("current question: " + appState.question);
            }
            break;
        default:
            break;
    }
}


