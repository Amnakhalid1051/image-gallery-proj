// ============================================
// ===== DATA WITH PERFECT CATEGORY-SPECIFIC IMAGES =====
// ============================================

const collectionsData = [
    { 
        title: 'Nature', 
        count: '250+ Photos', 
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop', 
        category: 'Nature' 
    },
    { 
        title: 'Travel', 
        count: '180+ Photos', 
        img: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop', 
        category: 'Travel' 
    },
    { 
        title: 'Food', 
        count: '300+ Photos', 
        img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop', 
        category: 'Food' 
    },
    { 
        title: 'City', 
        count: '200+ Photos', 
        img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop', 
        category: 'City' 
    }
];

const categoriesData = [
    { icon: 'fa-mountain-sun', name: 'Nature' },
    { icon: 'fa-plane', name: 'Travel' },
    { icon: 'fa-utensils', name: 'Food' },
    { icon: 'fa-city', name: 'City' },
    { icon: 'fa-paw', name: 'Animals' },
    { icon: 'fa-car', name: 'Cars' },
    { icon: 'fa-tree', name: 'Forest' },
    { icon: 'fa-water', name: 'Ocean' },
    { icon: 'fa-user', name: 'Portrait' },
    { icon: 'fa-building', name: 'Architecture' }
];

// ============================================
// ===== PHOTOS DATA - ALL IMAGES FIXED =====
// ============================================

let photosData = [
    // ===== NATURE CATEGORY =====
    { 
        id: 1,
        title: 'Mountain Lake', 
        photographer: 'Sarah Khan', 
        category: 'Nature', 
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop' 
    },
    { 
        id: 2,
        title: 'Mountain Valley', 
        photographer: 'Robert Chen', 
        category: 'Nature', 
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop' 
    },
    { 
        id: 3,
        title: 'Green Nature', 
        photographer: 'Emma Green', 
        category: 'Nature', 
        img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop' 
    },

    // ===== TRAVEL CATEGORY =====
    { 
        id: 4,
        title: 'Tropical Beach', 
        photographer: 'Ahmed Ali', 
        category: 'Travel', 
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop' 
    },
    { 
        id: 5,
        title: 'Street Market', 
        photographer: 'Sophia Lee', 
        category: 'Travel', 
        img: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&h=400&fit=crop' 
    },
    { 
        id: 6,
        title: 'Travel Adventure', 
        photographer: 'Mike Johnson', 
        category: 'Travel', 
        img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop' 
    },

    // ===== FOOD CATEGORY =====
    { 
        id: 7,
        title: 'Gourmet Burger', 
        photographer: 'Maria Garcia', 
        category: 'Food', 
        img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop' 
    },
    { 
        id: 8,
        title: 'Sushi Platter', 
        photographer: 'Hiro Tanaka', 
        category: 'Food', 
        img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop' 
    },
    { 
        id: 9,
        title: 'Healthy Salad', 
        photographer: 'Lisa Chen', 
        category: 'Food', 
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop' 
    },

    // ===== CITY CATEGORY =====
    { 
        id: 10,
        title: 'Night Skyline', 
        photographer: 'John Smith', 
        category: 'City', 
        img: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop' 
    },
    { 
        id: 11,
        title: 'City at Dusk', 
        photographer: 'Oliver Brown', 
        category: 'City', 
        img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop' 
    },
    { 
        id: 12,
        title: 'Urban Life', 
        photographer: 'Anna Wilson', 
        category: 'City', 
        img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop' 
    },

    // ===== FOREST CATEGORY =====
    { 
        id: 13,
        title: 'Misty Forest', 
        photographer: 'Emma Watson', 
        category: 'Forest', 
        img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop' 
    },
    { 
        id: 14,
        title: 'Forest Trail', 
        photographer: 'James Wilson', 
        category: 'Forest', 
        img: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop' 
    },
    // ===== DEEP WOODS - FIXED (Pexels) =====
    { 
        id: 15,
        title: 'Deep Woods', 
        photographer: 'David Miller', 
        category: 'Forest', 
        img: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?w=600&h=400&fit=crop' 
    },

    // ===== ANIMALS CATEGORY =====
    { 
        id: 16,
        title: 'African Elephant', 
        photographer: 'Lisa Wang', 
        category: 'Animals', 
        img: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&h=400&fit=crop' 
    },
    { 
        id: 17,
        title: 'Cute Panda', 
        photographer: 'Chen Wei', 
        category: 'Animals', 
        img: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&h=400&fit=crop' 
    },
    { 
        id: 18,
        title: 'Wild Tiger', 
        photographer: 'Raj Singh', 
        category: 'Animals', 
        img: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600&h=400&fit=crop' 
    },

    // ===== CARS CATEGORY =====
    { 
        id: 19,
        title: 'Luxury Sports Car', 
        photographer: 'David Kim', 
        category: 'Cars', 
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop' 
    },
    { 
        id: 20,
        title: 'Classic Vintage', 
        photographer: 'Tom Harris', 
        category: 'Cars', 
        img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop' 
    },
    { 
        id: 21,
        title: 'Supercar', 
        photographer: 'Chris Evans', 
        category: 'Cars', 
        img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop' 
    },

    // ===== OCEAN CATEGORY =====
    { 
        id: 22,
        title: 'Ocean Waves', 
        photographer: 'Michael Brown', 
        category: 'Ocean', 
        img: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&h=400&fit=crop' 
    },
    { 
        id: 23,
        title: 'Sunset Ocean', 
        photographer: 'Sarah Connor', 
        category: 'Ocean', 
        img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop' 
    },
    { 
        id: 24,
        title: 'Deep Sea', 
        photographer: 'James Cameron', 
        category: 'Ocean', 
        img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop' 
    },

    // ===== ARCHITECTURE CATEGORY =====
    { 
        id: 25,
        title: 'Modern Building', 
        photographer: 'Emily Davis', 
        category: 'Architecture', 
        img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop' 
    },
    { 
        id: 26,
        title: 'Historic Bridge', 
        photographer: 'Mark Spencer', 
        category: 'Architecture', 
        img: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600&h=400&fit=crop' 
    },
// ===== GLASS TOWER - FIXED (NEW WORKING URL) =====
    { 
        id: 27,
        title: 'Glass Tower', 
        photographer: 'Linda Park', 
        category: 'Architecture', 
        img: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?w=600&h=400&fit=crop&auto=compress' 
    },

    // ===== PORTRAIT CATEGORY =====
    { 
        id: 28,
        title: 'Portrait in Light', 
        photographer: 'Anna Martinez', 
        category: 'Portrait', 
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop' 
    },
    // ===== CREATIVE PORTRAIT - FIXED (Pexels) =====
    { 
        id: 29,
        title: 'Creative Portrait', 
        photographer: 'John Doe', 
        category: 'Portrait', 
        img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=600&h=400&fit=crop' 
    },
    { 
        id: 30,
        title: 'Studio Portrait', 
        photographer: 'Mary Johnson', 
        category: 'Portrait', 
        img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop' 
    }
];

