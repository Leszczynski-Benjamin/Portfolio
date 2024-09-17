/* Effet de surlignage nav */
    document.addEventListener('DOMContentLoaded', (event) => {
      const hoverSound = document.getElementById('hover-sound');
      const links = document.querySelectorAll('.nav-1');

      links.forEach(link => {
        link.addEventListener('mouseover', () => {
          hoverSound.currentTime = 0; // Rewind to start
          hoverSound.play();
        });
      });
    });


    /* transition nav-mobile */
    const navLinks = document.querySelectorAll(".navLinks");
    const menuMobile = document.querySelector("#nav-mobile");
    const exitMenuMobile = document.querySelector("#icon-exit-menu");
    const menuBurger = document.querySelector("#icon-burger-menu");
    console.log(navLinks);

    exitMenuMobile.addEventListener("click", ()=>{
      menuMobile.classList.toggle("translate-mobile");
    })


    menuBurger.addEventListener("click", ()=>{
      menuMobile.classList.toggle("translate-mobile");
    })

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuMobile.classList.remove("translate-mobile");
      });
    });

    
  
/* Cursor effect */

const cursor = document.querySelector("#cursor");
let timeout;

// Curseur qui suit la souris
document.addEventListener("mousemove", (e)=> {
  let x = e.clientX;
  let y = e.clientY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // Curseur qui disparait a l'arret
    function mouseStopped(){
      cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 500 )
})

// Curseur qui disparait à la sortie de la fenetre

document.addEventListener("mouseout", ()=>{
  cursor.style.display = "none";
})


// Scroll card

// Sélectionner toutes les cartes à animer
const cards = document.querySelectorAll('.card-desktop');

// Fonction pour vérifier la position de chaque carte et animer si nécessaire
function updateCardAnimations() {
  // Obtenir la hauteur de la fenêtre et la position de défilement actuelle
  const viewportHeight = window.innerHeight;
  const scrollY = window.scrollY;

  // Boucle à travers toutes les cartes
  cards.forEach(card => {
    // Obtenir la position verticale de la carte et ses dimensions
    const cardRect = card.getBoundingClientRect();
    const cardTop = cardRect.top + scrollY;
    const cardHeight = cardRect.height;

    // Calculer la position verticale du centre de la carte par rapport à la fenêtre
    const cardCenter = cardTop + cardHeight / 2;
    const viewportCenter = scrollY + viewportHeight / 2;

    // Calculer le pourcentage de défilement pour ajuster la translation
    const scrollPercent = (viewportCenter - cardCenter) / viewportHeight;

    // Calculer la translation en fonction du pourcentage de défilement
    const translateX = Math.min(Math.max(scrollPercent * 100, -100), 0); // Ajuster la plage de translation

    // Mettre à jour l'animation en fonction du défilement
    card.style.transform = `translateX(${translateX}%)`;

    // Ajouter une animation si la carte est visible dans la fenêtre
    if (cardTop < (scrollY + viewportHeight) && (cardTop + cardHeight) > scrollY) {
      card.animate([
        { transform: 'translateX(-100%)' },  // État initial hors de la vue à gauche
        { transform: `translateX(${translateX}%)` } // État final visible en fonction du défilement
      ], {
        duration: 0,  // Durée nulle car nous mettons à jour l'état en temps réel
        fill: 'forwards' // Maintenir l'état final après l'animation
      });
    }
  });
}

// Ajouter un écouteur d'événement pour le défilement
window.addEventListener('scroll', updateCardAnimations);

// Appeler la fonction au chargement initial de la page
updateCardAnimations();
