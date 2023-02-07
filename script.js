const nav = document.querySelector("nav");
const menuButton = document.querySelector(".header-button");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("active");
})