// ============================================
// ===== CREATORS DATA =====
// ============================================

const creatorsData = [
    { name: 'Sarah Khan', role: 'Nature Photographer', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Ahmed Ali', role: 'Travel Photographer', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Emma Watson', role: 'Wildlife Photographer', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'John Smith', role: 'Street Photographer', img: 'https://randomuser.me/api/portraits/men/75.jpg' }
];

const featuresData = [
    { icon: 'fa-camera', title: 'High Quality Images', desc: 'Discover thousands of premium quality photographs.' },
    { icon: 'fa-cloud-arrow-down', title: 'Easy Downloads', desc: 'Download your favourite images instantly.' },
    { icon: 'fa-share-nodes', title: 'Quick Sharing', desc: 'Share images with friends using one click.' },
    { icon: 'fa-heart', title: 'Save Favorites', desc: 'Create your own beautiful image collection.' }
];

const testimonialsData = [
    { text: 'PicNest has become my favorite place to discover beautiful photography.', name: '- Ali Hassan' },
    { text: 'Amazing design, smooth experience and beautiful collections.', name: '- Amna Khalid' },
    { text: 'The best frontend gallery platform I\'ve ever used.', name: '- Sarah Ahmed' }
];

const faqData = [
    { question: 'Is PicNest free to use?', answer: 'Yes! You can explore and download free images for personal use.' },
    { question: 'Can I upload my own photos?', answer: 'Yes, after signing up you can upload and manage your own gallery.' },
    { question: 'Can I save my favorite images?', answer: 'Absolutely! Create your own collection by saving your favorite photos.' }
];

