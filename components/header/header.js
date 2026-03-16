function renderHeader(parent) {
    let header = document.querySelector("header");
    header.innerHTML = `
    <div id="header-left">
        <p class="clickable" id="badges">Badges</p>
        <p class="clickable" id="leaderboard">Leaderboard</p>
    </div>
    <div id="header-right">
        <p id="nickname">Nickname</p>
        <p id="level">LV.1</p>
        <div id="avatar"></div>
    </div>
    `;
}