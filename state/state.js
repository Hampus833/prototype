let appState = {
    nickname: "Nickname",
    points: 0,
    question: 0,
    level: 1,
    question: 1
}

let quizPage = false;
window.addEventListener("popstate", (event) => {
    if (event.state) {
        renderPage(event.state);
    }
});

function renderPage(state) {
    //if url = leaderboard and leaberboard is clicked again it should go back to previous page
    //fix somehow
    const main = document.querySelector("main");
    main.innerHTML = "";

    if (state.page === "start") {
        renderStart();
    }

    if (state.page === "leaderboard") {
        renderLeaderboard();
        console.log("Now leaderboard should render");
    }
}

function navigate(url, pageData) {
    history.pushState(pageData, "", url);
    renderPage(pageData);
}

const leaderboardPlayers = [
    {
        position: 1,
        name: "Bullwhips",
        level: 10,
        points: 1000
    },
    {
        position: 2,
        name: "Flare",
        level: 10,
        points: 900
    },
    {
        position: 3,
        name: "Bullwhips",
        level: 10,
        points: 800
    },
    {
        position: 4,
        name: "Bullwhips",
        level: 10,
        points: 700
    },
    {
        position: 5,
        name: "Bullwhips",
        level: 10,
        points: 600
    },
    {
        position: 6,
        name: "Bullwhips",
        level: 10,
        points: 500
    },
    {
        position: 7,
        name: "Bullwhips",
        level: 10,
        points: 400
    },
    {
        position: 8,
        name: "Bullwhips",
        level: 10,
        points: 300
    },
    {
        position: 9,
        name: "Bullwhips",
        level: 10,
        points: 200
    },
    {
        position: 10,
        name: "Bullwhips",
        level: 10,
        points: 100
    },
    {
        position: 11,
        name: "PlayerStart",
        level: 0,
        points: 0,
    },
];

const quizQuestions = [{
    question: 1,
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 0
}]