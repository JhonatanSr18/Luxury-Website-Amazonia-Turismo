const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");

// 1. Monitora o scroll para ativar/desativar o menu compacto
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    // Ativa após descer 80px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    // Se o usuário voltar ao topo, garante que o menu fecha se estivesse aberto
    menuToggle.classList.remove("open");
  }
});

// 2. Transforma o hambúrguer em X ao clicar
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");

  // AQUI você pode disparar a abertura do seu menu lateral/overlay, ex:
  document.getElementById("menuOverlay").classList.toggle("active");
});
