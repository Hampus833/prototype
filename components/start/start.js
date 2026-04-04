function renderStart() {
    const parent = document.querySelector("main");
    parent.innerHTML = `
    <h1 id="start-header">Welcome</h1>
    <div id="start-content">
        <p id="info-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel  
        imperdiet dui. Aliquam pulvinar venenatis ante, sed tristique turpis  ullamcorper at. Suspendisse potenti. Nunc sagittis eros maximus,  
        fringilla elit sit amet, dictum odio. Vestibulum leo justo, consequat et tempus eget, feugiat in arcu. Cras pellentesque malesuada tempor.
        </p>
        <div id="nickname-box">
            <input type="text" id="nickname-input" name="nickname" placeholder="Enter your nickname"></input>
            <button id="start-button" class="continue-button">Start</button>
        </div>
    </div>
    `;


    parent.querySelector("#start-button").addEventListener("click", startQuiz);
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
            unlockBadge(8);
            navigate("/quiz", {page: "quiz"});
            // showContinue();
    }
}

