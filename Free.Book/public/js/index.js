
// Fonction pour créer une carte de livre moderne
function generateBookCard(index, imageUrl, isExchanged = false) {
    const titles = [
        "Le Petit Prince", "1984", "Le Seigneur des Anneaux", "Harry Potter", 
        "Don Quichotte", "Les Misérables", "Madame Bovary", "L'Étranger",
        "Le Comte de Monte-Cristo", "Les Fleurs du Mal", "Germinal", "Notre-Dame de Paris"
    ];
    
    const authors = [
        "Antoine de Saint-Exupéry", "George Orwell", "J.R.R. Tolkien", "J.K. Rowling",
        "Miguel de Cervantes", "Victor Hugo", "Gustave Flaubert", "Albert Camus",
        "Alexandre Dumas", "Charles Baudelaire", "Émile Zola", "Victor Hugo"
    ];
    
    const publishers = [
        "Gallimard", "Penguin Books", "HarperCollins", "Bloomsbury",
        "Alianza Editorial", "Hachette", "Flammarion", "Gallimard",
        "Le Livre de Poche", "Gallimard", "Le Livre de Poche", "Gallimard"
    ];
    
    const proposers = [
        "Marie D.", "Jean P.", "Sophie L.", "Pierre M.",
        "Claire R.", "Thomas B.", "Emma S.", "Lucas G.",
        "Julie M.", "Antoine F.", "Camille D.", "Nicolas L."
    ];
    
    const descriptions = [
        "Un conte poétique et philosophique sur l'amitié et l'amour.",
        "Une dystopie visionnaire sur le totalitarisme et la surveillance.",
        "Une épopée fantastique sur le pouvoir et la corruption.",
        "L'histoire d'un jeune sorcier découvrant un monde magique.",
        "Les aventures d'un chevalier errant dans l'Espagne du XVIIe siècle.",
        "Un roman historique sur la rédemption et la justice sociale.",
        "L'histoire tragique d'Emma Bovary et de ses aspirations romantiques.",
        "Un roman existentialiste sur l'absurdité de la vie.",
        "Une histoire de vengeance et de rédemption dans la France du XIXe siècle.",
        "Un recueil de poèmes révolutionnaires dans la littérature française.",
        "Un roman naturaliste sur la condition ouvrière au XIXe siècle.",
        "L'histoire tragique de Quasimodo et d'Esmeralda dans le Paris médiéval."
    ];

    const title = titles[index % titles.length];
    const author = authors[index % authors.length];
    const publisher = publishers[index % publishers.length];
    const proposer = proposers[index % proposers.length];
    const description = descriptions[index % descriptions.length];

    const bookCard = document.createElement('div');
    bookCard.className = "col-lg-3 col-md-4 col-sm-6 mb-4";

    bookCard.innerHTML = `
        <div class="book-card wow fadeInUp" data-wow-delay="${(index * 0.1)}s">
            <div class="book-image position-relative">
                <img class="img-fluid" src="${imageUrl}" alt="${title}">
                <div class="book-overlay">
                    <div class="d-flex gap-2">
                        <a class="btn btn-light btn-sm rounded-circle" href="#" title="Voir détails">
                            <i class="fas fa-eye"></i>
                        </a>
                        <a class="btn btn-light btn-sm rounded-circle" href="#" title="Échanger">
                            <i class="fas fa-exchange-alt"></i>
                        </a>
                    </div>
                </div>
                ${isExchanged ? '<span class="book-badge">Échangé</span>' : '<span class="book-badge">Disponible</span>'}
            </div>
            <div class="book-content">
                <h5 class="book-title mb-2">
                    <a href="#" class="text-decoration-none">${title}</a>
                </h5>
                <p class="book-author mb-2">
                    ${author}
                </p>
                <p class="book-publisher mb-2">
                    ${publisher}
                </p>
                <p class="book-proposer mb-3">
                    Proposé par ${proposer}
                </p>
                <p class="book-description">${description}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <div class="book-rating">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="far fa-star text-warning"></i>
                        <span class="ms-1 text-muted">(4.2)</span>
                    </div>
                    <button class="btn btn-primary btn-sm rounded-pill">
                        <i class="fas fa-heart me-1"></i>Intéressé
                    </button>
                </div>
            </div>
        </div>
    `;

    return bookCard;
}

