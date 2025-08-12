history.pushState(null, "", location.href);
window.addEventListener("popstate", function() {
  history.pushState(null, "", location.href);
  alert("هو دخول الحمام زي خروجه 😁");
});