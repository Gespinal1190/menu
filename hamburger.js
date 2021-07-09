const hamburger = document.getElementById('navbarToggleExternalContent3');
const navUL = document.getElementById ('nav-url');

hamburger.addEventListener ('click'), () => {
    navUL.classList.toggle('show');
}