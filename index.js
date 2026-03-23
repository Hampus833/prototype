renderHeader(document.querySelector("body"));
//renderStart();
renderQuiz();
renderFooter();
// renderCodePage();
// renderLeaderboard();
// renderLevelUp();
history.replaceState({page: "start"}, "", location.pathname);
