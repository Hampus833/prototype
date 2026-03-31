function renderCodePage() {
    quizPage = true;
    const currQ = currentQuestion();
    const parent = document.querySelector("main");
    parent.innerHTML = `
    <div id="code-content">
        <h2>Stage ${currQ.question}</h2>
        <p>${currQ.description}</p>
        <textarea id="code-area" name="code">
        Write your code
        </textarea>
        <div id="reload-container">
            <div id="reload"></div>
        </div>
    </div>
    `;

    document.getElementById("reload").addEventListener("click", removeText());
}

function removeText(event) {
    const codeArea = document.getElementById("code-area");
    codeArea.textContent = "";
}