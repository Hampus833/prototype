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
    header.querySelector("#leaderboard").addEventListener("click", navigateToLeaderboard);
    header.querySelector("#badges").addEventListener("click", toggleBadgeCollection);
    // newBadgePopUp();
    // badgeCollection();
}

function newBadgePopUp() {
    //badges should probably be svgs, only template for now
    const parent = document.createElement("div")
    parent.setAttribute("id", "new-badge-popup");
    parent.innerHTML = `
    <div class="triangle"></div>
    <div id="new-badge-info-content">
        <p>New badge unlocked!</p>
        <div class="badge">
            <p>2</p>
        </div>
    </div>
    `;
    document.querySelector("#wrapper").appendChild(parent);
    popUpTimer(parent);
}

function badgeCollection(event) {
    //badges should probably be svgs, only template for now
    //url in badges object
    const parent = document.createElement("div");
    parent.setAttribute("id", "badge-popup");
    parent.innerHTML = `
    <div class="triangle"></div>
    <div id="grid-container"></div>
    `;

    const badgeContainer = document.createElement("div");
    badgeContainer.setAttribute("id", "badges-container");
    parent.querySelector("#grid-container").appendChild(badgeContainer);

    for (let b of badges) {
        const badge = document.createElement("div");
        badge.classList.add("collection-badge");
        badge.setAttribute("id", b.id);
        badgeContainer.appendChild(badge);
    }
    document.getElementById("wrapper").appendChild(parent);
}

function toggleBadgeCollection() {
    if (!document.getElementById("badge-popup")) {
        console.log("hej")
        badgeCollection();
    } else {
        document.getElementById("badge-popup").remove();
    }
}

// function hideBadgeCollection(event) {
//     event.preventDefault();
//     if (document.getElementById("badge-popup")) {
//         document.getElementById("badge-popup").remove();
//     }
// }

/* function popUpTimer(parent) {
    setTimeout( () => {
        parent.remove();
    }, 5000);
}
 */
function navigateToLeaderboard(event) {
    event.preventDefault();

    navigate("/leaderboard", {page: "leaderboard"});
}

function setNickname(nickname, input) {
       //todo set maximum length of nickname to something around 10-12 characters
       //maybe also check if nickname in appState is empty or not otherwise continue with empty input
    if (nickname.length > 0) {
        appState.nickname = nickname;
        document.getElementById("nickname").textContent = nickname;
        input.value = "";
        return true;
    } else {
        alert("Nickname can't be empty");
        return false;
    }
}