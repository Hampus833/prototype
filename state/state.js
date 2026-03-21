let appState = {
    nickname: "Nickname",
    points: 0,
    question: 1,
    level: 1,
}

let quizPage = false;
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
    //you return to startPage no matter what page you were on after clicking back button on leaderboard, fix
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
        showContinue();
        console.log("Now leaderboard should render");
    }
    
    if (state.page === "quiz") {
        renderQuiz()
        showContinue();
    }
    
}

function navigate(url, pageData) {
    history.pushState(pageData, "", url);
    renderPage(pageData);
}

//add database file and move these arrays
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
},
];

//badges should probably be svgs
//add url to svg for each badge
//should be greyed out if not unlocked or something like that
//maybe hover function to see unlock requirement
const badges = [{
    id: 1,
    description: "placeholder",
    unlocked: false,
}, 
{
    id: 2,
    description: "placeholder",
    unlocked: false,
},
{
    id: 3,
    description: "placeholder",
    unlocked: false,
},
{
    id: 4,
    description: "placeholder",
    unlocked: false,
},
{
    id: 5,
    description: "placeholder",
    unlocked: false,
},
{
    id: 6,
    description: "placeholder",
    unlocked: false,
},
{
    id: 7,
    description: "placeholder",
    unlocked: false,
},
{
    id: 8,
    description: "placeholder",
    unlocked: false,
},
{
    id: 9,
    description: "placeholder",
    unlocked: false,
},
{
    id: 10,
    description: "placeholder",
    unlocked: false,
},
{
    id: 12,
    description: "placeholder",
    unlocked: false,
},
{
    id: 13,
    description: "placeholder",
    unlocked: false,
},
{
    id: 14,
    description: "placeholder",
    unlocked: false,
},
{
    id: 15,
    description: "placeholder",
    unlocked: false,
},
{
    id: 16,
    description: "placeholder",
    unlocked: false,
},
]