// Données des auteurs
const authorsData = [
    {
        id: 1,
        name: "Victor Hugo",
        country: "France",
        birthDate: "26/02/1802",
        deathDate: "22/05/1885",
        image: "img/team-2.jpg",
        bio: "Écrivain romantique français, auteur de 'Les Misérables' et 'Notre-Dame de Paris'.",
        books: ["Les Misérables", "Notre-Dame de Paris", "Les Travailleurs de la mer", "L'Homme qui rit"],
        genre: "Roman",
        rating: 4.8,
        featured: true
    },
    {
        id: 2,
        name: "Albert Camus",
        country: "Algérie",
        birthDate: "07/11/1913",
        deathDate: "04/01/1960",
        image: "img/team-3.jpg",
        bio: "Écrivain et philosophe français, prix Nobel de littérature en 1957.",
        books: ["L'Étranger", "La Peste", "Le Mythe de Sisyphe", "Caligula"],
        genre: "Philosophie",
        rating: 4.7,
        featured: true
    },
    {
        id: 3,
        name: "Gustave Flaubert",
        country: "France",
        birthDate: "12/12/1821",
        deathDate: "08/05/1880",
        image: "img/team-2.jpg",
        bio: "Écrivain français, auteur de 'Madame Bovary', chef-d'œuvre du réalisme.",
        books: ["Madame Bovary", "Salammbô", "L'Éducation sentimentale", "Bouvard et Pécuchet"],
        genre: "Roman",
        rating: 4.6,
        featured: false
    },
    {
        id: 4,
        name: "Émile Zola",
        country: "France",
        birthDate: "02/04/1840",
        deathDate: "29/09/1902",
        image: "img/team-3.jpg",
        bio: "Écrivain naturaliste français, auteur de la série 'Les Rougon-Macquart'.",
        books: ["Germinal", "L'Assommoir", "Nana", "Thérèse Raquin"],
        genre: "Roman",
        rating: 4.5,
        featured: false
    },
    {
        id: 5,
        name: "Marcel Proust",
        country: "France",
        birthDate: "10/07/1871",
        deathDate: "18/11/1922",
        image: "img/team-2.jpg",
        bio: "Écrivain français, auteur de 'À la recherche du temps perdu'.",
        books: ["Du côté de chez Swann", "À l'ombre des jeunes filles en fleurs", "Le Côté de Guermantes"],
        genre: "Roman",
        rating: 4.9,
        featured: true
    },
    {
        id: 6,
        name: "Antoine de Saint-Exupéry",
        country: "France",
        birthDate: "29/06/1900",
        deathDate: "31/07/1944",
        image: "img/team-3.jpg",
        bio: "Écrivain et aviateur français, auteur du 'Petit Prince'.",
        books: ["Le Petit Prince", "Vol de nuit", "Terre des hommes", "Citadelle"],
        genre: "Conte",
        rating: 4.8,
        featured: true
    },
    {
        id: 7,
        name: "Jean-Paul Sartre",
        country: "France",
        birthDate: "21/06/1905",
        deathDate: "15/04/1980",
        image: "img/team-2.jpg",
        bio: "Philosophe et écrivain français, prix Nobel de littérature en 1964.",
        books: ["La Nausée", "L'Être et le Néant", "Les Mots", "Huis clos"],
        genre: "Philosophie",
        rating: 4.4,
        featured: false
    }
];

// Fonction pour créer une carte d'auteur
function generateAuthorCard(author) {
    const authorCard = document.createElement('div');
    authorCard.className = "col-lg-4 col-md-6 mb-4";
    authorCard.setAttribute('data-author-id', author.id);

    const booksList = author.books.slice(0, 3).map(book => 
        `<a href="/livre" class="author-book-link">${book}</a>`
    ).join('');

    const socialLinks = `
        <div class="author-social">
            <a href="#" class="btn btn-sm btn-outline-primary rounded-circle me-2" title="Facebook">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="btn btn-sm btn-outline-primary rounded-circle me-2" title="Twitter">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="btn btn-sm btn-outline-primary rounded-circle me-2" title="Instagram">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="btn btn-sm btn-outline-primary rounded-circle" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
            </a>
        </div>
    `;

    authorCard.innerHTML = `
        <div class="author-card wow fadeInUp" data-wow-delay="${(author.id * 0.1)}s">
            <div class="author-image-wrapper">
                <img class="author-image" src="${author.image}" alt="${author.name}">
                <div class="author-overlay">
                    <button class="btn btn-light btn-sm rounded-pill view-profile-btn" data-author-id="${author.id}">
                        <i class="fas fa-user me-1"></i>Voir profil
                    </button>
                </div>
            </div>
            <div class="author-content">
                <h4 class="author-name">${author.name}</h4>
                <p class="author-country">
                    <i class="fas fa-map-marker-alt me-1"></i>${author.country}
                </p>
                <p class="author-dates">
                    <i class="fas fa-calendar me-1"></i>${author.birthDate} - ${author.deathDate}
                </p>
                <p class="author-bio">${author.bio}</p>
                <div class="author-rating mb-3">
                    ${generateStars(author.rating)}
                    <span class="rating-text">(${author.rating})</span>
                </div>
                <div class="author-books">
                    <h6 class="books-title">
                        <i class="fas fa-book me-1"></i>Livres populaires
                    </h6>
                    <div class="books-list">
                        ${booksList}
                        ${author.books.length > 3 ? `<a href="/livre" class="author-book-link">+${author.books.length - 3} autres</a>` : ''}
                    </div>
                </div>
                ${socialLinks}
            </div>
        </div>
    `;

    return authorCard;
}

