// Mobile nav toggle classes on click
let menuToggle = document.querySelector("#nav_toggle");
let nav = document.querySelector("nav");
let body = document.querySelector("body");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("no_scroll");
})

// Sticky header
let header = document.querySelector("header")
window.onscroll = () => {
    if (window.pageYOffset > 25) {
      header.classList.add("scrolled");
      body.classList.add("scrolled");
    } else if (window.pageYOffset <= 25) {
        header.classList.remove("scrolled");
        body.classList.remove("scrolled");
    }
};
