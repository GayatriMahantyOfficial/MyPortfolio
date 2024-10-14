
var typed = new Typed(".auto-type", {
    strings: ["Full Stack Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("#navbar"); // Corrected selector to match id in HTML

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}