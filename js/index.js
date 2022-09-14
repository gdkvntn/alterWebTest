const burger = document.querySelector(".burger");
const nav = document.querySelector(".header-nav");
const closeBtn = document.querySelector(".close");
const headerLink = document.querySelectorAll(".header-link");
burger.addEventListener("click", () => {
  nav.classList.add("nav-active");
  closeBtn.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  nav.classList.remove("nav-active");
  closeBtn.style.display = "none";
});
headerLink.forEach((el) =>
  el.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    closeBtn.style.display = "none";
  })
);
