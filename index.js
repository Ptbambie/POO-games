// Sélectionne le canvas par son ID "gameContainer" dans le HTML
const canvas = document.querySelector("#gameContainer");

// le contexte 2D du canvas
const ctx = canvas.getContext("2d");

// Configure la largeur et la hauteur du canvas pour couvrir toute la page
canvas.width = innerWidth;
canvas.height = innerHeight;

// Classe de base pour les entités dessinables
class Entity {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color; // Définit la couleur de remplissage de l'entité
        ctx.fill(); // Remplit l'entité avec la couleur définie
    }
}

// Classe pour le joueur
class Player extends Entity {
    constructor(x, y, radius, color) {
        super(x, y, radius, color);
    }
}

// Classe pour les projectiles avec la propriété velocity (vitesse)
class Projectile extends Entity {
    constructor(x, y, radius, color, velocity) {
        super(x, y, radius, color);
        this.velocity = velocity;
    }

    update() {
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
}

// Classe pour les ennemis
class Enemy extends Projectile {
    constructor(x, y, radius, color, velocity) {
        super(x, y, radius, color, velocity);
    }
}

// Liste des projectiles
const projectiles = [];

// Liste des ennemis
const enemies = [];

// Créer le joueur
const player = new Player(canvas.width / 2, canvas.height / 2, 10, "blue");

// Animation du projectile lors du clic
window.addEventListener("click", (event) => {
    const angle = Math.atan2(
        event.clientY - canvas.height / 2,
        event.clientX - canvas.width / 2
    );

    const velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5,
    };

    const projectile = new Projectile(
        player.x,
        player.y,
        5,
        "white",
        velocity
    );
    projectiles.push(projectile); // Ajoute le projectile à la liste des projectiles
});

// Animation du jeu
function animate() {
    requestAnimationFrame(animate);

    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    player.draw();

    projectiles.forEach((projectile) => projectile.update());

    enemies.forEach((enemy) => enemy.update());
}

// Démarrer l'animation
animate();
