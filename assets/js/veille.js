// Initialisation des animations AOS
AOS.init({
  duration: 1000,
  once: true
});

// Effet au survol uniquement des section-block
document.querySelectorAll(".section-block").forEach(block => {
  block.addEventListener("mouseover", () => {
    block.style.transform = "scale(1.02)";
    block.style.transition = "0.3s ease-in-out";
  });
  block.addEventListener("mouseout", () => {
    block.style.transform = "scale(1)";
  });
});