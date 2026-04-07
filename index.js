//todo
//fixa så badges låses upp vid korrekta tidpunkter
//om quizzet redan är startat och man trycker back 
//ska man inte behöva skriva in sitt namn igen och på så sätt skapa en ny användare
//fixa slutskärm
//fixa korrekt poäng för varje fråga
//byta ut alla placeholders

renderHeader(document.querySelector("body"));
renderStart();
renderFooter();
// renderQuiz();
// renderCodePage();
// renderLeaderboard();
// renderLevelUp();
history.replaceState({page: "start"}, "", location.pathname);
