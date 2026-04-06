let answer = "";

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
    checkIfCodeSubmitted();
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
            //svarar rätt får poäng och kan inte skriva om
            textArea.classList.add("answered-correct");
            reloadContainer.classList.add("answered");
            activeContinue();
            addPlayerPoints();
            currQ.answered = true;
            // checkIfCodeSubmitted();
            noEventListener();
        } else {
            //svarar fel kan testa skriva igen tills man får rätt
            textArea.classList.add("answered-incorrectly"); 
            activeContinue();
            currQ.answered = true;
        }
    } else {
        textArea.value = "Answer can't be empty";
        console.log(textArea.value);
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

        console.log("User answer: " + answer);
        if (answer == q.correctAnswer) {
            textArea.classList.add("answered-correct");
            noEventListener();
        } else {
            console.log("answered incorrectly");
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