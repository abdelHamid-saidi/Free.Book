// Variables globales
let selectedFile = null;
let isFormValid = false;

// Éléments du DOM
const form = document.getElementById('bookForm');
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('illustration');
const selectFileBtn = document.getElementById('selectFileBtn');
const imagePreview = document.getElementById('imagePreview');
const submitBtn = document.getElementById('submitBtn');

// Initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser toutes les fonctionnalités
    initializeForm();
    setupEventListeners();
    setupValidation();
});

// Initialisation du formulaire
function initializeForm() {
    // Ajouter des classes pour l'animation
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.animationDelay = `${index * 0.1}s`;
        group.classList.add('wow', 'fadeInUp');
    });
}

// Configuration des événements
function setupEventListeners() {
    // Gestion du drag & drop
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('drop', handleDrop);
    uploadArea.addEventListener('click', () => fileInput.click());
    
    // Gestion de la sélection de fichier
    fileInput.addEventListener('change', handleFileSelect);
    selectFileBtn.addEventListener('click', () => fileInput.click());
    
    // Gestion de la soumission du formulaire
    form.addEventListener('submit', handleFormSubmit);
    
    // Validation en temps réel
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', validateField);
        input.addEventListener('blur', validateField);
    });
}

// Gestion du drag & drop
function handleDragOver(e) {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
}

// Gestion de la sélection de fichier
function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        handleFile(file);
    }
}

// Traitement du fichier sélectionné
function handleFile(file) {
    // Validation du type de fichier
    if (!file.type.startsWith('image/')) {
        showToast('Veuillez sélectionner une image valide', 'error');
        return;
    }
    
    // Validation de la taille (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        showToast('L\'image doit faire moins de 5MB', 'error');
        return;
    }
    
    selectedFile = file;
    
    // Afficher la prévisualisation
    const reader = new FileReader();
    reader.onload = function(e) {
        imagePreview.innerHTML = `
            <div class="preview-container">
                <img src="${e.target.result}" alt="Aperçu" class="preview-image">
                <button type="button" class="btn btn-sm btn-danger remove-image" onclick="removeImage()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        imagePreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
    
    showToast('Image sélectionnée avec succès', 'success');
}

// Supprimer l'image
function removeImage() {
    selectedFile = null;
    fileInput.value = '';
    imagePreview.innerHTML = '';
    imagePreview.style.display = 'none';
    showToast('Image supprimée', 'info');
}

// Configuration de la validation
function setupValidation() {
    // Validation personnalisée pour les champs requis
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.addEventListener('input', () => {
            validateField(field);
            updateSubmitButton();
        });
    });
}

// Validation d'un champ
function validateField(event) {
    const field = event.target || event;
    const value = field.value.trim();
    const fieldName = field.name;
    
    // Supprimer les classes d'erreur précédentes
    field.classList.remove('is-valid', 'is-invalid');
    
    // Validation selon le type de champ
    let isValid = true;
    let errorMessage = '';
    
    switch (fieldName) {
        case 'titre':
            isValid = value.length >= 2 && value.length <= 200;
            errorMessage = 'Le titre doit contenir entre 2 et 200 caractères';
            break;
            
        case 'auteur':
            isValid = value.length >= 2 && value.length <= 100;
            errorMessage = 'Le nom de l\'auteur doit contenir entre 2 et 100 caractères';
            break;
            
        case 'editeur':
            isValid = value.length >= 2 && value.length <= 100;
            errorMessage = 'Le nom de l\'éditeur doit contenir entre 2 et 100 caractères';
            break;
            
        case 'description':
            isValid = value.length >= 10 && value.length <= 1000;
            errorMessage = 'La description doit contenir entre 10 et 1000 caractères';
            break;
            
        case 'propose_par':
            isValid = value.length >= 2 && value.length <= 50;
            errorMessage = 'Le nom doit contenir entre 2 et 50 caractères';
            break;
            
        case 'annee':
            if (value) {
                const year = parseInt(value);
                isValid = year >= 1800 && year <= new Date().getFullYear();
                errorMessage = 'L\'année doit être entre 1800 et ' + new Date().getFullYear();
            } else {
                isValid = true; // Champ optionnel
            }
            break;
            
        case 'genre':
        case 'langue':
            isValid = value !== '';
            errorMessage = 'Ce champ est obligatoire';
            break;
    }
    
    // Appliquer les classes de validation
    if (isValid) {
        field.classList.add('is-valid');
        field.classList.remove('is-invalid');
        clearFieldError(field);
    } else {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

// Afficher une erreur de champ
function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

// Effacer une erreur de champ
function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.invalid-feedback');
    if (existingError) {
        existingError.remove();
    }
}

// Validation complète du formulaire
function validateForm() {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    // Validation de l'état du livre
    const etatRadios = form.querySelectorAll('input[name="etat"]');
    const etatSelected = Array.from(etatRadios).some(radio => radio.checked);
    
    if (!etatSelected) {
        isValid = false;
        showToast('Veuillez sélectionner l\'état du livre', 'error');
    }
    
    // Validation des conditions
    const conditions = document.getElementById('conditions');
    if (!conditions.checked) {
        isValid = false;
        showToast('Veuillez accepter les conditions', 'error');
    }
    
    return isValid;
}

// Mettre à jour le bouton de soumission
function updateSubmitButton() {
    const isValid = validateForm();
    
    if (isValid) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-plus me-2"></i>Ajouter le livre';
    } else {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle me-2"></i>Vérifiez le formulaire';
    }
}

// Gestion de la soumission du formulaire
function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        showToast('Veuillez corriger les erreurs dans le formulaire', 'error');
        return;
    }
    
    // Afficher l'état de chargement
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Ajout en cours...';
    
    // Simuler l'envoi (remplacer par un vrai appel API)
    setTimeout(() => {
        // Préparer les données du formulaire
        const formData = new FormData(form);
        
        // Ajouter l'image si sélectionnée
        if (selectedFile) {
            formData.append('image', selectedFile);
        }
        
        // Simuler l'envoi réussi
        showToast('Livre ajouté avec succès !', 'success');
        
        // Réinitialiser le formulaire
        resetForm();
        
        // Rediriger vers la page des livres après 2 secondes
        setTimeout(() => {
            window.location.href = '/livre';
        }, 2000);
        
    }, 2000);
}

// Réinitialiser le formulaire
function resetForm() {
    form.reset();
    selectedFile = null;
    imagePreview.innerHTML = '';
    imagePreview.style.display = 'none';
    
    // Réinitialiser les classes de validation
    const fields = form.querySelectorAll('.form-control, .form-select');
    fields.forEach(field => {
        field.classList.remove('is-valid', 'is-invalid');
    });
    
    // Réinitialiser le bouton
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-plus me-2"></i>Ajouter le livre';
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

// Fonctions exposées globalement
window.removeImage = removeImage;
window.showToast = showToast;