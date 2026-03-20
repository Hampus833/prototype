renderHeader(document.querySelector("body"));
// renderStart();
renderCodePage();
// renderLeaderboard();
// renderQuiz();
renderFooter();
history.replaceState({page: "start"}, "", location.pathname);
