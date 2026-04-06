//todo
//bestämma när användaren ska levla up och relevant kod för det
//skriva korrekt descirptions för alla badges, och hur de låses upp.
//fixa så badges låses upp vid korrekta tidpunkter
//växla mellan frågorna
//om quizzet redan är startat och man trycker back 
//ska man inte behöva skriva in sitt namn igen och på så sätt skapa en ny användare
//points not updating correctly in the leaderboard

renderHeader(document.querySelector("body"));
renderStart();
renderFooter();
// renderQuiz();
// renderCodePage();
// renderLeaderboard();
// renderLevelUp();
history.replaceState({page: "start"}, "", location.pathname);