// ============================================
// ===== USER STATE =====
// ============================================

let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let currentFilter = null;
let photoIdCounter = 31;

// ============================================
// ===== AUTH FUNCTIONS =====
// ============================================

function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

function saveCurrentUser() {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

function clearCurrentUser() {
    localStorage.removeItem('currentUser');
}

function isUserRegistered(email) {
    return users.some(user => user.email.toLowerCase() === email.toLowerCase());
}

function getUserByEmail(email) {
    return users.find(user => user.email.toLowerCase() === email.toLowerCase());
}

function registerUser(name, email, password) {
    if (isUserRegistered(email)) {
        return { success: false, message: 'This email is already registered!' };
    }
    
    const newUser = {
        id: Date.now(),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: password,
        createdAt: new Date().toISOString(),
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=3b82f6&color=fff&size=100`
    };
    
    users.push(newUser);
    saveUsers();
    return { success: true, message: 'Account created successfully!', user: newUser };
}

function loginUser(email, password) {
    const user = getUserByEmail(email);
    if (!user) {
        return { success: false, message: 'No account found with this email!' };
    }
    if (user.password !== password) {
        return { success: false, message: 'Incorrect password!' };
    }
    return { success: true, message: 'Login successful!', user: user };
}

function logoutUser() {
    currentUser = null;
    clearCurrentUser();
    updateUserUI();
    showToast('Logged out successfully! 👋', 'info');
}

// ============================================
// ===== RENDER FUNCTIONS =====
// ============================================

function renderCollections() {
    const container = document.getElementById('collectionContainer');
    if (!container) return;
    
    container.innerHTML = collectionsData.map(item => `
        <div class="collection-card fade-in" data-category="${item.category}">
            <img src="${item.img}" alt="${item.title}" loading="lazy" />
            <div class="collection-overlay">
                <h3>${item.title}</h3>
                <p>${item.count}</p>
            </div>
        </div>
    `).join('');
}

function renderCategories() {
    const container = document.getElementById('categoryContainer');
    if (!container) return;
    
    container.innerHTML = categoriesData.map(item => `
        <div class="category-card fade-in" data-category="${item.name}">
            <i class="fa-solid ${item.icon}"></i>
            <h3>${item.name}</h3>
        </div>
    `).join('');
}

function renderPhotos(filterCategory = null) {
    const container = document.getElementById('galleryGrid');
    const filterText = document.getElementById('categoryFilterText');
    const clearBtn = document.getElementById('clearFilterBtn');
    
    if (!container) return;
    
    let filteredPhotos = photosData;
    
    if (filterCategory) {
        filteredPhotos = photosData.filter(p => p.category === filterCategory);
        if (filterText) {
            filterText.textContent = `Showing ${filteredPhotos.length} photos in "${filterCategory}" category`;
        }
        if (clearBtn) {
            clearBtn.classList.add('show');
        }
        currentFilter = filterCategory;
    } else {
        if (filterText) {
            filterText.textContent = 'Explore the most popular photographs loved by our community.';
        }
        if (clearBtn) {
            clearBtn.classList.remove('show');
        }
        currentFilter = null;
    }

    const stat1 = document.getElementById('stat1');
    if (stat1) {
        stat1.textContent = photosData.length + '+';
    }

    if (filteredPhotos.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-image"></i>
                <h3>No photos found</h3>
                <p>Try selecting a different category</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredPhotos.map((item, index) => `
        <div class="photo-card fade-in" data-index="${index}" data-category="${item.category}">
            <img src="${item.img}" alt="${item.title}" loading="lazy" />
            <div class="photo-info">
                <div>
                    <h3>${item.title}</h3>
                    <p>by ${item.photographer} • <span style="color: var(--primary); font-weight: 600;">${item.category}</span></p>
                </div>
                <div class="photo-actions">
                    <i class="fa-regular fa-heart like-btn" data-id="${item.id}"></i>
                    <i class="fa-solid fa-download download-btn" data-id="${item.id}"></i>
                    <i class="fa-solid fa-share-nodes share-btn" data-id="${item.id}"></i>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCreators() {
    const container = document.getElementById('creatorContainer');
    if (!container) return;
    
    container.innerHTML = creatorsData.map(item => `
        <div class="creator-card fade-in">
            <img src="${item.img}" alt="${item.name}" loading="lazy" />
            <h3>${item.name}</h3>
            <p>${item.role}</p>
            <button class="follow-btn">Follow</button>
        </div>
    `).join('');
}

function renderFeatures() {
    const container = document.getElementById('featureGrid');
    if (!container) return;
    
    container.innerHTML = featuresData.map(item => `
        <div class="feature-box fade-in">
            <i class="fa-solid ${item.icon}"></i>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </div>
    `).join('');
}

function renderTestimonials() {
    const container = document.getElementById('testimonialContainer');
    if (!container) return;
    
    container.innerHTML = testimonialsData.map(item => `
        <div class="testimonial-card fade-in">
            <p>"${item.text}"</p>
            <h4>${item.name}</h4>
        </div>
    `).join('');
}

function renderFAQ() {
    const container = document.getElementById('faqContainer');
    if (!container) return;
    
    container.innerHTML = faqData.map((item, index) => `
        <div class="faq-item ${index === 0 ? 'active' : ''}" data-index="${index}">
            <h3>${item.question}</h3>
            <p>${item.answer}</p>
        </div>
    `).join('');
}

// ============================================
// ===== LOADER =====
// ============================================

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 800);
    }
    updateUserUI();
});

