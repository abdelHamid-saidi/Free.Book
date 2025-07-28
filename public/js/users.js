// Données des utilisateurs
const usersData = [
    {
        id: 1,
        name: "Ahmed Benali",
        location: "Alger",
        status: "verifie",
        joinDate: "2023-01-15",
        booksShared: 45,
        exchangesCompleted: 32,
        rating: 4.8,
        featured: true,
        image: "img/team-2.jpg",
        bio: "Passionné de littérature classique et de philosophie. J'aime partager mes découvertes avec la communauté.",
        favoriteGenres: ["Roman", "Philosophie", "Histoire"],
        lastActive: "2024-01-15",
        isOnline: true
    },
    {
        id: 2,
        name: "Fatima Zohra",
        location: "Oran",
        status: "premium",
        joinDate: "2022-08-20",
        booksShared: 78,
        exchangesCompleted: 65,
        rating: 4.9,
        featured: true,
        image: "img/team-3.jpg",
        bio: "Bibliothécaire de formation, j'adore découvrir de nouveaux auteurs et partager mes coups de cœur.",
        favoriteGenres: ["Science-Fiction", "Fantasy", "Roman"],
        lastActive: "2024-01-14",
        isOnline: false
    },
    {
        id: 3,
        name: "Karim Boudiaf",
        location: "Constantine",
        status: "actif",
        joinDate: "2023-03-10",
        booksShared: 23,
        exchangesCompleted: 18,
        rating: 4.6,
        featured: false,
        image: "img/team-2.jpg",
        bio: "Étudiant en littérature, je cherche toujours de nouvelles lectures intéressantes.",
        favoriteGenres: ["Poésie", "Théâtre", "Biographie"],
        lastActive: "2024-01-15",
        isOnline: true
    },
    {
        id: 4,
        name: "Sara Messaoudi",
        location: "Annaba",
        status: "moderateur",
        joinDate: "2021-12-05",
        booksShared: 156,
        exchangesCompleted: 142,
        rating: 4.9,
        featured: true,
        image: "img/team-3.jpg",
        bio: "Modératrice de la communauté et grande lectrice. J'aime aider les nouveaux membres.",
        favoriteGenres: ["Policier", "Thriller", "Roman"],
        lastActive: "2024-01-15",
        isOnline: true
    },
    {
        id: 5,
        name: "Youssef Hamidi",
        location: "Sétif",
        status: "actif",
        joinDate: "2023-06-18",
        booksShared: 34,
        exchangesCompleted: 28,
        rating: 4.5,
        featured: false,
        image: "img/team-2.jpg",
        bio: "Passionné de livres techniques et de développement personnel.",
        favoriteGenres: ["Développement personnel", "Technique", "Biographie"],
        lastActive: "2024-01-13",
        isOnline: false
    },
    {
        id: 6,
        name: "Nour El Houda",
        location: "Blida",
        status: "verifie",
        joinDate: "2022-11-30",
        booksShared: 67,
        exchangesCompleted: 54,
        rating: 4.7,
        featured: false,
        image: "img/team-3.jpg",
        bio: "Professeure de français, j'aime partager ma passion pour la littérature avec mes élèves et la communauté.",
        favoriteGenres: ["Littérature classique", "Roman contemporain", "Essai"],
        lastActive: "2024-01-15",
        isOnline: true
    },
    {
        id: 7,
        name: "Mohamed Larbi",
        location: "Batna",
        status: "actif",
        joinDate: "2023-09-12",
        booksShared: 19,
        exchangesCompleted: 15,
        rating: 4.4,
        featured: false,
        image: "img/team-2.jpg",
        bio: "Nouveau membre passionné de lecture. J'apprends encore mais j'aime déjà partager.",
        favoriteGenres: ["Aventure", "Histoire", "Roman"],
        lastActive: "2024-01-12",
        isOnline: false
    },
    {
        id: 8,
        name: "Amina Bensalem",
        location: "Djelfa",
        status: "premium",
        joinDate: "2022-05-25",
        booksShared: 89,
        exchangesCompleted: 76,
        rating: 4.8,
        featured: true,
        image: "img/team-3.jpg",
        bio: "Médecin de profession, lectrice passionnée. J'aime les livres qui m'ouvrent de nouveaux horizons.",
        favoriteGenres: ["Médecine", "Histoire", "Roman"],
        lastActive: "2024-01-15",
        isOnline: true
    }
];

