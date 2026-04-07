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
    //om man gått bak ett steg och sen trycker continue istället för frampilen
    //fuckas hela quizzet upp måste på något sätt kolla ifall frågan redan är besvarad
    //unlock the correct badges
    switch (appState.question) {
        case 1:
            toggleNextScreen();
            break;
        case 2:
            toggleNextScreen();
            break;
        case 3:
            updateQuestion();
            questionType();
            break;
        case 4:
            toggleNextScreen();
            break;
        case 5:
            updateQuestion();
            questionType();
            break;
        case 6:   
            toggleNextScreen();
            break;
        default:
            break;
    }
}

function toggleNextScreen() {
    //går man tillbaka till level up screenen efter man svarat på en fråga och trycker continue
    //ska man inte tas till nästa fråga om det skulle kommit en leve up skärm där emellan
    //
    const level = levelUp.find(x => x.id === currentLevelUpScreen);
    if (appState.question === 6) {
        if (level.seen) {
            navigate("/leaderboard", {page: "leaderboard"});
            disableLeaderboard();
            editLeaderboardHeader("End result");
            return;
        }
    }
    
    if (!levelUpPage) {
        showLevelUpScreen();
    } else {
        if (!level.seen) {
            showLevelUpScreen();
            return;
        } else {
            showQuestionScreen();
        }

        if (level.seen) {
            currentLevelUpScreen = currentLevelUpScreen + 1;
            console.log(currentLevelUpScreen);
        }
    }
}


