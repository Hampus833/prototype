renderHeader(document.querySelector("body"));
// renderStart();
// renderCodePage();
// renderLeaderboard();
// renderQuiz();
renderLevelUp();
renderFooter();
history.replaceState({page: "start"}, "", location.pathname);
