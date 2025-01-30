console.log("Le fichier form.js est chargé !");
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche l'envoi par défaut du formulaire

        const emailField = document.querySelector('input[type="email"]');
        const emailValue = emailField.value;

        // Vérifie que l'email a un format valide
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        // Si tout est valide
        alert('Formulaire soumis avec succès !');
        this.reset(); // Réinitialise le formulaire
    });
});
