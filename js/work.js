// ハンバーガーメニュークリック時にクラス（open）を付け外しする
const hamburger = document.getElementById("hamburger-btn");
const nav = document.querySelector(".nav_red");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
});
