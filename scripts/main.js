//header height on mobile screens
const setHeaderHeight = () => {
  let vh = window.innerHeight * 0.01;
  const header = document.querySelector(".header");
  header.style.setProperty("--vh", `${vh}px`);
};

//hide loading page
const loading = document.querySelector(".loading");
window.addEventListener("DOMContentLoaded", () => {
  setHeaderHeight();
  loading.classList.add("hidden");
});

// Also we listen to the resize event
window.addEventListener("resize", setHeaderHeight);

//hide navigation after click in navigation links

const navLinks = [...document.querySelectorAll(".navigation__link")];
const navBtn = document.getElementById("navi-toggle");

const handleMenuToggle = () => {
  navBtn.checked = !navBtn.checked;
};

navLinks.forEach(link => {
  link.addEventListener("click", () => handleMenuToggle());
});

// Animation on scroll

AOS.init({
  //animation settings
  duration: 600
});
