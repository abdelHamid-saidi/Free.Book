// Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser WOW.js pour les animations
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }
});

// Fonction pour masquer le spinner
function hideSpinner() {
    const spinner = document.getElementById('spinner');
    if (spinner) {
        // Ajouter une classe pour l'animation de sortie
        spinner.classList.add('hidden');
        
        // Supprimer complètement le spinner après l'animation
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 500);
    }
}

// Fonction pour afficher le spinner (si nécessaire)
function showSpinner() {
    const spinner = document.getElementById('spinner');
    if (spinner) {
        spinner.style.display = 'flex';
        spinner.classList.remove('hidden');
    }
}

// Fonction pour masquer le spinner (alternative pour compatibilité)
function hideSpinnerLegacy() {
    const spinner = document.getElementById('spinner');
    if (spinner) {
        spinner.classList.remove('show');
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 300);
    }
}

// Exposer les fonctions globalement
window.hideSpinner = hideSpinner;
window.showSpinner = showSpinner;
window.hideSpinnerLegacy = hideSpinnerLegacy;

