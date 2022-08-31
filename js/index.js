const overlay = document.getElementById("overlay");
const sidebar = document.getElementById("sidebar");

document.getElementById("nav-icon").addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);
sidebar.querySelector("nav ol").addEventListener("click", toggleSidebar);

function toggleSidebar() {
  const menu = document.getElementById("nav-icon");
  const body = document.querySelector("body");

  body.classList.toggle("blur");
  menu.classList.toggle("open");
  overlay.classList.toggle("overlay--show");
  sidebar.classList.toggle("nav__sidebar--show");
}

const header = document.getElementById("header");
let scrollBefore = 0;
window.addEventListener("scroll", function () {
  const scrolled = window.scrollY;

  if (scrollBefore > scrolled) {
    // Scroll Up
    scrollBefore = scrolled;
    if (scrolled === 0) {
      header.setAttribute("class", "header");
    } else {
      header.setAttribute(
        "class",
        "header header__scroll header__scroll--show"
      );
    }
  } else {
    // Scroll Down
    scrollBefore = scrolled;
    header.setAttribute("class", "header header__scroll header__scroll--hide");
  }
});
