function toggleMenu() {
    var menu = document.querySelector('ul');
    if(menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
 }
 
 var hamburgerButton = document.querySelector('.menu-hamburguer');
 hamburgerButton.addEventListener('click', toggleMenu);
 
 
 window.addEventListener('scroll', function(){
     let header = document.querySelector('#header')
     header.classList.toggle('rolagem', window.scrollY > 0)
 })