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

  /* Curiosidades Dinâmicas */
  var curiosidades = [
    "Os braquiossauros do parque consomem cerca de 300 kg de vegetação por dia — pág. 42.",
    "As cercas eletrificadas do perímetro operam a 10.000 volts e são inspecionadas duas vezes por dia pela equipe técnica — pág. 57.",
    "O DNA dos dinossauros foi completado com fragmentos de DNA de sapo — pág. 63.",
    "O centro de visitantes possui um restaurante temático com capacidade para 450 pessoas e vista para a lagoa dos hadrossauros — pág. 88.",
    "Cada velociraptor recebe enriquecimento ambiental diário: quebra-cabeças com carne escondida para estimular a caça — pág. 101.",
    "A trilha do Vale dos Fósseis exibe réplicas em escala real de pegadas encontradas na Isla Nublar — pág. 115.",
    "O sistema de contagem de dinossauros do parque foi projetado para reconhecer 238 animais — pág. 132.",
    "O âmbar dominicano usado pela InGen tem entre 20 e 30 milhões de anos e preserva mosquitos que se alimentaram de sangue de dinossauros — pág. 147.",
    "John Hammond idealizou o parque inspirado em fósseis preservados em âmbar — pág. 152.",
    "Os laboratórios de genética mantêm protocolos de contenção rigorosos para cada espécie — pág. 163.",
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
