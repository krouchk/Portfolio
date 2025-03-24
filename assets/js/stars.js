const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let shootingStars = [];

function createStars() {
    for (let i = 0; i < 80; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            alpha: Math.random() * 0.5 + 0.5
        });
    }
}

function createShootingStar() {
    let xStart = Math.random() * canvas.width;
    shootingStars.push({
        x: xStart,
        y: Math.random() * canvas.height * 0.5,
        length: Math.random() * 120 + 50,
        speed: Math.random() * 4 + 2,
        angle: Math.PI / 4 + Math.random() * 0.1, // Variation légère pour le réalisme
        opacity: Math.random() * 0.7 + 0.3,
        trail: [] // Stocker la traînée lumineuse
    });
}

function draw() {
    ctx.fillStyle = "black"; // Fond totalement noir

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dessiner les étoiles fixes
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
    });

    // Dessiner et animer les étoiles filantes
    shootingStars.forEach((star, index) => {
        // Ajouter la position actuelle à la traînée
        star.trail.push({ x: star.x, y: star.y, opacity: star.opacity });

        // Garder seulement les dernières positions pour la traînée
        if (star.trail.length > 10) {
            star.trail.shift();
        }

        // Dessiner la traînée lumineuse
        for (let i = 0; i < star.trail.length; i++) {
            let t = star.trail[i];
            ctx.beginPath();
            ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${t.opacity * (i / star.trail.length)})`;
            ctx.fill();
        }

        // Dessiner l'étoile filante principale avec un glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "white";
        ctx.fill();

        // Mettre à jour la position
        star.x -= star.speed * Math.cos(star.angle);
        star.y += star.speed * Math.sin(star.angle);

        // Supprimer l'étoile filante quand elle sort de l'écran
        if (star.x < -100 || star.y > canvas.height + 100) {
            shootingStars.splice(index, 1);
        }
    });

    requestAnimationFrame(draw);
}

// Ajouter une étoile filante toutes les 2.5 secondes
setInterval(createShootingStar, 2500);

createStars();
draw();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
