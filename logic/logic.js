function addPlayerPoints() {
    const question = currentQuestion();
    appState.points = appState.points + question.points; 
    showAcquiredPoints(question.points);
}

function currentQuestion() {
    for (q of quizQuestions) {
        if (appState.question === q.question) {
            return q;
        }
    }
}

function popUpTimer(parent) {
    setTimeout( () => {
        parent.remove();
    }, 5000);
}