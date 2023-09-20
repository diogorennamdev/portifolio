const hamburguer = document.querySelector('.hamburguer');

const nav = document.querySelector('.menu');

hamburguer.addEventListener('click', () => (
    nav.classList.toggle('active')
))