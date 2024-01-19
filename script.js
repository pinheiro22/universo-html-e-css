const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})



// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// }

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#card-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
  

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('responsive');
}