// Fonction pour créer une carte d'utilisateur
function generateUserCard(user) {
    const userCard = document.createElement('div');
    userCard.className = "col-lg-4 col-md-6 mb-4";
    userCard.setAttribute('data-user-id', user.id);

    const statusBadge = user.status === 'verifie' ? 
        '<span class="user-badge verified">Vérifié</span>' : 
        user.status === 'premium' ? 
        '<span class="user-badge premium">Premium</span>' : 
        user.status === 'moderateur' ? 
        '<span class="user-badge moderator">Modérateur</span>' : 
        '<span class="user-badge active">Actif</span>';

    const onlineStatus = user.isOnline ? 
        '<span class="online-indicator"></span>' : '';

    const joinDate = new Date(user.joinDate).toLocaleDateString('fr-FR');
    const lastActive = new Date(user.lastActive).toLocaleDateString('fr-FR');

    userCard.innerHTML = `
        <div class="user-card wow fadeInUp" data-wow-delay="${(user.id * 0.1)}s">
            <div class="user-image-wrapper">
                <img class="user-image" src="${user.image}" alt="${user.name}">
                ${statusBadge}
                ${onlineStatus}
                <div class="user-overlay">
                    <div class="d-flex gap-2">
                        <button class="btn btn-light btn-sm rounded-circle view-profile-btn" data-user-id="${user.id}" title="Voir profil">
                            <i class="fas fa-user"></i>
                        </button>
                        <button class="btn btn-light btn-sm rounded-circle message-btn" data-user-id="${user.id}" title="Message">
                            <i class="fas fa-envelope"></i>
                        </button>
                        <button class="btn btn-light btn-sm rounded-circle follow-btn" data-user-id="${user.id}" title="Suivre">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="user-content">
                <h5 class="user-name mb-2">
                    <a href="#" class="text-decoration-none">${user.name}</a>
                </h5>
                <p class="user-location mb-2">
                    <i class="fas fa-map-marker-alt me-1"></i>${user.location}
                </p>
                <p class="user-bio mb-3">${user.bio}</p>
                <div class="user-meta mb-3">
                    <span class="user-genres">
                        <i class="fas fa-tags me-1"></i>${user.favoriteGenres.slice(0, 2).join(', ')}
                    </span>
                    <span class="user-join-date">
                        <i class="fas fa-calendar me-1"></i>Membre depuis ${joinDate}
                    </span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="user-rating">
                        ${generateStars(user.rating)}
                        <span class="rating-text">(${user.rating})</span>
                    </div>
                    <button class="btn btn-primary btn-sm rounded-pill contact-btn" data-user-id="${user.id}">
                        <i class="fas fa-comment me-1"></i>Contacter
                    </button>
                </div>
            </div>
        </div>
    `;

    return userCard;
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

// Fonction pour afficher les utilisateurs
function displayUsers(users = usersData, containerId = 'auteurs') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    
    users.forEach(user => {
        const userCard = generateUserCard(user);
        container.appendChild(userCard);
    });
}

