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
    //for testing
    //inactiveContinue();
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

function inactiveContinue() {
    console.log("insideInactive")
    if (quizPage) {
        const con = document.querySelector("#continue")
        console.log("now continue should be inactive");
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