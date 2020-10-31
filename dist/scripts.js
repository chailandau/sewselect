// Mobile nav toggle classes on click
let menuToggle = document.querySelector("#nav_toggle");
let nav = document.querySelector("nav")

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
})

