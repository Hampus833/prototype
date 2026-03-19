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
}

function showContinue() {
    console.log("Hej inne i showContinue");
    if (!quizPage) {
        document.getElementById("continue").style.visibility = "hidden";
        console.log("Now continue button should be hidden");
    } else {
        document.getElementById("continue").style.visibility = "visible";
        console.log("now continue button should be visible");
    }
}