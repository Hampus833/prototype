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
];

const levelUp = [
{
    id: 1,
    seen: false,
},
{
    id: 2,
    seen: false,
},
{
    id: 3,
    seen: false,
},
{
    id: 4,
    seen: false,
},
]

const quizQuestions = [
{
    question: 1,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Curabitur semper sapien vitae arcu elementum, eget sagittis mi pellentesque.`,
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 1,
    answered: false,
    buttonPressed: 0,
    points: 100,
    type: "quiz"
},
{
    question: 2,
    description: `This is the second question`,
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 3,
    answered: false,
    buttonPressed: 0,
    points: 100,
    type: "quiz"
},
{
    question: 3,
    description: `This is the third question`,
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 3,
    answered: false,
    buttonPressed: 0,
    points: 200,
    type: "quiz"
},
{
    question: 4,
    description: `This is the fourth question`,
    answers: [],
    correctAnswer: "<p>Change color</p>",
    answered: false,
    buttonPressed: 0,
    points: 200,
    type: "code"
},
{
    question: 5,
    description: `This is the fifth question`,
    answers: [],
    correctAnswer: "<button>color</button>",
    answered: false,
    buttonPressed: 0,
    points: 200,
    type: "code"
},
{
    question: 6,
    description: `This is the sixth question`,
    answers: [],
    correctAnswer: "p {color: blue}",
    answered: false,
    buttonPressed: 0,
    points: 300,
    type: "code"
},
];

//todo
//i level badgesen lägga till en level nyckel så att jag kan använda användarens level
//för att hitta objektet, istället för att behöva hårdkoda med objekt id:t varje gång
//känns som om det kommer bli lättare än att behöva hårdkoda, får se. 
//ev en funktion som låser upp rätt badge beronde på leveln. 
//har ju inte flera continue knappar så kommer behöva göra så för att inte låsa fast. 
const badges = [{
    id: 1,
    description: "Reached first place on the leaderboard",
    unlockInstructions: "Unlock by reaching first place on the leaderboard",
    locked: "../images/badges/locked/1st-leaderboard-badge-locked.svg",
    unlocked: "../images/badges/unlocked/1st-leaderboard-unlocked.svg",
    achieved: false,
}, 
{
    id: 2,
    description: "Reached second place on the leaderboard",
    unlockInstructions: "Unlock by reaching second place on the leaderboard",
    locked: "../images/badges/locked/2nd-leaderboard-badge-locked.svg",
    unlocked: "../images/badges/unlocked/2nd-leaderboard-unlocked.svg",
    achieved: false,
},
{
    id: 3,
    description: "Reached third place on the leaderboard",
    unlockInstructions: "Unlock by reaching third place on the leaderboard",
    locked: "../images/badges/locked/3rd-leaderboard-badge-locked.svg",
    unlocked: "../images/badges/unlocked/3rd-leaderboard-unlocked.svg",
    achieved: false,
},
{
    id: 4,
    description: "Answered all questions correctly",
    unlockInstructions: "Unlock by answering all questions correctly",
    locked: "../images/badges/locked/all-questions-correct-badge-locked.svg",
    unlocked: "../images/badges/unlocked/all-questions-correct-badge-unlocked.svg",
    achieved: false,
},
{
    id: 5,
    description: "Answered your first question correctly",
    unlockInstructions: "Unlock by getting your first correct answer",
    locked: "../images/badges/locked/first-question-correct-badge-locked.svg",
    unlocked: "../images/badges/unlocked/first-question-correct-badge-unlocked.svg",
    achieved: false,
},
{
    id: 6,
    description: "Answered a question incorrectly",
    unlockInstructions: "Unlock by answering a question incorrectly",
    locked: "../images/badges/locked/first-question-incorrect-badge-locked.svg",
    unlocked: "../images/badges/unlocked/first-question-incorrect-badge-unlocked.svg",
    achieved: false,
},
{
    id: 7,
    description: "Getting started",
    unlockInstructions: "Unlock by starting the quiz",
    locked: "../images/badges/locked/getting-started-badge-locked.svg",
    unlocked: "../images/badges/unlocked/getting-started-badge-unlocked.svg",
    achieved: false,
},
{
    id: 8,
    description: "Reached level 1",
    unlockInstructions: "Unlock by reaching level 1",
    locked: "../images/badges/locked/level-1-badge-locked.svg",
    unlocked: "../images/badges/unlocked/level-1-badge-unlocked.svg",
    achieved: false,
},
{
    id: 9,
    description: "Reached level 2",
    level: 2,
    unlockInstructions: "Unlock by reaching level 2",
    locked: "../images/badges/locked/level-2-badge-locked.svg",
    unlocked: "../images/badges/unlocked/level-2-badge-unlocked.svg",
    achieved: false,
},
{
    id: 10,
    description: "Reached level 3",
    level: 3,
    unlockInstructions: "Unlock by reaching level 3",
    locked: "../images/badges/locked/level-3-badge-locked.svg",
    unlocked: "../images/badges/unlocked/level-3-badge-unlocked.svg",
    achieved: false,
},
{
    id: 12,
    description: "pReached level 4",
    level: 4,
    unlockInstructions: "Unlock by reaching level 4",
    locked: "../images/badges/locked/level-4-badge-locked.svg",
    unlocked: "../images/badges/unlocked/level-4-badge-unlocked.svg",
    achieved: false,
},
{
    id: 13,
    description: "Reached level 5",
    level: 5,
    unlockInstructions: "Unlock by reaching level 5",
    locked: "../images/badges/locked/level-5-badge-locked.svg",
    unlocked: "../images/badges/unlocked/level-5-badge-unlocked.svg",
    achieved: false,
},
]