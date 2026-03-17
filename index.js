renderHeader(document.querySelector("body"));
renderStart();
renderFooter();
history.replaceState({page: "start"}, "", location.pathname);