// Fonction pour générer les étoiles de notation
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star text-warning"></i>';
    }

    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt text-warning"></i>';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star text-warning"></i>';
    }

    return starsHTML;
}

// Fonction pour afficher les auteurs
function displayAuthors(authors = authorsData, containerId = 'auteurs') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    
    authors.forEach(author => {
        const authorCard = generateAuthorCard(author);
        container.appendChild(authorCard);
    });
}

// Fonction pour rechercher des auteurs
function searchAuthors(query) {
    if (!query.trim()) {
        displayAuthors();
        return;
    }

    const filteredAuthors = authorsData.filter(author => 
        author.name.toLowerCase().includes(query.toLowerCase()) ||
        author.country.toLowerCase().includes(query.toLowerCase()) ||
        author.books.some(book => book.toLowerCase().includes(query.toLowerCase()))
    );

    displayAuthors(filteredAuthors);
}

// Fonction pour afficher les auteurs vedettes
function displayFeaturedAuthors() {
    const featuredAuthors = authorsData.filter(author => author.featured);
    displayAuthors(featuredAuthors, 'featured-authors');
}

// Fonction pour charger plus d'auteurs
function loadMoreAuthors() {
    // Simulation de chargement de plus d'auteurs
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Chargement...';
        loadMoreBtn.disabled = true;

        setTimeout(() => {
            // Ici on pourrait charger plus d'auteurs depuis une API
            showToast('Plus d\'auteurs chargés !', 'success');
            loadMoreBtn.innerHTML = '<i class="fas fa-plus me-2"></i>Charger plus d\'auteurs';
            loadMoreBtn.disabled = false;
        }, 2000);
    }
}

// Fonction pour afficher le profil d'un auteur
function showAuthorProfile(authorId) {
    const author = authorsData.find(a => a.id === authorId);
    if (!author) return;

    // Ici on pourrait ouvrir une modal ou rediriger vers une page de profil
    showToast(`Profil de ${author.name}`, 'info');
    console.log('Auteur sélectionné:', author);
}

// Fonction pour ajouter des animations au scroll
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    const authorCards = document.querySelectorAll('.author-card');
    authorCards.forEach(card => {
        observer.observe(card);
    });
}

// Fonction pour ajouter des effets de hover
function addHoverEffects() {
    const authorCards = document.querySelectorAll('.author-card');
    
    authorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Fonction pour gérer les événements de clic
function handleClickEvents() {
    // Gestion des clics sur "Voir profil"
    document.addEventListener('click', (e) => {
        if (e.target.closest('.view-profile-btn')) {
            const authorId = parseInt(e.target.closest('.view-profile-btn').getAttribute('data-author-id'));
            showAuthorProfile(authorId);
        }
    });

    // Gestion du bouton "Charger plus"
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreAuthors);
    }

    // Gestion de la recherche
    const searchInput = document.querySelector('.search-author-input');
    const searchBtn = document.querySelector('.search-author-btn');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchAuthors(e.target.value);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchAuthors(e.target.value);
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput ? searchInput.value : '';
            searchAuthors(query);
        });
    }
}

// Fonction pour afficher des notifications toast
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    // Afficher les auteurs
    displayAuthors();
    
    // Afficher les auteurs vedettes
    displayFeaturedAuthors();
    
    // Ajouter les fonctionnalités
    addScrollAnimations();
    addHoverEffects();
    handleClickEvents();
});

// Exposer les fonctions globalement
window.showToast = showToast;
window.searchAuthors = searchAuthors;
window.loadMoreAuthors = loadMoreAuthors; 