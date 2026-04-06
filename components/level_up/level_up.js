function renderLevelUp() {
    //text shouldnt be hardcoded needs to update dynamically. Take content from appState
    quizPage = true;
    levelUpPage = true;
    const parent = document.querySelector("main");
    parent.innerHTML = `
    <div id="level-up-content">
        <h1>LEVEL UP<span>!</span>
        <p>${appState.level - 1} - <span>${appState.level}</span></p>
    </div>
    `
}

//level up bör ske regelbundet
//efter första frågan
//efter andra frågan
//efter fjärde frågan
//efter femte/sjätte frågan