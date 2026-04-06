function addPlayerPoints() {
    const question = currentQuestion();
    appState.points = appState.points + question.points; 
    showAcquiredPoints(question.points);
    updatePlayerLeaderboardPoints();
    updatePoints();
}

function updatePlayerLeaderboardPoints() {
    let player = leaderboardPlayers.find(x => x.id === 1);
    player.points = appState.points;
}

function currentQuestion() {
    for (q of quizQuestions) {
        if (appState.question === q.question) {
            return q;
        }
    }
}

function checkStrings(userString, checkString) {
    if (userString == checkString) {
        return true;
    } else {
        return false;
    }
}
function popUpTimer(parent) {
    setTimeout( () => {
        parent.remove();
    }, 2000);
}

function orderBadges() {
    const orderedBadges = badges
    .filter(b => b.achieved)
    .concat(badges.filter(b => !b.achieved));
    return orderedBadges;
}

function addPlayerToLeaderboard() {
    const user = {
        id: 1,
        position: leaderboardPlayers.length + 1,
        name: appState.nickname,
        level: appState.level,
        points: appState.points
    }

    leaderboardPlayers.push(user);
}

function updateLeaderboard() {
    const sorted = leaderboardPlayers.sort((a, b) => b.points - a.points);
    let flag = false;
    console.log(sorted);
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i].id === 1) {
            flag = true;
            sorted[i].position = i + 1;
        }
        if (flag) {
            sorted[i].position = i + 1;
        }
    }
    leaderboardPositionBadges();
}

function unlockBadge(badgeId) {
    let unlockedBadge = badges.find(x => x.id === badgeId);
    if (checkIfAchieved(unlockedBadge)) {
        newBadgePopUp(unlockedBadge);
    }
}

function checkIfAchieved(badge) {
    if (!badge.achieved) {
        badge.achieved = true;
        return true;
    }
}

function unlockLevelBadge(level) {
    let unlockedBadge = badges.find(x => x.level === level);
    if (checkIfAchieved(unlockedBadge)) {
        newBadgePopUp(unlockedBadge);
    }
}

function questionType() {
    const q = currentQuestion();
    if (q.type === "quiz") {
        renderQuiz()
    } else if (q.type === "code") {
        renderCodePage();
    }
}

function leaderboardPositionBadges() {
    const pos = leaderboardPlayers.findIndex(x => x.id === 1);

    switch (pos){
        case 0:
            unlockBadge(1);
            //code to unlock badge
            break;
        case 1:
            unlockBadge(2);
            //code to unlock badge
            break;
        case 2:
            unlockBadge(3);
            //code to unlock badge
            break;
        default:
            break;
    }
}