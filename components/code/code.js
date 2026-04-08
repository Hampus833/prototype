let answer = "";
let p;
let button;
let css;

function renderCodePage() {
    quizPage = true;
    levelUpPage = false;
    const currQ = currentQuestion();
    const parent = document.querySelector("main");
    showContinue();
    inactiveContinue();
    parent.innerHTML = `
    <div id="real-flex">
        <div id="flex">
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
            <div id="user-code-area"></div>
        </div>
    </div>
    `;

    document.getElementById("reload").addEventListener("click", removeText);
    // document.getElementById("code-area").addEventListener("keyup", typing);
    document.getElementById("run-code").addEventListener("click", checkCode);
    checkIfCodeSubmitted();
    
    if (appState.question > 3) {
        addPreviousCode();
    }
}

function removeText(event) {
    if (!event.target.classList.contains("answered")) {
        const codeArea = document.getElementById("code-area");
        codeArea.value = "";
        document.getElementById("code-area").classList.remove("answered-incorrectly");
    }
}
function checkCode(event) {
    const textArea = document.getElementById("code-area");
    const currQ = currentQuestion()
    const text = textArea.value;
    const reloadContainer = document.getElementById("reload-container");
    const editedAnswer = text.toLowerCase().trim().replace(/[\r\n]+/gm, '');

    if (editedAnswer !== "") {
        const editedQuestion = currQ.correctAnswer.toLowerCase().trim().replace(/[\r\n]+/gm, '');
        const checkedAnswer = checkStrings(editedAnswer, editedQuestion);
        answer = editedAnswer;
        
        if (checkedAnswer) {
            if (textArea.classList.contains("answered-incorrectly")) {
                console.log("remove class");
                textArea.classList.remove("answered-incorrectly");
            }
            //svarar rätt får poäng och kan inte skriva om
            textArea.classList.add("answered-correct");
            reloadContainer.classList.add("answered");
            activeContinue();
            addPlayerPoints();
            currQ.answered = true;
            allAnswersCorrect();
            unlockBadge(5);
            noEventListener();
            runCode(editedAnswer);
        } else {
            //svarar fel kan testa skriva igen tills man får rätt
            textArea.classList.add("answered-incorrectly"); 
            activeContinue();
            currQ.answered = true;
            unlockBadge(6);
        }
    } else {
        textArea.value = "Answer can't be empty";
    }
    updateLeaderboard();
}

//global variabel med värdet spelaren svarade
//kolla ifall den är det rätta svaret ifall inte är det fortfarande rött när spelaren kommer tillbaka från leaderboard.

function checkIfCodeSubmitted() {
    const q = currentQuestion();
    const textArea = document.getElementById("code-area");
    if (q.answered) {
        textArea.value = "";
        textArea.value = answer;
        if (answer == q.correctAnswer) {
            textArea.classList.add("answered-correct");
            noEventListener();
        } else {
            textArea.classList.add("answered-incorrectly");
        }
        activeContinue();
    }
}

//function to remove eventlistener of reload button if question answered correctly
function noEventListener() {
    document.getElementById("reload").removeEventListener("click", removeText);
    document.getElementById("run-code").removeEventListener("click", checkCode);
}

function runCode(code) {
    if (appState.question != 6) {
        const codeArea = document.getElementById("user-code-area");
        codeArea.innerHTML = code;
        const child = codeArea.firstChild;
        child.setAttribute("class", "user-code");
        saveCode(child);
    } else {
        saveCode(code);
    }
}

function saveCode(code) {
    console.log(code);
    switch(appState.question) {
        case 4:
            p = code;
            p.setAttribute("id", "user-p");
            break;
        case 5:
            button = code;
            button.setAttribute("id", "user-button");
            break;
        case 6:
            css = code;
            break;
        default:
            break;
    }
    addPreviousCode();
}

function addPreviousCode() {
    const codeArea = document.getElementById("user-code-area");
    if (p) {
        codeArea.appendChild(p)
    }

    if (button) {
        codeArea.appendChild(button);
        button.addEventListener("click", changeTextColor)
    }
}

function changeTextColor(event) {
    event.preventDefault();

    const codeArea = document.getElementById("user-code-area");
    let style = document.createElement("style");
    if (css) {
        if (codeArea.querySelector("style")) {
            codeArea.querySelector("style").remove();
        } else {
            style.innerHTML = "#user-code-area " + css;
            codeArea.appendChild(style);
        }
    }
}