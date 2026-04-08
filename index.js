//todo
//byta ut alla placeholders
//ifall man svarar fel och sen rätt blir inte bordern på textarean grön? fixa
//skriva relevant text till frågorna
//fixa frågor
//skriva starttexten
//göra användarnamnet lila
//

renderHeader(document.querySelector("body"));
renderStart();
renderFooter();
// renderQuiz();
// renderCodePage();
// renderLeaderboard();
// renderLevelUp();
history.replaceState({page: "start"}, "", location.pathname);
