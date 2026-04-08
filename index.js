//todo
//byta ut alla placeholders
//skriva relevant text till frågorna
//fixa frågor
//skriva starttexten

renderHeader(document.querySelector("body"));
renderStart();
renderFooter();
// renderQuiz();
// renderCodePage();
// renderLeaderboard();
// renderLevelUp();
history.replaceState({page: "start"}, "", location.pathname);
