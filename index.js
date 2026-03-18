renderHeader(document.querySelector("body"));
// renderStart();
renderLeaderboard();
renderFooter();
history.replaceState({page: "start"}, "", location.pathname);
