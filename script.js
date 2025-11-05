/* ==================== MOSTRAR/ESCONDER MENU MOBILE ==================== */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Mostrar Menu */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Esconder Menu */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Fechar menu ao clicar em um link (mobile) */
const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // Quando clicamos em um link, removemos a classe show-menu
  navMenu.classList.remove("show-menu");
}
navLinks.forEach((n) => n.addEventListener("click", linkAction));

/* ==================== MUDAR COR DO HEADER NO SCROLL ==================== */
function scrollHeader() {
  const header = document.getElementById("header");
  // Quando o scroll for maior que 50 viewport height, adiciona a classe header-scrolled
  if (this.scrollY >= 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
}
window.addEventListener("scroll", scrollHeader);

/* ==================== MOSTRAR BOTÃO SCROLL UP ==================== */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // Quando o scroll for maior que 400 viewport height, mostra o botão
  if (this.scrollY >= 400) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

/* ==================== SCROLL REVEAL (Animação Futurista) ==================== */
// Inicializa o ScrollReveal
const sr = ScrollReveal({
  origin: "top", // Origem da animação
  distance: "60px", // Distância do movimento
  duration: 2000, // Duração (2 segundos)
  delay: 300, // Delay
  reset: false, // Animação ocorre apenas uma vez
});

// Animação da Hero Section
sr.reveal(".hero__data", { origin: "bottom", delay: 400 });

// Animação das Seções (Títulos)
sr.reveal(".section__title", { delay: 200 });
sr.reveal(".section__subtitle", { delay: 100 });

// Animação Sobre
sr.reveal(".about__image", { origin: "left", interval: 200 });
sr.reveal(".about__data", { origin: "right", interval: 200 });
sr.reveal(".value__item", { origin: "bottom", interval: 100 });

// Animação Serviços (Cards)
sr.reveal(".servico__card", { interval: 100, origin: "bottom" });

// Animação Portfólio (Cards)
sr.reveal(".portfolio__card", { interval: 100, origin: "bottom" });

// Animação Depoimentos (Cards)
sr.reveal(".depoimento__card", { interval: 100, origin: "left" });

// Animação CTA
sr.reveal(".cta__data", { origin: "bottom" });

// Animação Contato
sr.reveal(".contato__form", { origin: "left" });
sr.reveal(".contato__info", { origin: "right" });

/* ==================== SIMULAÇÃO FORMULÁRIO ==================== */
// Apenas para fins de demonstração, já que não temos back-end
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio real

    // Simples feedback para o usuário
    alert("Mensagem enviada com sucesso! (Demonstração)");

    // Limpa o formulário
    contactForm.reset();
  });
}
