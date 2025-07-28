// Données des livres
const booksData = [
    {
        id: 1,
        title: "Le Petit Prince",
        author: "Antoine de Saint-Exupéry",
        publisher: "Gallimard",
        proposer: "Marie D.",
        description: "Un conte poétique et philosophique sur l'amitié et l'amour.",
        genre: "conte",
        status: "disponible",
        rating: 4.8,
        featured: true,
        image: "img/livre-1.jpg",
        year: 1943,
        pages: 96,
        language: "Français"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publisher: "Penguin Books",
        proposer: "Jean P.",
        description: "Une dystopie visionnaire sur le totalitarisme et la surveillance.",
        genre: "science-fiction",
        status: "disponible",
        rating: 4.7,
        featured: true,
        image: "img/livre-2.jpg",
        year: 1949,
        pages: 328,
        language: "Français"
    },
    {
        id: 3,
        title: "Le Seigneur des Anneaux",
        author: "J.R.R. Tolkien",
        publisher: "HarperCollins",
        proposer: "Sophie L.",
        description: "Une épopée fantastique sur le pouvoir et la corruption.",
        genre: "fantasy",
        status: "echange",
        rating: 4.9,
        featured: true,
        image: "img/livre-1.jpg",
        year: 1954,
        pages: 1216,
        language: "Français"
    },
    {
        id: 4,
        title: "Les Misérables",
        author: "Victor Hugo",
        publisher: "Hachette",
        proposer: "Pierre M.",
        description: "Un roman historique sur la rédemption et la justice sociale.",
        genre: "roman",
        status: "disponible",
        rating: 4.6,
        featured: false,
        image: "img/livre-2.jpg",
        year: 1862,
        pages: 1488,
        language: "Français"
    },
    {
        id: 5,
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        publisher: "Flammarion",
        proposer: "Claire R.",
        description: "L'histoire tragique d'Emma Bovary et de ses aspirations romantiques.",
        genre: "roman",
        status: "reserve",
        rating: 4.5,
        featured: false,
        image: "img/livre-1.jpg",
        year: 1857,
        pages: 528,
        language: "Français"
    },
    {
        id: 6,
        title: "L'Étranger",
        author: "Albert Camus",
        publisher: "Gallimard",
        proposer: "Thomas B.",
        description: "Un roman existentialiste sur l'absurdité de la vie.",
        genre: "philosophie",
        status: "disponible",
        rating: 4.4,
        featured: false,
        image: "img/livre-2.jpg",
        year: 1942,
        pages: 184,
        language: "Français"
    },
    {
        id: 7,
        title: "Le Comte de Monte-Cristo",
        author: "Alexandre Dumas",
        publisher: "Le Livre de Poche",
        proposer: "Emma S.",
        description: "Une histoire de vengeance et de rédemption dans la France du XIXe siècle.",
        genre: "roman",
        status: "disponible",
        rating: 4.8,
        featured: true,
        image: "img/livre-1.jpg",
        year: 1844,
        pages: 1056,
        language: "Français"
    },
    {
        id: 8,
        title: "Les Fleurs du Mal",
        author: "Charles Baudelaire",
        publisher: "Gallimard",
        proposer: "Lucas G.",
        description: "Un recueil de poèmes révolutionnaires dans la littérature française.",
        genre: "poesie",
        status: "disponible",
        rating: 4.3,
        featured: false,
        image: "img/livre-2.jpg",
        year: 1857,
        pages: 288,
        language: "Français"
    }
];

// Fonction pour créer une carte de livre
function generateBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = "col-lg-4 col-md-6 mb-4";
    bookCard.setAttribute('data-book-id', book.id);

    const statusBadge = book.status === 'disponible' ? 
        '<span class="book-badge available">Disponible</span>' : 
        book.status === 'echange' ? 
        '<span class="book-badge exchanged">En échange</span>' : 
        '<span class="book-badge reserved">Réservé</span>';

    const ratingStars = generateStars(book.rating);

    bookCard.innerHTML = `
        <div class="book-card wow fadeInUp" data-wow-delay="${(book.id * 0.1)}s">
            <div class="book-image-wrapper">
                <img class="book-image" src="${book.image}" alt="${book.title}">
                ${statusBadge}
                <div class="book-overlay">
                    <div class="d-flex gap-2">
                        <button class="btn btn-light btn-sm rounded-circle view-details-btn" data-book-id="${book.id}" title="Voir détails">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-light btn-sm rounded-circle exchange-btn" data-book-id="${book.id}" title="Échanger">
                            <i class="fas fa-exchange-alt"></i>
                        </button>
                        <button class="btn btn-light btn-sm rounded-circle favorite-btn" data-book-id="${book.id}" title="Favoris">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="book-content">
                <h5 class="book-title mb-2">
                    <a href="#" class="text-decoration-none">${book.title}</a>
                </h5>
                <p class="book-author mb-2">
                   ${book.author}
                </p>
                <p class="book-publisher mb-2">
                   ${book.publisher}
                </p>
                <p class="book-proposer mb-3">
                   Proposé par ${book.proposer}
                </p>
                <p class="book-description">${book.description}</p>
                <div class="book-meta mb-3">
                    <span class="book-genre">
                        <i class="fas fa-tag me-1"></i>${book.genre}
                    </span>
                    <span class="book-year">
                        <i class="fas fa-calendar me-1"></i>${book.year}
                    </span>
                    <span class="book-pages">
                        <i class="fas fa-file-text me-1"></i>${book.pages} p.
                    </span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="book-rating">
                        ${ratingStars}
                        <span class="rating-text">(${book.rating})</span>
                    </div>
                    <button class="btn btn-primary btn-sm rounded-pill interest-btn" data-book-id="${book.id}">
                        <i class="fas fa-heart me-1"></i>Intéressé
                    </button>
                </div>
            </div>
        </div>
    `;

    return bookCard;
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

