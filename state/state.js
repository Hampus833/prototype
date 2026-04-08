let appState = {
    nickname: "Nickname",
    points: 0,
    question: 4,
    level: 1,
}

let started = false;
let quizPage = false;
let levelUpPage = false;
let currentLevelUpScreen = 1;

window.addEventListener("popstate", (event) => {
    if (event.state) {
        renderPage(event.state);
    }
});

//should probably be moved from state
window.addEventListener("click", (event) => {
    const target = event.target;
    if (target == document.getElementById("badges")) {
        return;
    }

    if (target.classList.contains("collection-badge")) {
        return;
    }

    if (target == document.getElementById("badges-container")) {
        return;
    }
    
    if (document.getElementById("badge-popup")) {
        document.getElementById("badge-popup").remove();
    }
});

function renderPage(state) {
    //if url = leaderboard and leaberboard is clicked again it should go back to previous page
    //fix somehow

    const main = document.querySelector("main");
    main.innerHTML = "";
    
    if (state.page === "start") {
        renderStart();
        quizPage = false;
        showContinue();
    }
    
    if (state.page === "leaderboard") {
        renderLeaderboard();
        quizPage = false;
        levelUpPage = false;
        showContinue();
    }
    
    if (state.page === "quiz") {
        questionType();
        showContinue();
    }

    if (state.page === "level-up") {
        renderLevelUp();
        showContinue();
    }
    
}

function navigate(url, pageData) {
    history.pushState(pageData, "", url);
    renderPage(pageData);
}

