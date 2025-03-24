// Initialisation des animations AOS
AOS.init({
    duration: 1000,
    once: true
  });
  
  // Effet au survol des sections pour les rendre plus dynamiques
  document.querySelectorAll("section").forEach(section => {
    section.addEventListener("mouseover", () => {
      section.style.transform = "scale(1.02)";
      section.style.transition = "0.3s ease-in-out";
    });
    section.addEventListener("mouseout", () => {
      section.style.transform = "scale(1)";
    });
  });
  