// ============================================
// ===== TOAST =====
// ============================================

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    const toastMessage = document.getElementById('toastMessage');
    const icon = toast.querySelector('i');

    if (toastMessage) {
        toastMessage.textContent = message;
    }
    
    toast.className = type;
    if (icon) {
        icon.className = type === 'success' ? 'fa-solid fa-circle-check' :
            type === 'error' ? 'fa-solid fa-circle-xmark' :
            'fa-solid fa-circle-info';
    }

    toast.classList.add('show');
    clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// ===== BACK TO TOP =====
// ============================================

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (backToTop) {
        backToTop.classList.toggle('show', window.scrollY > 300);
    }

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = (scrollTop / scrollHeight) * 100 + '%';
    }

    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// ===== MOBILE MENU =====
// ============================================

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        const icon = menuBtn?.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// ============================================
// ===== THEME TOGGLE =====
// ============================================

const themeBtn = document.getElementById('themeBtn');

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const icon = themeBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        }
        showToast(document.body.classList.contains('light-mode') ? 'Light mode activated ☀️' : 'Dark mode activated 🌙', 'info');
    });
}

// ============================================
// ===== SEARCH =====
// ============================================

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function performSearch() {
    const query = searchInput?.value?.toLowerCase()?.trim() || '';
    const cards = document.querySelectorAll('.photo-card');
    
    if (!query) {
        if (currentFilter) {
            renderPhotos(currentFilter);
        } else {
            renderPhotos();
        }
        return;
    }
    
    let found = false;
    cards.forEach(card => {
        const title = card.querySelector('h3')?.textContent?.toLowerCase() || '';
        const photographer = card.querySelector('p')?.textContent?.toLowerCase() || '';
        if (title.includes(query) || photographer.includes(query)) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });
    
    if (!found) {
        showToast('No photos found matching "' + query + '"', 'info');
    } else {
        const filterText = document.getElementById('categoryFilterText');
        if (filterText) {
            filterText.textContent = `Search results for "${query}"`;
        }
    }
}

if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
}

if (searchInput) {
    searchInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') performSearch();
    });
}

// ============================================
// ===== STATS COUNTER =====
// ============================================

function animateStats() {
    const stats = [
        { id: 'stat1', target: photosData.length, suffix: '+' },
        { id: 'stat2', target: 5000, suffix: '+' },
        { id: 'stat3', target: 1000000, suffix: '+' },
        { id: 'stat4', target: categoriesData.length, suffix: '+' }
    ];

    stats.forEach(stat => {
        const el = document.getElementById(stat.id);
        if (!el) return;
        
        let current = 0;
        const increment = Math.ceil(stat.target / 80);
        const timer = setInterval(() => {
            current += increment;
            if (current >= stat.target) {
                current = stat.target;
                clearInterval(timer);
            }
            el.textContent = current.toLocaleString() + stat.suffix;
        }, 20);
    });
}

setTimeout(animateStats, 500);

// ============================================
// ===== LIGHTBOX =====
// ============================================

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightboxBtn = document.getElementById('closeLightbox');
const prevBtn = document.getElementById('prevImage');
const nextBtn = document.getElementById('nextImage');

