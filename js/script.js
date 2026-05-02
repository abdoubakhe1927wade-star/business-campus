// Simulation de base de données initiale
const INITIAL_PRODUCTS = [
    { id: 1, title: "MacBook Air M1 2020", price: 475000, category: "Électronique", seller: "Marc Koffi", level: "Master 1", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80", desc: "Parfait état, batterie 98%. Utilisé uniquement pour les études de dev. Vendu avec chargeur original et housse de protection." },
    { id: 2, title: "Livre Macroéconomie L2", price: 6000, category: "Livres / Études", seller: "Sarah Diallo", level: "Licence 2", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80", desc: "Livre complet de Grégory Mankiw. Très utile pour les partiels du S2. Aucune annotation." },
    { id: 3, title: "Sac à Dos North Face", price: 20000, category: "Vêtements", seller: "Jean-Eudes", level: "Licence 3", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80", desc: "Imperméable, compartiment laptop 15 pouces. Idéal pour les longues journées au campus." },
    { id: 4, title: "Calculatrice TI-84 Plus", price: 38000, category: "Électronique", seller: "Marie Curie", level: "Licence 1", image: "https://images.unsplash.com/photo-1574607383476-f517f220d308?auto=format&fit=crop&w=800&q=80", desc: "Calculatrice graphique indispensable pour les maths et stats. État neuf." },
    { id: 5, title: "Air Jordan 1 Low", price: 55000, category: "Vêtements", seller: "Abdou Karim", level: "Master 2", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", desc: "Taille 42. Portées une seule fois pour une remise de diplôme. Authentiques." },
    { id: 6, title: "AirPods Pro Gen 2", price: 95000, category: "Électronique", seller: "Fanta Traoré", level: "Licence 2", image: "https://images.unsplash.com/photo-1588423770119-945521400404?auto=format&fit=crop&w=800&q=80", desc: "Réduction de bruit incroyable. Idéal pour réviser à la bibliothèque." },
    { id: 7, title: "iPad Air + Apple Pencil", price: 295000, category: "Électronique", seller: "Paul B.", level: "Master 1", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80", desc: "Le duo parfait pour prendre ses notes en cours. Très fluide." },
    { id: 8, title: "Soutien Maths / Python", price: 8000, category: "Services", seller: "Dr. Ahmed", level: "Doctorat", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80", desc: "Cours particuliers 2h/semaine. Je vous aide à valider vos modules de programmation." },
    { id: 9, title: "iPhone 13 Midnight", price: 360000, category: "Électronique", seller: "Ismaël", level: "Licence 3", image: "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?auto=format&fit=crop&w=800&q=80", desc: "128GB. Toujours protégé par une vitre et une coque. Batterie 92%." },
    { id: 10, title: "Set de 50 Stylos Uni-ball", price: 4000, category: "Livres / Études", seller: "Cynthia", level: "Master 1", image: "https://images.unsplash.com/photo-1513475382585-d06e58bc0e05?auto=format&fit=crop&w=800&q=80", desc: "Stylos à encre liquide. Parfaits pour écrire vite pendant les cours magistraux." },
    { id: 11, title: "Veste Varsity Campus", price: 15000, category: "Vêtements", seller: "Boutique Campus", level: "Staff", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80", desc: "Veste officielle Business Campus. Édition Limitée 2026." },
    { id: 12, title: "Moniteur Dell 24 pouces", price: 72000, category: "Électronique", seller: "Moussa", level: "Licence 2", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80", desc: "Full HD, idéal pour étendre son écran de laptop et travailler confortablement." },
    { id: 13, title: "Guitare Fender Squier", price: 125000, category: "Autres", seller: "Lucas", level: "Licence 3", image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&w=800&q=80", desc: "Guitare électrique pour débutant. Vendue avec petit ampli et câble." },
    { id: 14, title: "Lampe LED Intelligente", price: 12000, category: "Électronique", seller: "Alice", level: "Licence 1", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=800&q=80", desc: "Contrôlable via smartphone. Idéal pour l'ambiance de bureau." },
    { id: 15, title: "Pack Cahiers Oxford (x10)", price: 6500, category: "Livres / Études", seller: "Boutique Étudiante", level: "Licence 1", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80", desc: "Qualité de papier supérieure. Ne traverse pas." }
];

// État de l'application
// On force la mise à jour des prix si c'est la version initiale stockée
let products = JSON.parse(localStorage.getItem('campus_products'));
if (!products || (products.length > 0 && (products[0].price === 550000 || !products[0].price))) {
    products = INITIAL_PRODUCTS;
    localStorage.setItem('campus_products', JSON.stringify(products));
}
let currentUser = JSON.parse(localStorage.getItem('campus_user')) || null;
let cart = JSON.parse(localStorage.getItem('campus_cart')) || [];

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}

// Initialisation
window.onload = () => {
    renderProducts(products, 'products-grid');
    updateUIForAuth();
    updateCartUI();
    
    document.getElementById('register-form').onsubmit = handleRegister;
    document.getElementById('login-form').onsubmit = handleLogin;
    document.getElementById('publish-form').onsubmit = handlePublish;
    
    document.getElementById('main-search').onkeyup = (e) => { if (e.key === 'Enter') performSearch(); };
};

// Fonctions de Navigation
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden-section'));
    document.getElementById(`${sectionId}-section`).classList.remove('hidden-section');
    
    const hero = document.getElementById('hero-section');
    if (sectionId === 'home') hero.classList.remove('hidden-section');
    else hero.classList.add('hidden-section');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    menu.classList.toggle('translate-x-full');
    if (menu.classList.contains('translate-x-full')) {
        icon.className = 'fas fa-bars text-2xl';
        document.body.style.overflow = 'auto';
    } else {
        icon.className = 'fas fa-times text-2xl';
        document.body.style.overflow = 'hidden';
    }
}

function checkAuth(targetSection) {
    if (!currentUser) {
        notify("Veuillez vous connecter pour vendre vos articles", "warning");
        showSection('login');
    } else {
        showSection(targetSection);
    }
}

// Rendu des produits
function renderProducts(productsList, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    if (productsList.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-20 bg-white rounded-3xl shadow-inner border border-dashed border-gray-200">
            <i class="fas fa-search text-5xl text-gray-200 mb-4"></i>
            <p class="text-gray-400 font-bold">Aucun article trouvé dans cette catégorie</p>
        </div>`;
        return;
    }

    productsList.forEach(p => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-3xl shadow-sm overflow-hidden product-card border border-gray-100 flex flex-col cursor-pointer group';
        card.onclick = () => openProductModal(p);
        card.innerHTML = `
            <div class="relative h-60 overflow-hidden">
                <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-blue-600 px-4 py-2 rounded-xl text-sm font-black shadow-xl">
                    ${p.price.toLocaleString()} CFA
                </div>
                <div class="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
                    ${p.category}
                </div>
            </div>
            <div class="p-6 flex-grow flex flex-col">
                <h3 class="font-black text-gray-900 mb-2 text-lg leading-tight group-hover:text-blue-600 transition">${p.title}</h3>
                <p class="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">${p.desc}</p>
                <div class="flex items-center justify-between pt-5 border-t border-gray-50">
                    <div class="flex items-center">
                        <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mr-3 border border-blue-100">
                            <i class="fas fa-user-graduate text-sm"></i>
                        </div>
                        <div>
                            <p class="font-black text-gray-900 text-[11px] leading-none mb-1">${p.seller}</p>
                            <p class="text-[10px] text-gray-400 font-bold uppercase tracking-wide">${p.level}</p>
                        </div>
                    </div>
                    <div class="flex space-x-2">
                        <button onclick="event.stopPropagation(); addToCart(${p.id})" class="w-10 h-10 bg-gray-50 text-gray-400 hover:bg-blue-600 hover:text-white rounded-xl transition flex items-center justify-center">
                            <i class="fas fa-cart-plus text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Filtres par catégorie
function filterCategory(cat) {
    document.querySelectorAll('.category-pill').forEach(p => {
        p.classList.remove('active');
        if(p.innerText === (cat === 'All' ? 'Tous' : (cat === 'Livres / Études' ? 'Livres' : cat))) p.classList.add('active');
    });
    
    const filtered = cat === 'All' ? products : products.filter(p => p.category === cat);
    renderProducts(filtered, 'products-grid');
}

// Modale Produit
function openProductModal(p) {
    const modal = document.getElementById('product-modal');
    document.getElementById('modal-img').src = p.image;
    document.getElementById('modal-title').innerText = p.title;
    document.getElementById('modal-price').innerText = `${p.price.toLocaleString()} CFA`;
    document.getElementById('modal-desc').innerText = p.desc;
    document.getElementById('modal-cat').innerText = p.category;
    document.getElementById('modal-seller').innerText = p.seller;
    document.getElementById('modal-level').innerText = p.level;
    
    document.getElementById('modal-add-cart').onclick = () => addToCart(p.id);
    document.getElementById('modal-contact').onclick = () => simulateContact(p.seller);
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('product-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Logique Auth
function handleRegister(e) {
    e.preventDefault();
    const newUser = {
        lastname: document.getElementById('reg-lastname').value,
        firstname: document.getElementById('reg-firstname').value,
        phone: document.getElementById('reg-phone').value,
        class: document.getElementById('reg-class').value,
        level: document.getElementById('reg-level').value
    };
    currentUser = newUser;
    localStorage.setItem('campus_user', JSON.stringify(newUser));
    updateUIForAuth();
    notify(`Bienvenue ${newUser.firstname} ! Inscription réussie.`, "success");
    showSection('home');
}

function handleLogin(e) {
    e.preventDefault();
    currentUser = { firstname: "Étudiant", lastname: "Demo", phone: "000000", class: "Générale", level: "Licence" };
    localStorage.setItem('campus_user', JSON.stringify(currentUser));
    updateUIForAuth();
    notify("Connexion réussie !", "success");
    showSection('home');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('campus_user');
    updateUIForAuth();
    document.getElementById('user-dropdown').classList.add('hidden');
    notify("Déconnexion effectuée", "info");
    showSection('home');
}

function updateUIForAuth() {
    const authBtns = document.getElementById('auth-buttons');
    const userProfile = document.getElementById('user-profile');
    const userNameDisplay = document.getElementById('user-name-display');
    
    const authBtnsMobile = document.getElementById('auth-buttons-mobile');
    const userProfileMobile = document.getElementById('user-profile-mobile');
    const userNameMobile = document.getElementById('user-name-mobile');

    if (currentUser) {
        authBtns.classList.add('hidden');
        userProfile.classList.remove('hidden');
        userNameDisplay.innerText = currentUser.firstname;

        authBtnsMobile.classList.add('hidden');
        userProfileMobile.classList.remove('hidden');
        userNameMobile.innerText = currentUser.firstname;
    } else {
        authBtns.classList.remove('hidden');
        userProfile.classList.add('hidden');

        authBtnsMobile.classList.remove('hidden');
        userProfileMobile.classList.add('hidden');
    }
}

function toggleUserMenu() {
    document.getElementById('user-dropdown').classList.toggle('hidden');
}

// Logique Panier
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    sidebar.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('campus_cart', JSON.stringify(cart));
    updateCartUI();
    notify(`${product.title} ajouté au panier !`, "success");
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('campus_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const count = document.getElementById('cart-count');
    const countMobile = document.getElementById('cart-count-mobile');
    const countHeader = document.getElementById('cart-items-count');
    const content = document.getElementById('cart-content');
    const totalEl = document.getElementById('cart-total');
    
    if (count) count.innerText = cart.length;
    if (countMobile) countMobile.innerText = cart.length;
    if (countHeader) countHeader.innerText = `(${cart.length})`;
    
    if (cart.length === 0) {
        content.innerHTML = `<div class="text-center py-20 text-gray-400"><i class="fas fa-shopping-basket text-6xl mb-4 opacity-20"></i><p class="font-bold">Votre panier est vide</p></div>`;
        totalEl.innerText = "0 CFA";
        return;
    }

    let total = 0;
    content.innerHTML = '';
    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl animate-fade-in';
        div.innerHTML = `
            <img src="${item.image}" class="w-16 h-16 rounded-xl object-cover shadow-sm">
            <div class="flex-grow">
                <h4 class="font-black text-gray-900 text-sm line-clamp-1">${item.title}</h4>
                <p class="text-blue-600 font-bold text-xs">${item.price.toLocaleString()} CFA</p>
            </div>
            <button onclick="removeFromCart(${index})" class="text-gray-300 hover:text-red-500 transition p-2"><i class="fas fa-trash-alt"></i></button>
        `;
        content.appendChild(div);
    });
    totalEl.innerText = `${total.toLocaleString()} CFA`;
}

function simulateCheckout() {
    if (cart.length === 0) return notify("Votre panier est vide !", "warning");
    
    // Calculer le total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('payment-total').innerText = `${total.toLocaleString()} CFA`;
    
    // Afficher le modal de paiement
    document.getElementById('payment-modal').classList.remove('hidden');
    document.getElementById('payment-methods').classList.remove('hidden');
    document.getElementById('payment-simulation').classList.add('hidden');
    
    toggleCart(); // Fermer le panier
}

function closePaymentModal() {
    document.getElementById('payment-modal').classList.add('hidden');
}

function processPayment(method) {
    const methodsDiv = document.getElementById('payment-methods');
    const simDiv = document.getElementById('payment-simulation');
    const spinner = document.getElementById('sim-loader');
    const check = document.getElementById('sim-check');
    const title = document.getElementById('sim-title');
    const msg = document.getElementById('sim-msg');
    
    methodsDiv.classList.add('hidden');
    simDiv.classList.remove('hidden');
    spinner.classList.remove('hidden');
    check.classList.add('hidden');
    
    const methodName = method === 'wave' ? 'Wave' : 'Orange Money';
    title.innerText = `Connexion à ${methodName}...`;
    msg.innerText = "Préparation de la demande de paiement...";

    // Étape 1 : Demande de paiement
    setTimeout(() => {
        title.innerText = "Validation requise";
        msg.innerText = `Veuillez confirmer le paiement sur votre application ${methodName}.`;
        
        // Étape 2 : Simulation de la validation utilisateur
        setTimeout(() => {
            spinner.classList.add('hidden');
            check.classList.remove('hidden');
            title.innerText = "Paiement Réussi !";
            msg.innerText = "Merci pour votre achat sur Business Campus.";
            
            // Étape 3 : Finalisation
            setTimeout(() => {
                cart = [];
                localStorage.setItem('campus_cart', JSON.stringify(cart));
                updateCartUI();
                closePaymentModal();
                notify("Commande validée ! Un e-mail de confirmation vous a été envoyé.", "success");
            }, 2500);
        }, 3000);
    }, 2000);
}

// Logique Publication
function handlePublish(e) {
    e.preventDefault();
    const newProduct = {
        id: Date.now(),
        title: document.getElementById('pub-title').value,
        price: parseInt(document.getElementById('pub-price').value),
        category: document.getElementById('pub-category').value,
        desc: document.getElementById('pub-desc').value,
        seller: `${currentUser.firstname} ${currentUser.lastname}`,
        level: currentUser.level,
        image: document.getElementById('pub-image').value || `https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80`
    };
    products.unshift(newProduct);
    localStorage.setItem('campus_products', JSON.stringify(products));
    renderProducts(products, 'products-grid');
    notify("Annonce publiée ! Vos camarades peuvent maintenant la voir.", "success");
    showSection('home');
    document.getElementById('publish-form').reset();
}

function randomizeImage() {
    const terms = ['laptop', 'book', 'clothing', 'phone', 'camera', 'furniture'];
    const term = terms[Math.floor(Math.random() * terms.length)];
    document.getElementById('pub-image').value = `https://images.unsplash.com/photo-${Math.floor(Math.random()*1000000)}?q=80&w=800&auto=format&fit=crop&query=${term}`;
}

// Recherche
function performSearch() {
    const query = (document.getElementById('search-input').value || document.getElementById('main-search').value).toLowerCase();
    const category = document.getElementById('search-cat').value;
    
    const filtered = products.filter(p => {
        const matchesQuery = p.title.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query);
        const matchesCat = category === 'All' || p.category === category;
        return matchesQuery && matchesCat;
    });
    
    showSection('search');
    document.getElementById('search-input').value = query;
    document.getElementById('search-cat').value = category;
    renderProducts(filtered, 'search-results');
}

// Utilitaires
function notify(msg, type) {
    const toast = document.getElementById('notification');
    const msgEl = document.getElementById('notification-msg');
    const iconEl = document.getElementById('notif-icon');
    msgEl.innerText = msg;
    
    iconEl.className = `w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 `;
    if(type === 'success') { iconEl.classList.add('bg-green-500'); iconEl.innerHTML = '<i class="fas fa-check"></i>'; }
    else if(type === 'warning') { iconEl.classList.add('bg-orange-500'); iconEl.innerHTML = '<i class="fas fa-exclamation"></i>'; }
    else { iconEl.classList.add('bg-blue-600'); iconEl.innerHTML = '<i class="fas fa-info"></i>'; }

    toast.classList.remove('translate-y-32');
    setTimeout(() => { toast.classList.add('translate-y-32'); }, 4000);
}

function simulateContact(seller) {
    notify(`Lancement de WhatsApp pour contacter ${seller}...`, "info");
}