// Fonction pour afficher les livres
function displayBooks(books = booksData, containerId = 'echanges') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    
    books.forEach(book => {
        const bookCard = generateBookCard(book);
        container.appendChild(bookCard);
    });
}

// Fonction pour rechercher et filtrer les livres
function searchAndFilterBooks() {
    const searchQuery = document.querySelector('.search-book-input')?.value.toLowerCase() || '';
    const genreFilter = document.querySelector('.genre-filter')?.value || '';
    const statusFilter = document.querySelector('.status-filter')?.value || '';

    const filteredBooks = booksData.filter(book => {
        const matchesSearch = !searchQuery || 
            book.title.toLowerCase().includes(searchQuery) ||
            book.author.toLowerCase().includes(searchQuery) ||
            book.description.toLowerCase().includes(searchQuery);
        
        const matchesGenre = !genreFilter || book.genre === genreFilter;
        const matchesStatus = !statusFilter || book.status === statusFilter;

        return matchesSearch && matchesGenre && matchesStatus;
    });

    displayBooks(filteredBooks);
    
    // Afficher un message si aucun résultat
    const container = document.getElementById('echanges');
    if (filteredBooks.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center">
                <div class="no-results">
                    <i class="fas fa-search fa-3x text-muted mb-3"></i>
                    <h4>Aucun livre trouvé</h4>
                    <p class="text-muted">Essayez de modifier vos critères de recherche</p>
                </div>
            </div>
        `;
    }
}

// Fonction pour afficher les livres vedettes
function displayFeaturedBooks() {
    const featuredBooks = booksData.filter(book => book.featured);
    displayBooks(featuredBooks, 'featured-books');
}

// Fonction pour charger plus de livres
function loadMoreBooks() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Chargement...';
        loadMoreBtn.disabled = true;

        setTimeout(() => {
            // Ici on pourrait charger plus de livres depuis une API
            showToast('Plus de livres chargés !', 'success');
            loadMoreBtn.innerHTML = '<i class="fas fa-plus me-2"></i>Charger plus de livres';
            loadMoreBtn.disabled = false;
        }, 2000);
    }
}

// Fonction pour afficher les détails d'un livre
function showBookDetails(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    // Ici on pourrait ouvrir une modal avec les détails
    showToast(`Détails de "${book.title}"`, 'info');
    console.log('Livre sélectionné:', book);
}

// Fonction pour gérer l'échange
function handleExchange(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    if (book.status === 'disponible') {
        showToast(`Demande d'échange envoyée pour "${book.title}"`, 'success');
        // Ici on pourrait envoyer une demande d'échange
    } else {
        showToast('Ce livre n\'est pas disponible pour l\'échange', 'error');
    }
}

// Fonction pour ajouter aux favoris
function toggleFavorite(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    const favoriteBtn = document.querySelector(`[data-book-id="${bookId}"].favorite-btn`);
    if (favoriteBtn) {
        const icon = favoriteBtn.querySelector('i');
        if (icon.classList.contains('fas')) {
            icon.classList.remove('fas');
            icon.classList.add('far');
            showToast('Retiré des favoris', 'info');
        } else {
            icon.classList.remove('far');
            icon.classList.add('fas');
            showToast('Ajouté aux favoris', 'success');
        }
    }
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

    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach(card => {
        observer.observe(card);
    });
}

// Fonction pour ajouter des effets de hover
function addHoverEffects() {
    const bookCards = document.querySelectorAll('.book-card');
    
    bookCards.forEach(card => {
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
    // Gestion des clics sur les boutons
    document.addEventListener('click', (e) => {
        if (e.target.closest('.view-details-btn')) {
            const bookId = parseInt(e.target.closest('.view-details-btn').getAttribute('data-book-id'));
            showBookDetails(bookId);
        }
        
        if (e.target.closest('.exchange-btn')) {
            const bookId = parseInt(e.target.closest('.exchange-btn').getAttribute('data-book-id'));
            handleExchange(bookId);
        }
        
        if (e.target.closest('.favorite-btn')) {
            const bookId = parseInt(e.target.closest('.favorite-btn').getAttribute('data-book-id'));
            toggleFavorite(bookId);
        }
        
        if (e.target.closest('.interest-btn')) {
            const bookId = parseInt(e.target.closest('.interest-btn').getAttribute('data-book-id'));
            showToast('Intérêt enregistré !', 'success');
        }
    });

    // Gestion du bouton "Charger plus"
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreBooks);
    }

    // Gestion de la recherche
    const searchInput = document.querySelector('.search-book-input');
    const searchBtn = document.querySelector('.search-book-btn');

    if (searchInput) {
        searchInput.addEventListener('input', searchAndFilterBooks);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchAndFilterBooks();
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', searchAndFilterBooks);
    }

    // Gestion des filtres
    const genreFilter = document.querySelector('.genre-filter');
    const statusFilter = document.querySelector('.status-filter');

    if (genreFilter) {
        genreFilter.addEventListener('change', searchAndFilterBooks);
    }

    if (statusFilter) {
        statusFilter.addEventListener('change', searchAndFilterBooks);
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
    // Afficher les livres
    displayBooks();
    
    // Afficher les livres vedettes
    displayFeaturedBooks();
    
    // Ajouter les fonctionnalités
    addScrollAnimations();
    addHoverEffects();
    handleClickEvents();
});

// Exposer les fonctions globalement
window.showToast = showToast;
window.searchAndFilterBooks = searchAndFilterBooks;
window.loadMoreBooks = loadMoreBooks; 