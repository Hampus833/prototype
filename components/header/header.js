function renderHeader(parent) {
    let header = document.querySelector("header");
    header.innerHTML = `
    <div id="header-left">
        <p class="clickable" id="badges">Badges</p>
        <p class="clickable" id="leaderboard">Leaderboard</p>
    </div>
    <div id="header-right">
        <p id="nickname">${appState.nickname}</p>
        <p id="level">LV.<span id="span-level">${appState.level}</span></p>
        <div id="avatar"></div>
    </div>
    `;

    header.querySelector("#leaderboard").addEventListener("click", navigateToLeaderboard);
    header.querySelector("#badges").addEventListener("click", toggleBadgeCollection);
    // newBadgePopUp();
    // badgeCollection();
    document.getElementById("header-right").style.visibility = "hidden";
}

function newBadgePopUp(badge) {
    const unlockedBadge = document.createElement("div");
    unlockedBadge.classList.add("badge");
    unlockedBadge.title = badge.description;
    unlockedBadge.style.backgroundImage = `url(${badge.unlocked})`;

    const parent = document.createElement("div")
    parent.setAttribute("id", "new-badge-popup");
    parent.innerHTML = `
    <div class="triangle"></div>
    <div id="new-badge-info-content">
        <p>New badge unlocked!</p>
    </div>
    `;

    parent.querySelector("#new-badge-info-content").appendChild(unlockedBadge);
    document.querySelector("#wrapper").appendChild(parent);
    popUpTimer(parent);
}

function badgeCollection(event) {
    const parent = document.createElement("div");
    parent.setAttribute("id", "badge-popup");
    parent.innerHTML = `
    <div class="triangle"></div>
    <div id="grid-container"></div>
    `;

    const badgeContainer = document.createElement("div");
    badgeContainer.setAttribute("id", "badges-container");
    parent.querySelector("#grid-container").appendChild(badgeContainer);

    const orderedBadges = orderBadges();
    for (let b of orderedBadges) {
        const badge = document.createElement("div");
        badge.classList.add("collection-badge");
        badge.setAttribute("id", b.id);
        badgeContainer.appendChild(badge);

        if (b.achieved) {
            badge.title = b.description;
            badge.style.backgroundImage = `url(${b.unlocked})`
        } else {
            badge.title = b.unlockInstructions;
            badge.style.backgroundImage = `url(${b.locked})`;
        }
    }
    document.getElementById("wrapper").appendChild(parent);
}



function toggleBadgeCollection() {
    if (!document.getElementById("badge-popup")) {
        badgeCollection();
    } else {
        document.getElementById("badge-popup").remove();
    }
}

function navigateToLeaderboard(event) {
    event.preventDefault();

    navigate("/leaderboard", {page: "leaderboard"});
}

function setNickname(nickname, input) {
       //todo set maximum length of nickname to something around 10-12 characters
       //maybe also check if nickname in appState is empty or not otherwise continue with empty input
       const formatted = nickname.trim().replace(/[\r\n]+/gm, '');
    if (formatted.length > 0) {
        if (formatted.length < 13) {
            appState.nickname = nickname;
            document.getElementById("nickname").textContent = nickname;
            input.value = "";
            return true;
        } else {
            alert("Nickname can't be longer than 12 characters");
            return false;
        }
    } else {
        alert("Nickname can't be empty");
        return false;
    }
}

function showUserInfo() {
    document.getElementById("header-right").style.visibility = "visible";
}

function updateLevel() {
    document.getElementById("span-level").textContent = appState.level;
}

function disableLeaderboard() {
    document.getElementById("leaderboard").style.visibility = "hidden";
}