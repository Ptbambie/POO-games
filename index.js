// Sélectionne le canvas par son ID "gameContainer" dans le HTML
const canvas = document.querySelector("#gameContainer");

// le contexte 2D du canvas
const ctx = canvas.getContext("2d");

// Configure la largeur et la hauteur du canvas pour couvrir toute la page
canvas.width = innerWidth;
canvas.height = innerHeight;

// Dessine un cercle dans le canvas
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2, false);
// Les paramètres de la fonction arc sont :
// - x et y : les coordonnées du centre du cercle
// - 30 : le rayon du cercle
// - 0 et Math.PI * 2 : les angles de début et de fin du cercle (dessine un cercle complet)
// - false : indique de dessiner dans le sens des aiguilles d'une montre
ctx.fillStyle = "red"; // Définit la couleur de remplissage du cercle
ctx.fill(); // Remplit le cercle avec la couleur définie

// Dessine un rectangle dans le canvas
class Entity{
    constructor(x, y , radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = "red";
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color; // Définit la couleur de remplissage du cercle
        ctx.fill(); // Remplit le cercle avec la couleur définie
}
}
class Player extends Entity{
    constructor(x, y , radius){
        super(x, y , radius);
        this.color = color;
    }
}

const player = new Player(canvas.width / 2, canvas.height / 2, 30, "blue");
Player.draw();