// Fonction pour rechercher et filtrer les utilisateurs
function searchAndFilterUsers() {
    const searchQuery = document.querySelector('.search-user-input')?.value.toLowerCase() || '';
    const locationFilter = document.querySelector('.location-filter')?.value || '';
    const statusFilter = document.querySelector('.status-filter')?.value || '';

    const filteredUsers = usersData.filter(user => {
        const matchesSearch = !searchQuery || 
            user.name.toLowerCase().includes(searchQuery) ||
            user.bio.toLowerCase().includes(searchQuery) ||
            user.favoriteGenres.some(genre => genre.toLowerCase().includes(searchQuery));
        
        const matchesLocation = !locationFilter || user.location.toLowerCase() === locationFilter;
        const matchesStatus = !statusFilter || user.status === statusFilter;

        return matchesSearch && matchesLocation && matchesStatus;
    });

    displayUsers(filteredUsers);
    
    // Afficher un message si aucun résultat
    const container = document.getElementById('auteurs');
    if (filteredUsers.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center">
                <div class="no-results">
                    <i class="fas fa-search fa-3x text-muted mb-3"></i>
                    <h4>Aucun utilisateur trouvé</h4>
                    <p class="text-muted">Essayez de modifier vos critères de recherche</p>
                </div>
            </div>
        `;
    }
}

// Fonction pour afficher les contributeurs top
function displayTopContributors() {
    const topContributors = usersData.filter(user => user.featured);
    displayUsers(topContributors, 'top-contributors');
}

// Fonction pour charger plus d'utilisateurs
function loadMoreUsers() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Chargement...';
        loadMoreBtn.disabled = true;

        setTimeout(() => {
            // Ici on pourrait charger plus d'utilisateurs depuis une API
            showToast('Plus d\'utilisateurs chargés !', 'success');
            loadMoreBtn.innerHTML = '<i class="fas fa-plus me-2"></i>Charger plus d\'utilisateurs';
            loadMoreBtn.disabled = false;
        }, 2000);
    }
}

// Fonction pour afficher le profil d'un utilisateur
function showUserProfile(userId) {
    const user = usersData.find(u => u.id === userId);
    if (!user) return;

    // Ici on pourrait ouvrir une modal avec les détails
    showToast(`Profil de ${user.name}`, 'info');
    console.log('Utilisateur sélectionné:', user);
}

// Fonction pour envoyer un message
function sendMessage(userId) {
    const user = usersData.find(u => u.id === userId);
    if (!user) return;

    showToast(`Message envoyé à ${user.name}`, 'success');
    // Ici on pourrait ouvrir un formulaire de message
}

// Fonction pour suivre un utilisateur
function toggleFollow(userId) {
    const user = usersData.find(u => u.id === userId);
    if (!user) return;

    const followBtn = document.querySelector(`[data-user-id="${userId}"].follow-btn`);
    if (followBtn) {
        const icon = followBtn.querySelector('i');
        if (icon.classList.contains('fas')) {
            icon.classList.remove('fas');
            icon.classList.add('far');
            showToast('Ne suit plus', 'info');
        } else {
            icon.classList.remove('far');
            icon.classList.add('fas');
            showToast('Commence à suivre', 'success');
        }
    }
}

// Fonction pour contacter un utilisateur
function contactUser(userId) {
    const user = usersData.find(u => u.id === userId);
    if (!user) return;

    showToast(`Contact initié avec ${user.name}`, 'success');
    // Ici on pourrait ouvrir un formulaire de contact
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

    const userCards = document.querySelectorAll('.user-card');
    userCards.forEach(card => {
        observer.observe(card);
    });
}

// Fonction pour ajouter des effets de hover
function addHoverEffects() {
    const userCards = document.querySelectorAll('.user-card');
    
    userCards.forEach(card => {
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
        if (e.target.closest('.view-profile-btn')) {
            const userId = parseInt(e.target.closest('.view-profile-btn').getAttribute('data-user-id'));
            showUserProfile(userId);
        }
        
        if (e.target.closest('.message-btn')) {
            const userId = parseInt(e.target.closest('.message-btn').getAttribute('data-user-id'));
            sendMessage(userId);
        }
        
        if (e.target.closest('.follow-btn')) {
            const userId = parseInt(e.target.closest('.follow-btn').getAttribute('data-user-id'));
            toggleFollow(userId);
        }
        
        if (e.target.closest('.contact-btn')) {
            const userId = parseInt(e.target.closest('.contact-btn').getAttribute('data-user-id'));
            contactUser(userId);
        }
    });

    // Gestion du bouton "Charger plus"
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreUsers);
    }

    // Gestion de la recherche
    const searchInput = document.querySelector('.search-user-input');
    const searchBtn = document.querySelector('.search-user-btn');

    if (searchInput) {
        searchInput.addEventListener('input', searchAndFilterUsers);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchAndFilterUsers();
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', searchAndFilterUsers);
    }

    // Gestion des filtres
    const locationFilter = document.querySelector('.location-filter');
    const statusFilter = document.querySelector('.status-filter');

    if (locationFilter) {
        locationFilter.addEventListener('change', searchAndFilterUsers);
    }

    if (statusFilter) {
        statusFilter.addEventListener('change', searchAndFilterUsers);
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
    // Afficher les utilisateurs
    displayUsers();
    
    // Afficher les contributeurs top
    displayTopContributors();
    
    // Ajouter les fonctionnalités
    addScrollAnimations();
    addHoverEffects();
    handleClickEvents();
});

// Exposer les fonctions globalement
window.showToast = showToast;
window.searchAndFilterUsers = searchAndFilterUsers;
window.loadMoreUsers = loadMoreUsers;