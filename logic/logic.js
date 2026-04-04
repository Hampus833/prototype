function addPlayerPoints() {
    const question = currentQuestion();
    appState.points = appState.points + question.points; 
    showAcquiredPoints(question.points);
    updatePoints();
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
    }, 3000);
}

function orderBadges() {
    const orderedBadges = badges
    .filter(b => b.achieved)
    .concat(badges.filter(b => !b.achieved));
    return orderedBadges;
}

function addPlayerToLeaderboard() {
    
}