// Fonction pour animer les compteurs de statistiques
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-count'));
        const duration = 2000; // 2 secondes
        const step = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target % 1 === 0) {
                counter.textContent = Math.floor(current);
            } else {
                counter.textContent = current.toFixed(1);
            }
        }, 16);
    });
}

// Fonction pour observer les éléments et déclencher les animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Si c'est la section des statistiques, animer les compteurs
                if (entry.target.classList.contains('stats-section')) {
                    animateCounters();
                }
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observer les sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Fonction pour ajouter des effets de parallaxe au scroll
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Fonction pour ajouter des effets de hover sur les cartes
function addHoverEffects() {
    const bookCards = document.querySelectorAll('.book-card');
    
    bookCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Fonction pour ajouter des tooltips personnalisés
function addCustomTooltips() {
    const tooltipElements = document.querySelectorAll('[title]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.textContent = this.getAttribute('title');
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 12px;
                z-index: 1000;
                pointer-events: none;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.custom-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Fonction pour gérer la navbar au scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Ajouter la classe scrolled quand on scroll
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Masquer/afficher la navbar au scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Fonction pour gérer la recherche
function handleSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        // Recherche au clic sur le bouton
        searchBtn.addEventListener('click', () => {
            performSearch(searchInput.value);
        });
        
        // Recherche à la pression de Entrée
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
        
        // Recherche en temps réel
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            if (query.length > 2) {
                // Ici on pourrait ajouter une recherche en temps réel
                console.log('Recherche en temps réel:', query);
            }
        });
    }
}

// Fonction pour effectuer la recherche
function performSearch(query) {
    if (query.trim()) {
        showToast(`Recherche pour: "${query}"`, 'info');
        // Ici on pourrait rediriger vers une page de résultats
        console.log('Recherche effectuée:', query);
    } else {
        showToast('Veuillez entrer un terme de recherche', 'error');
    }
}

// Fonction pour gérer les liens actifs de la navbar
function handleActiveNavLinks() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '/' && href === '/')) {
            link.classList.add('active');
        }
    });
}

// Fonction pour ajouter des animations aux éléments de la navbar
function addNavbarAnimations() {
    const navbarElements = document.querySelectorAll('.navbar-nav .nav-link, .navbar-brand');
    
    navbarElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('animate__animated', 'animate__fadeInDown');
    });
}

// Fonction pour gérer le menu mobile
function handleMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });
        
        // Fermer le menu quand on clique sur un lien
        const mobileLinks = navbarCollapse.querySelectorAll('.nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }
}

// Initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    const url1 = "img/livre-1.jpg";
    const url2 = "img/livre-2.jpg";
    
    const parentElement1 = document.querySelector('#rajoutes');
    const parentElement2 = document.querySelector('#echanges');
    
    // Générer les cartes de livres pour les derniers ajoutés
    for (let i = 0; i < 8; i++) {
        const bookCard1 = generateBookCard(i, url1, false);
        parentElement1.appendChild(bookCard1);
    }
    
    // Générer les cartes de livres pour les derniers échangés
    for (let i = 0; i < 8; i++) {
        const bookCard2 = generateBookCard(i, url2, true);
        parentElement2.appendChild(bookCard2);
    }
    
    // Initialiser les fonctionnalités
    observeElements();
    addParallaxEffect();
    addHoverEffects();
    addCustomTooltips();
    handleNavbarScroll();
    handleSearch();
    handleActiveNavLinks();
    addNavbarAnimations();
    handleMobileMenu();
    
    // Ajouter un effet de scroll smooth pour les liens internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Fonction pour ajouter des notifications toast
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
    
    // Animer l'entrée
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Exposer la fonction showToast globalement pour l'utiliser dans les événements
window.showToast = showToast;
