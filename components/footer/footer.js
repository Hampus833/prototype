function renderFooter() {
    const footer = document.querySelector("footer");
    footer.innerHTML = `
    <p id="points">${appState.points} Points</p>
    <button id="continue" class="continue-button">Continue</button>
    `;

    if (!quizPage) {
        document.getElementById("continue").style.visibility = "hidden";
    }
}