let currentImageIndex = 0;
let lightboxImages = [];

function getAllGalleryImages() {
    const images = [];
    document.querySelectorAll('.photo-card img, .collection-card img, .img-card img, .photo-image img').forEach(img => {
        if (img.src && img.src !== '') {
            images.push(img.src);
        }
    });
    return images;
}

lightboxImages = getAllGalleryImages();

document.querySelectorAll('.photo-card img, .collection-card img, .img-card img, .photo-image img').forEach((img) => {
    img.addEventListener('click', function(e) {
        e.stopPropagation();
        lightboxImages = getAllGalleryImages();
        const index = lightboxImages.indexOf(this.src);
        if (index > -1) {
            openLightbox(this.src, index);
        } else {
            openLightbox(this.src, 0);
        }
    });
});

function openLightbox(src, index) {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.add('open');
    lightboxImage.src = src;
    currentImageIndex = index;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = 'auto';
}

if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', closeLightbox);
}

if (lightbox) {
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
    });
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
    if (lightbox?.classList.contains('open')) {
        if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
        if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
    }
});

if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        lightboxImages = getAllGalleryImages();
        if (currentImageIndex > 0) {
            currentImageIndex--;
            if (lightboxImage) {
                lightboxImage.src = lightboxImages[currentImageIndex];
            }
        } else {
            showToast('This is the first image', 'info');
        }
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        lightboxImages = getAllGalleryImages();
        if (currentImageIndex < lightboxImages.length - 1) {
            currentImageIndex++;
            if (lightboxImage) {
                lightboxImage.src = lightboxImages[currentImageIndex];
            }
        } else {
            showToast('This is the last image', 'info');
        }
    });
}

// ============================================
// ===== VIEW FULL IMAGE =====
// ============================================

const viewBtn = document.getElementById('viewBtn');
if (viewBtn) {
    viewBtn.addEventListener('click', () => {
        const img = document.getElementById('photoOfDay');
        if (img) {
            lightboxImages = getAllGalleryImages();
            const index = lightboxImages.indexOf(img.src);
            openLightbox(img.src, index > -1 ? index : 0);
        }
    });
}

// ============================================
// ===== LIKE, DOWNLOAD, SHARE BUTTONS =====
// ============================================

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('like-btn')) {
        const btn = e.target;
        btn.classList.toggle('fa-regular');
        btn.classList.toggle('fa-solid');
        btn.classList.toggle('liked');
        showToast(btn.classList.contains('fa-solid') ? 'Added to Favorites ❤️' : 'Removed from Favorites', 'success');
    }
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('download-btn')) {
        const card = e.target.closest('.photo-card');
        const img = card?.querySelector('img');
        if (img) {
            const link = document.createElement('a');
            link.download = img.alt || 'photo.jpg';
            link.href = img.src;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast('Download started! 📥', 'success');
        }
    }
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('share-btn')) {
        const card = e.target.closest('.photo-card');
        const img = card?.querySelector('img');
        const url = img ? img.src : window.location.href;

        if (navigator.share) {
            navigator.share({
                title: 'PicNest - Beautiful Photography',
                text: 'Check out this amazing photo on PicNest!',
                url: url
            }).catch(() => {});
        } else {
            navigator.clipboard.writeText(url).then(() => {
                showToast('Link copied to clipboard! 📋', 'success');
            }).catch(() => {
                showToast('Unable to share', 'error');
            });
        }
    }
});

// ============================================
// ===== FOLLOW BUTTONS =====
// ============================================

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('follow-btn')) {
        const btn = e.target;
        if (btn.textContent === 'Follow') {
            btn.textContent = 'Following';
            btn.classList.add('following');
            const name = btn.closest('.creator-card')?.querySelector('h3')?.textContent || 'Creator';
            showToast(`You are now following ${name}!`, 'success');
        } else {
            btn.textContent = 'Follow';
            btn.classList.remove('following');
            showToast('Unfollowed', 'info');
        }
    }
});

// ============================================
// ===== FAQ TOGGLE =====
// ============================================

document.addEventListener('click', function(e) {
    const faqItem = e.target.closest('.faq-item');
    if (faqItem) {
        const isActive = faqItem.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
        if (!isActive) {
            faqItem.classList.add('active');
        }
    }
});

// ============================================
// ===== NEWSLETTER =====
// ============================================

