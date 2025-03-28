
AOS.init({
  duration: 1000,
  once: true
});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s ease-in-out";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });
});
