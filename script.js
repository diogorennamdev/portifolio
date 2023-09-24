const hamburguer = document.querySelector('.hamburguer');

const nav = document.querySelector('.menu');

hamburguer.addEventListener('click', () => (
    nav.classList.toggle('active')
));

// Selecione os itens da lista do menu
const menuItems = document.querySelectorAll('.header .menu ul li');

// Selecione o elemento do menu
const menu = document.querySelector('.header .menu');

// Adicione um evento de clique aos itens da lista
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remova a classe "active" do elemento do menu
        menu.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
  var maisTexto = document.getElementById("maisTexto");
  var btn = document.getElementById("leiaMaisBtn");

  // Verificar se a largura da tela é menor que 768 pixels (responsivo)
  if (window.innerWidth < 893) {
      // Inicialmente, oculte o texto adicional
      maisTexto.style.display = "none";

      // Adicione um ouvinte de evento de clique ao botão "Leia mais"
      btn.addEventListener("click", function() {
          // Toggle para mostrar/ocultar o texto adicional
          if (maisTexto.style.display === "none") {
              maisTexto.style.display = "inline";
              btn.innerHTML = "Leia menos";
          } else {
              maisTexto.style.display = "none";
              btn.innerHTML = "Leia mais";
          }
      });
  } else {
      // Se a tela for maior ou igual a 768 pixels, oculte o botão "Leia mais"
      btn.style.display = "none";
      maisTexto.style.display = "inline";
  }
});

// Função para verificar se um elemento está visível na janela de visualização
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para verificar se a seção das barras de progresso está visível na janela de visualização
function isSectionInViewport() {
    const secao = document.querySelector('.sua-secao-class'); // Substitua 'sua-secao-class' pela classe da sua seção
    if (!secao) return false;
    
    const rect = secao.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para animar as barras de progresso quando a seção estiver visível
function animateProgressBars() {
    if (isSectionInViewport()) {
        const barrasProgresso = document.querySelectorAll('.barra-progresso');
        
        barrasProgresso.forEach(barra => {
            if (barra.style.width === '0%') {
                const largura = barra.getAttribute('data-width');
                barra.style.width = largura;
            }
        });
    }
}

// Adicione um evento de rolagem para chamar a função de animação
window.addEventListener('scroll', animateProgressBars);

// Chame a função de animação uma vez quando a página for carregada
window.addEventListener('load', animateProgressBars);

