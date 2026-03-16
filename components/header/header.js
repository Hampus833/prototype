function renderHeader(parent) {
    let header = document.createElement("header");
    header.innerHTML = `
    <div>
        <p id="badges">Badges</p>
        <p id="leaderboard">Leaderboard</p>
    </div>
    <div>
        <p id="nickname">Nickname</p>
        <p id="level">LV.1</p>
        <div id="avatar"></div>
    </div>
    `;
    parent.appendChild(header);
}