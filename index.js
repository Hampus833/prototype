//todo
//bestämma när användaren ska levla up och relevant kod för det
//fixa så badges låses upp vid korrekta tidpunkter
//om quizzet redan är startat och man trycker back 
//ska man inte behöva skriva in sitt namn igen och på så sätt skapa en ny användare
//ifall man går till leaderboard på level up skärmen ska man komma tillbaka till den och inte nästa fråga.

renderHeader(document.querySelector("body"));
renderStart();
renderFooter();
// renderQuiz();
// renderCodePage();
// renderLeaderboard();
// renderLevelUp();
history.replaceState({page: "start"}, "", location.pathname);