document.getElementById('subscribeBtn').addEventListener('click', function() {
    const email = document.getElementById('newsletterEmail');
    const value = email.value.trim();

    if (!value) {
        showToast('Please enter your email address!', 'error');
        return;
    }
    if (!value.includes('@') || !value.includes('.')) {
        showToast('Please enter a valid email address!', 'error');
        return;
    }

    showToast('🎉 Thanks for subscribing!', 'success');
    email.value = '';
});

document.getElementById('newsletterEmail').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('subscribeBtn').click();
    }
});

// ============================================
// ===== EXPLORE BUTTON =====
// ============================================

document.getElementById('exploreBtn').addEventListener('click', function() {
    document.querySelector('.trending').scrollIntoView({ behavior: 'smooth' });
    showToast('Exploring Gallery... 🖼️', 'info');
});

// ============================================
// ===== UPLOAD MODAL =====
// ============================================

document.getElementById('uploadBtn').addEventListener('click', function() {
    if (currentUser) {
        openModal('uploadModal');
    } else {
        showToast('Please login first to upload photos!', 'error');
        openModal('loginModal');
    }
});

// ============================================
// ===== UPLOAD FORM =====
// ============================================

document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('uploadTitle').value.trim();
    const category = document.getElementById('uploadCategory').value;
    const photographer = document.getElementById('uploadPhotographer').value.trim();
    const imageUrl = document.getElementById('uploadImageUrl').value.trim();

    if (!title || !category || !photographer || !imageUrl) {
        showToast('Please fill in all fields!', 'error');
        return;
    }

    const newPhoto = {
        id: photoIdCounter++,
        title: title,
        photographer: photographer,
        category: category,
        img: imageUrl
    };

    photosData.push(newPhoto);
    
    if (currentFilter) {
        renderPhotos(currentFilter);
    } else {
        renderPhotos();
    }
    
    document.getElementById('stat1').textContent = photosData.length + '+';
    
    showToast(`✅ "${title}" uploaded successfully!`, 'success');
    
    document.getElementById('uploadTitle').value = '';
    document.getElementById('uploadCategory').value = '';
    document.getElementById('uploadPhotographer').value = '';
    document.getElementById('uploadImageUrl').value = '';
    document.getElementById('uploadPreview').innerHTML = '<p>Preview will appear here</p>';
    document.getElementById('uploadPreview').classList.remove('has-image');
    
    closeModal('uploadModal');
});

// Image URL preview
document.getElementById('uploadImageUrl').addEventListener('input', function() {
    const url = this.value.trim();
    const preview = document.getElementById('uploadPreview');
    
    if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
        preview.innerHTML = `<img src="${url}" alt="Preview" onerror="this.parentElement.innerHTML='<p>❌ Invalid image URL. Please use a valid image URL.</p>'" />`;
        preview.classList.add('has-image');
    } else {
        preview.innerHTML = '<p>Preview will appear here</p>';
        preview.classList.remove('has-image');
    }
});

// ============================================
// ===== LOGIN / SIGNUP MODALS =====
// ============================================

function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    document.getElementById(id).classList.remove('open');
    document.body.style.overflow = 'auto';
}

document.getElementById('loginBtn').addEventListener('click', function() {
    openModal('loginModal');
});

document.getElementById('signupBtn').addEventListener('click', function() {
    openModal('signupModal');
});

document.getElementById('loginClose').addEventListener('click', function() {
    closeModal('loginModal');
});

document.getElementById('signupClose').addEventListener('click', function() {
    closeModal('signupModal');
});

document.getElementById('uploadClose').addEventListener('click', function() {
    closeModal('uploadModal');
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
});

document.getElementById('switchToSignup').addEventListener('click', function(e) {
    e.preventDefault();
    closeModal('loginModal');
    setTimeout(() => openModal('signupModal'), 300);
});

document.getElementById('switchToLogin').addEventListener('click', function(e) {
    e.preventDefault();
    closeModal('signupModal');
    setTimeout(() => openModal('loginModal'), 300);
});

// ============================================
// ===== LOGIN FORM =====
// ============================================

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!email || !password) {
        showToast('Please fill in all fields!', 'error');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        showToast('Please enter a valid email address!', 'error');
        return;
    }

    if (password.length < 6) {
        showToast('Password must be at least 6 characters!', 'error');
        return;
    }

    const result = loginUser(email, password);
    
    if (result.success) {
        currentUser = result.user;
        saveCurrentUser();
        updateUserUI();
        showToast(`Welcome back, ${currentUser.name}! 🎉`, 'success');
        closeModal('loginModal');
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
    } else {
        showToast(result.message, 'error');
    }
});

