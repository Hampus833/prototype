function renderCodePage() {
    quizPage = true;
    const currQ = currentQuestion();
    const parent = document.querySelector("main");
    showContinue();
    inactiveContinue();
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

    console.log(document.getElementById("reload"));
    document.getElementById("reload").addEventListener("click", removeText);
    document.getElementById("code-area").addEventListener("keyup", typing)
}

function removeText(event) {
    const codeArea = document.getElementById("code-area");
    codeArea.value = "";
}

function typing(event) {
    const text = event.target.value;
    if (event.key !== "Backspace") {
        if (text.length > 0) {
            activeContinue();
        }
    }
}