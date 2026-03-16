renderHeader(document.querySelector("body"));
history.replaceState({page: "start"}, "", location.pathname);
window.addEventListener("popstate", (event) => {
    if (event.state) {
        renderPage(event.state);
    }
})
function renderPage(state) {
    const main = document.querySelector("main");

    if (state.page === "start") {
        main.innerHTML = "";
    }

    if (state.page === "leaderboard") {
        main.innerHTML = "<h1>Leaderboard</h1>";
    }
}

function navigate(url, pageData) {
    history.pushState(pageData, "", url);
    renderPage(pageData);
}