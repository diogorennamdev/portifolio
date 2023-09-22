const hamburguer = document.querySelector('.hamburguer');

const nav = document.querySelector('.menu');

hamburguer.addEventListener('click', () => (
    nav.classList.toggle('active')
));

document.getElementById("leiaMaisBtn").addEventListener("click", function() {
    var maisTexto = document.getElementById("maisTexto");
    var btn = document.getElementById("leiaMaisBtn");

    if (maisTexto.style.display === "none") {
      maisTexto.style.display = "inline";
      btn.innerHTML = "Leia menos";
    } else {
      maisTexto.style.display = "none";
      btn.innerHTML = "Leia mais";
    }
  });