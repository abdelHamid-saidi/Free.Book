// Footer JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser toutes les fonctionnalités
    initializeFooter();
    setupNewsletter();
    setupBackToTop();
    animateStats();
});

// Initialisation du footer
function initializeFooter() {
    // Mettre à jour l'année courante
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Ajouter des animations aux liens sociaux
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Ajouter des animations aux liens du footer
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = 'var(--primary)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '';
        });
    });
}

// Configuration de la newsletter
function setupNewsletter() {
    const newsletterEmail = document.getElementById('newsletterEmail');
    const newsletterBtn = document.getElementById('newsletterBtn');
    
    if (newsletterEmail && newsletterBtn) {
        // Validation de l'email en temps réel
        newsletterEmail.addEventListener('input', function() {
            const email = this.value.trim();
            const isValid = validateEmail(email);
            
            if (isValid) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                newsletterBtn.disabled = false;
            } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
                newsletterBtn.disabled = true;
            }
        });
        
        // Gestion de la soumission
        newsletterBtn.addEventListener('click', function() {
            const email = newsletterEmail.value.trim();
            
            if (validateEmail(email)) {
                subscribeToNewsletter(email);
            } else {
                showToast('Veuillez entrer une adresse email valide', 'error');
            }
        });
        
        // Soumission avec Enter
        newsletterEmail.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                newsletterBtn.click();
            }
        });
    }
}

// Validation d'email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Inscription à la newsletter
function subscribeToNewsletter(email) {
    const newsletterBtn = document.getElementById('newsletterBtn');
    const originalText = newsletterBtn.innerHTML;
    
    // Afficher l'état de chargement
    newsletterBtn.disabled = true;
    newsletterBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    
    // Simuler l'envoi (remplacer par un vrai appel API)
    setTimeout(() => {
        showToast('Inscription à la newsletter réussie !', 'success');
        
        // Réinitialiser le formulaire
        document.getElementById('newsletterEmail').value = '';
        document.getElementById('newsletterEmail').classList.remove('is-valid', 'is-invalid');
        
        // Réinitialiser le bouton
        newsletterBtn.disabled = false;
        newsletterBtn.innerHTML = originalText;
        
    }, 1500);
}

// Configuration du bouton "Retour en haut"
function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // Afficher/masquer le bouton selon le scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Gestion du clic
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Animation au hover
        backToTopBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        backToTopBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
}

// Animation des statistiques
function animateStats() {
    const stats = [
        { element: 'booksCount', target: 1247 },
        { element: 'usersCount', target: 3456 },
        { element: 'exchangesCount', target: 2156 },
        { element: 'authorsCount', target: 150 }
    ];
    
    // Observer pour déclencher l'animation quand les stats sont visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => {
                    animateCounter(stat.element, stat.target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const footerStats = document.querySelector('.footer-stats');
    if (footerStats) {
        observer.observe(footerStats);
    }
}

// Animation d'un compteur
function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Fonction pour afficher des notifications toast (si pas déjà définie)
if (typeof showToast === 'undefined') {
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
}