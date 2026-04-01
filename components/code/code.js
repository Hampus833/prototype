function renderCodePage() {
    quizPage = true;
    const currQ = currentQuestion();
    const parent = document.querySelector("main");
    showContinue();
    inactiveContinue();
    parent.innerHTML = `
    <div id="code-content">
        <h2>Stage ${currQ.question}</h2>
        <p id="code-description">${currQ.description}</p>
        <textarea id="code-area" name="code">
        Write your code
        </textarea>
        <div id="reload-container">
            <p id="run-code">Run</p>
            <div id="reload"></div>
        </div>
    </div>
    `;

    document.getElementById("reload").addEventListener("click", removeText);
    // document.getElementById("code-area").addEventListener("keyup", typing);
    document.getElementById("run-code").addEventListener("click", checkCode);
}

function removeText(event) {
    if (!event.target.classList.contains("answered")) {
        const codeArea = document.getElementById("code-area");
        codeArea.value = "";
        document.getElementById("code-area").classList.remove("answered-incorrectly");
    }
}

// function typing(event) {
//     const text = event.target.value;
//     if (event.key !== "Backspace") {
//         if (text.length > 0) {
//             activeContinue();
//         }
//     }
// }

function checkCode(event) {
    const textArea = document.getElementById("code-area");
    const currQ = currentQuestion()
    const text = textArea.value;
    const reloadContainer = document.getElementById("reload-container");
    const editedAnswer = text.toLowerCase().trim().replace(/[\r\n]+/gm, '');

    if (editedAnswer !== "") {
        const editedQuestion = currQ.correctAnswer.toLowerCase().trim().replace(/[\r\n]+/gm, '');
        const checkedAnswer = checkStrings(editedAnswer, editedQuestion);
        
        if (checkedAnswer) {
            //svarar rätt får poäng och kan inte skriva om
            textArea.classList.add("answered-correct");
            reloadContainer.classList.add("answered");
            activeContinue();
            addPlayerPoints();
            event.target.removeEventListener("click", checkCode);
        } else {
            //svarar fel kan testa skriva igen tills man får rätt
            textArea.classList.add("answered-incorrectly"); 
            activeContinue();
        }
    } else {
        textArea.value = "Answer can't be empty";
        console.log(textArea.value);
    }
}