// ============================================
// ===== SIGNUP FORM =====
// ============================================

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;

    if (!name || !email || !password || !confirm) {
        showToast('Please fill in all fields!', 'error');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        showToast('Please enter a valid email address!', 'error');
        return;
    }

    if (password.length < 6) {
        showToast('Password must be at least 6 characters!', 'error');
        return;
    }

    if (password !== confirm) {
        showToast('Passwords do not match!', 'error');
        return;
    }

    const result = registerUser(name, email, password);
    
    if (result.success) {
        currentUser = result.user;
        saveCurrentUser();
        updateUserUI();
        showToast(`Welcome to PicNest, ${name}! 🎉`, 'success');
        closeModal('signupModal');
        document.getElementById('signupName').value = '';
        document.getElementById('signupEmail').value = '';
        document.getElementById('signupPassword').value = '';
        document.getElementById('signupConfirm').value = '';
    } else {
        showToast(result.message, 'error');
    }
});

// ============================================
// ===== UPDATE UI FOR LOGGED IN USER =====
// ============================================

function updateUserUI() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const navButtons = document.querySelector('.nav-buttons');
    
    if (!navButtons) return;
    
    const existingBadge = document.getElementById('userBadge');
    if (existingBadge) {
        existingBadge.remove();
    }
    
    if (currentUser) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (signupBtn) signupBtn.style.display = 'none';
        
        const userBadge = document.createElement('div');
        userBadge.className = 'user-badge show';
        userBadge.id = 'userBadge';
        userBadge.innerHTML = `
            <img src="${currentUser.avatar}" alt="User" />
            <span>${currentUser.name}</span>
            <button class="logout-btn" id="logoutBtn">Logout</button>
        `;
        navButtons.appendChild(userBadge);
        
        document.getElementById('logoutBtn')?.addEventListener('click', function() {
            logoutUser();
        });
    } else {
        if (loginBtn) loginBtn.style.display = '';
        if (signupBtn) signupBtn.style.display = '';
    }
}

// ============================================
// ===== CATEGORY FILTERING =====
// ============================================

document.addEventListener('click', function(e) {
    const categoryCard = e.target.closest('.category-card');
    if (categoryCard) {
        const categoryName = categoryCard.dataset.category;
        
        document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
        categoryCard.classList.add('active');
        
        renderPhotos(categoryName);
        showToast(`Showing "${categoryName}" photos 🏷️`, 'info');
        
        document.getElementById('photosSection').scrollIntoView({ behavior: 'smooth' });
    }
});

// ============================================
// ===== CLEAR FILTER =====
// ============================================

document.getElementById('clearFilterBtn').addEventListener('click', function() {
    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    renderPhotos();
    showToast('Filter cleared!', 'info');
    this.classList.remove('show');
});

// ============================================
// ===== COLLECTION CLICK =====
// ============================================

document.addEventListener('click', function(e) {
    const collectionCard = e.target.closest('.collection-card');
    if (collectionCard) {
        const category = collectionCard.dataset.category;
        if (category) {
            const card = document.querySelector(`.category-card[data-category="${category}"]`);
            if (card) {
                card.click();
            }
        }
    }
});

// ============================================
// ===== NAV LINKS ACTIVE STATE =====
// ============================================

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// ============================================
// ===== SCROLL REVEAL =====
// ============================================

setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}, 200);

// ============================================
// ===== CONSOLE =====
// ============================================

console.log('%c📸 Welcome to PicNest!', 'color:#3b82f6;font-size:22px;font-weight:bold;');
console.log('%c❤️ Made with love for photography lovers.', 'color:#8b5cf6;font-size:15px;');
console.log('%c🚀 Explore, share, and create!', 'color:#ec4899;font-size:15px;');

// ============================================
// ===== INITIAL RENDER =====
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    renderCollections();
    renderCategories();
    renderPhotos();
    renderCreators();
    renderFeatures();
    renderTestimonials();
    renderFAQ();
    updateUserUI();
});

// ============================================
// ===== KEYBOARD SHORTCUTS =====
// ============================================

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.open').forEach(modal => {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    }
});