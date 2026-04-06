//todo
//bestämma när användaren ska levla up och relevant kod för det
//fixa så badges låses upp vid korrekta tidpunkter
//växla mellan frågorna
//om quizzet redan är startat och man trycker back 
//ska man inte behöva skriva in sitt namn igen och på så sätt skapa en ny användare

renderHeader(document.querySelector("body"));
renderStart();
renderFooter();
// renderQuiz();
// renderCodePage();
// renderLeaderboard();
// renderLevelUp();
history.replaceState({page: "start"}, "", location.pathname);
