//todo
//fixa tillbaka css så att contentet ligger i mitten av skärmen
//designa och fixa badges så de är svgs i koden
//bestämma när användaren ska levla up och relevant kod för det
//Fixa buggen i leaderboard 

renderHeader(document.querySelector("body"));
// renderStart();
// renderQuiz();
renderFooter();
renderCodePage();
// renderLeaderboard();
// renderLevelUp();
history.replaceState({page: "start"}, "", location.pathname);
