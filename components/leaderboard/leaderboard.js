let leaderboardOpen = false;

function renderLeaderboard() {
    leaderboardOpen = true;
    
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
        if (l.id === 1) {
            li.classList.add("player");
        }
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

function editLeaderboardHeader(title) {
    const header = document.getElementById("leaderboard-content").querySelector("h1");
    header.textContent = title;
}

