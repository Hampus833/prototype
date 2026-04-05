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
    answers: [],
    correctAnswer: "function test() {let test = true}",
    answered: false,
    buttonPressed: 0,
    points: 100,
    type: "code"
},
{
    question: 4,
    description: `This is the fourth question`,
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 3,
    answered: false,
    buttonPressed: 0,
    points: 100,
    type: "quiz"
},
{
    question: 5,
    description: `This is the fifth question`,
    answers: [],
    correctAnswer: "function test() {let test = true}",
    answered: false,
    buttonPressed: 0,
    points: 100,
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
    description: "placeholder",
    unlockInstructions: "Unlock by reaching second place on the leaderboard",
    locked: "../images/badges/locked/2nd-leaderboard-badge-locked.svg",
    unlocked: "../images/badges/unlocked/2nd-leaderboard-unlocked.svg",
    achieved: false,
},
{
    id: 3,
    description: "placeholder",
    unlockInstructions: "how to unlock",
    locked: "../images/badges/locked/3rd-leaderboard-badge-locked.svg",
    unlocked: "../images/badges/unlocked/3rd-leaderboard-unlocked.svg",
    achieved: false,
},
{
    id: 4,
    description: "placeholder",
    unlockInstructions: "how to unlock",
    locked: "../images/badges/locked/all-questions-correct-badge-locked.svg",
    unlocked: "../images/badges/unlocked/all-questions-correct-badge-unlocked.svg",
    achieved: false,
},
{
    id: 5,
    description: "placeholder",
    unlockInstructions: "how to unlock",
    locked: "../images/badges/locked/first-question-correct-badge-locked.svg",
    unlocked: "../images/badges/unlocked/first-question-correct-badge-unlocked.svg",
    achieved: false,
},
{
    id: 6,
    description: "placeholder",
    unlockInstructions: "how to unlock",
    locked: "../images/badges/locked/first-question-incorrect-badge-locked.svg",
    unlocked: "../images/badges/unlocked/first-question-incorrect-badge-unlocked.svg",
    achieved: false,
},
{
    id: 7,
    description: "placeholder",
    unlockInstructions: "how to unlock",
    locked: "../images/badges/locked/getting-started-badge-locked.svg",
    unlocked: "../images/badges/unlocked/getting-started-badge-unlocked.svg",
    achieved: false,
},
{
    id: 8,
    description: "placeholder",
    unlockInstructions: "how to unlock",
    locked: "../images/badges/locked/level-1-badge-locked.svg",
    unlocked: "../images/badges/unlocked/level-1-badge-unlocked.svg",
    achieved: false,
},
{
    id: 9,
    description: "placeholder",
    unlockInstructions: "how to unlock",
    locked: "../images/badges/locked/level-2-badge-locked.svg",
    unlocked: "../images/badges/unlocked/level-2-badge-unlocked.svg",
    achieved: false,
},
{
    id: 10,
    description: "placeholder",
    unlockInstructions: "how to unlock",
    locked: "../images/badges/locked/level-3-badge-locked.svg",
    unlocked: "../images/badges/unlocked/level-3-badge-unlocked.svg",
    achieved: false,
},
{
    id: 12,
    description: "placeholder",
    unlockInstructions: "how to unlock",
    locked: "../images/badges/locked/level-4-badge-locked.svg",
    unlocked: "../images/badges/unlocked/level-4-badge-unlocked.svg",
    achieved: false,
},
{
    id: 13,
    description: "placeholder",
    unlockInstructions: "how to unlock",
    locked: "../images/badges/locked/level-5-badge-locked.svg",
    unlocked: "../images/badges/unlocked/level-5-badge-unlocked.svg",
    achieved: false,
},
]