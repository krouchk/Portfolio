// Initialisation des animations au scroll (AOS)
AOS.init({
  duration: 1000,
  once: true
});

// Effet de survol sur les sections détaillées
document.addEventListener("DOMContentLoaded", function () {
  let weeks = document.querySelectorAll(".week");

  weeks.forEach(week => {
    week.addEventListener("mouseover", function () {
      this.style.transform = "translateY(-5px)";
      this.style.boxShadow = "0px 4px 15px rgba(255, 255, 255, 0.2)";
    });

    week.addEventListener("mouseout", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });
  });
});
