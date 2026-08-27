/* =========================================================
   PROJETO GÊNESE — JURASSIC PARK
   Script principal: menu hambúrguer + curiosidades dinâmicas
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- 1. MENU HAMBÚRGUER ---------- */
  var hamburger = document.getElementById("hamburger");
  var navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");

      var aberto = navLinks.classList.contains("open");
      hamburger.setAttribute("aria-expanded", aberto);
      hamburger.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });

    // Fecha o menu ao clicar em um link (mobile)
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- 2. CURIOSIDADES DINÂMICAS ---------- */
  var curiosidades = [
    "Os braquiossauros do parque consomem cerca de 300 kg de vegetação por dia — o equivalente a 600 saladas completas.",
    "As cercas eletrificadas do perímetro operam a 10.000 volts e são inspecionadas duas vezes por dia pela equipe técnica.",
    "O DNA dos dinossauros foi completado com fragmentos de DNA de sapo — Lorem ipsum dolor sit amet, consectetur.",
    "O centro de visitantes possui um restaurante temático com capacidade para 450 pessoas e vista para a lagoa dos hadrossauros.",
    "Cada velociraptor recebe enriquecimento ambiental diário: quebra-cabeças com carne escondida para estimular a caça.",
    "A trilha do Vale dos Fósseis exibe réplicas em escala real de pegadas encontradas na Isla Nublar.",
    "O sistema de contagem de dinossauros do parque foi projetado para reconhecer 238 animais — e nunca esperou encontrar mais que isso.",
    "O âmbar dominicano usado pela InGen tem entre 20 e 30 milhões de anos e preserva mosquitos que se alimentaram de sangue de dinossauros."
  ];

  var factText = document.getElementById("factText");
  var factBtn = document.getElementById("factBtn");
  var ultimoIndice = -1;

  function mostrarCuriosidade() {
    var indice;
    do {
      indice = Math.floor(Math.random() * curiosidades.length);
    } while (indice === ultimoIndice && curiosidades.length > 1);
    ultimoIndice = indice;

    // Animação simples de fade
    factText.classList.add("fading");
    setTimeout(function () {
      factText.textContent = curiosidades[indice];
      factText.classList.remove("fading");
    }, 300);
  }

  if (factText && factBtn) {
    mostrarCuriosidade();
    factBtn.addEventListener("click", mostrarCuriosidade);
  }
});
