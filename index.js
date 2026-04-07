//todo
//om quizzet redan är startat och man trycker back 
//ska man inte behöva skriva in sitt namn igen och på så sätt skapa en ny användare
//byta ut alla placeholders

renderHeader(document.querySelector("body"));
renderStart();
renderFooter();
// renderQuiz();
// renderCodePage();
// renderLeaderboard();
// renderLevelUp();
history.replaceState({page: "start"}, "", location.pathname);
