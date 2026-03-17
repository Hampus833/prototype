renderHeader(document.querySelector("body"));
renderStart();
history.replaceState({page: "start"}, "", location.pathname);
