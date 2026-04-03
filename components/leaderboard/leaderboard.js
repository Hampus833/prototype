function renderLeaderboard() {
    const parent = document.querySelector("main");
    parent.innerHTML = `
    <div id="leaderboard-content">
        <h1>Leaderboard</h1>
        <ul id="leaderboard-list">
        </ul>
    </div>
    `;

    calculatePlayerPos();
    
    const list = parent.querySelector("#leaderboard-list");
    for (let l of leaderboardPlayers) {
        const li = document.createElement("li");
        li.setAttribute("id", l.position);
        li.classList.add("leaderboard-item");
        li.innerHTML = `
        <div id="player-pos">
            <p id="leaderboard-pos">${l.position}.</p>
            <p id="leaderboard-player">${l.name}</p>
        </div>
        <div id="level-points">
            <p id="leaderboard-level">LV.${l.level}</p>
            <p id="leaderboard-points">${l.points} Points</p>
        </div>
        `;
        list.appendChild(li);
    }
}

function calculatePlayerPos() {
    //Spelarens resultat finns kvar även fast de flyttat upp i leaderboarden
    //när man fått 200 poäng är man på både 11 och 10 plats en med 100 och en med 200
    const playerPoints = appState.points;
    if (playerPoints === 0) {
        //gamla spelaren ersätts av användaren vilket gör att deras poäng potentiellt kan dyka upp över hela leaderboarden
        //ska bara dyka upp på platsen de är just nu
        leaderboardPlayers[10].name = appState.nickname;
        leaderboardPlayers[10].level = appState.level;
        leaderboardPlayers[10].points = appState.points;
        return;
    }

    for (let l of leaderboardPlayers) {
        if (playerPoints > l.points) {
            l.name = appState.nickname;
            l.level = appState.level;
            l.points = appState.points;
            break;
        }
    }

}