function renderStart() {
    const parent = document.querySelector("main");
    parent.innerHTML = `
    <h1 id="start-header">Välkommen</h1>
    <div id="start-content">
        <p id="info-text">
        Du kommer ta del av ett spelifierat quiz. Frågorna har fokus i webbutveckling och det kommer finnas
        frågor om javascript, html samt css. Under quizzets gång kommer du ta del av flera spel-element som en leaderboard,
        poäng, badges och levlar. Genom att svara på frågorna levlar du upp och om du svarar rätt får du poäng
        På leaderboarden kan du se vilken position du ligger på jämfört med andra spelare, 
        baserat på dina poäng. Badges låser du upp under quizzets gång. Klicka på badges för att se vilka du låst upp 
        och vilka du har kvar att låsa upp. Hovra över en badge för att se hur du låser upp den. När du är redo att starta
        skriv in ett nickname och tryck på start. 
        </p>
        <div id="nickname-box">
            <input type="text" id="nickname-input" name="nickname" placeholder="Enter your nickname"></input>
            <button id="start-button" class="continue-button">Start</button>
        </div>
    </div>
    `;


    parent.querySelector("#start-button").addEventListener("click", startQuiz);
    disableStart();
}

function startQuiz(event) {
    //todo set maximum length of nickname to something around 10-12 characters
    event.preventDefault();
    const input = document.getElementById("nickname-input");
    const nickname = input.value;
    if (setNickname(nickname, input)) {
        //eventually all quiz questions get unique url
            showUserInfo();
            addPlayerToLeaderboard();
            unlockBadge(7);
            setTimeout(() => {
                unlockBadge(8);
            }, 2500);
            started = true;
            navigate("/quiz", {page: "quiz"});

            // showContinue();
    }
}

function disableStart() {
    if (started) {
        const button = document.getElementById("start-button")
        button.removeEventListener("click", startQuiz);
        button.classList.add("answered");
    }
}