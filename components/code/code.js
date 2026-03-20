function renderCodePage() {
    quizPage = true;
    const parent = document.querySelector("main");
    parent.innerHTML = `
    <div id="code-content">
        <h2>Stage 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur</p>
        <textarea id="code-area" name="code">
        Write your code
        </textarea>
        <div id="reload-container">
            <div id="reload"></div>
        </div>
    </div>
    `;
}