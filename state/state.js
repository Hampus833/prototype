let appState = {
    nickname: "Nickname",
    points: 0,
    question: 0,
}

window.addEventListener("popstate", (event) => {
    if (event.state) {
        renderPage(event.state);
    }
});

function renderPage(state) {
    const main = document.querySelector("main");

    if (state.page === "start") {
        renderStart();
    }

    if (state.page === "leaderboard") {
        console.log("Now leaderboard should render");
    }
}

function navigate(url, pageData) {
    history.pushState(pageData, "", url);
    renderPage(pageData);
}