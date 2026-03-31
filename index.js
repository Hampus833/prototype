//todo
//fixa tillbaka css så att contentet ligger i mitten av skärmen
//designa och fixa badges så de är svgs i koden
//

renderHeader(document.querySelector("body"));
// renderStart();
// renderQuiz();
renderFooter();
renderCodePage();
// renderLeaderboard();
// renderLevelUp();
history.replaceState({page: "start"}, "", location.pathname);
