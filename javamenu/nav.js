const navBar = document.querySelector(".bar");
const navMenu = document.querySelector(".nav_menu");
navBar.addEventListener("click", () =>{
    navMenu.classList.toggle("nav_visible");
} );