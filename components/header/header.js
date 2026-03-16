function renderHeader(parent) {
    let header = document.querySelector("header");
    header.innerHTML = `
    <div id="header-left">
        <p class="clickable" id="badges">Badges</p>
        <p class="clickable" id="leaderboard">Leaderboard</p>
    </div>
    <div id="header-right">
        <p id="nickname">${appState.nickname}</p>
        <p id="level">LV.1</p>
        <div id="avatar"></div>
    </div>
    `;
    console.log("hej")
    header.querySelector("#leaderboard").addEventListener("click", testFunction);
}

function testFunction(event) {
    event.preventDefault();

    navigate("/leaderboard", {page: "leaderboard"});
}