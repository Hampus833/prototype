//todo
//bestämma när användaren ska levla up och relevant kod för det
//skriva korrekt descirptions för alla badges, och hur de låses upp.
//fixa så badges låses upp vid korrekta tidpunkter
//växla mellan frågorna
//level, nickname och avatar ska inte finnas förrän man klickat på start

renderHeader(document.querySelector("body"));
// renderStart();
renderFooter();
// renderQuiz();
renderCodePage();
// renderLeaderboard();
// renderLevelUp();
history.replaceState({page: "start"}, "", location.pathname);
