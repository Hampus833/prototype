renderHeader(document.querySelector("body"));
// renderStart();
// renderLeaderboard();
renderQuiz();
renderFooter();
history.replaceState({page: "start"}, "", location.pathname);
