let el = document.getElementById("menu");
el.addEventListener("click", showMenu, false);

let el3 = document.getElementById("close-menu");
el3.addEventListener("click", hideMenu, false);

function showMenu() {
  document.getElementById("navbar").classList.remove("d-none");
}
function hideMenu() {
  document.getElementById("navbar").classList.add("d-none");
}

let navPanel = document.getElementById("navbar");
navPanel.addEventListener("focusout", hideMenu, false);
