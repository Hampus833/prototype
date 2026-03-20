function renderLevelUp() {
    quizPage = true;
    
    const parent = document.querySelector("main");
    parent.innerHTML = `
    <div id="level-up-content">
        <h1>LEVEL UP<span>!</span>
        <p>1 - <span>2</span></p>
    </div>
    `
}