const hamburger = document.querySelector (".fas fa-searchr");
const navLinks = document.querySelector (".nav-links");
const links = document.querySelectorAll (".nav-links li");


hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
})