//todo
//fixa tillbaka css så att contentet ligger närmre mitten av skärmen
//bestämma när användaren ska levla up och relevant kod för det
//Fixa buggen i leaderboard 
//skriva korrekt descirptions för alla badges, och hur de låses upp.
//fixa så badges låses upp vid korrekta tidpunkter
//fixa en default avatar och inte bara en rosa cirkel som det är nu

renderHeader(document.querySelector("body"));
renderStart();
// renderQuiz();
renderFooter();
// renderCodePage();
// renderLeaderboard();
// renderLevelUp();
history.replaceState({page: "start"}, "", location.pathname);
