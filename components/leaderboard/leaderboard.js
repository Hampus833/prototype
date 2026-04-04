function renderLeaderboard() {
    const parent = document.querySelector("main");
    parent.innerHTML = `
    <div id="leaderboard-content">
        <h1>Leaderboard</h1>
        <ul id="leaderboard-list">
        </ul>
    </div>
    `;

    // calculatePlayerPos();
    updateLeaderboard();
    
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
