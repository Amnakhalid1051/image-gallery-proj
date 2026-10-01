/* ============================================================
   BIRTHDAY WISHES - ROMANTIC & FUNNY EDITION
   ============================================================ */

// ============================================================
// ===== CONFIGURATION =====
// ============================================================
const CONFIG = {
    password: '0210',
    recipientName: 'Google',
    totalBalloons: 20,
    colors: [
        'balloon-color-1', 'balloon-color-2', 'balloon-color-3',
        'balloon-color-4', 'balloon-color-5', 'balloon-color-6',
        'balloon-color-7', 'balloon-color-8'
    ]
};

// ============================================================
// ===== UNIQUE BALLOON MESSAGES =====
// ============================================================
const BALLOON_MESSAGES = [
    "🎉 Happy Birthday! You're amazing!",
    "🎂 May all your dreams come true!",
    "✨ Keep shining like the star you are!",
    "💖 Sending you lots of love today!",
    "🎈 Stay happy and healthy always!",
    "🌟 You deserve the best in life!",
    "🎁 Enjoy every moment of your special day!",
    "💫 You're one in a million!",
    "🎊 Wishing you a year full of joy!",
    "🌈 May your days be colorful and bright!",
    "🦋 You make the world a better place!",
    "🍰 Have your cake and eat it too!",
    "🌻 You're as special as a sunflower!",
    "🎵 May your life be a beautiful melody!",
    "🌸 You bloom wherever you go!",
    "🦄 Stay magical, stay wonderful!",
    "🌙 Sweet dreams and sweeter days ahead!",
    "☀️ You light up every room you enter!",
    "💎 You're a rare and precious gem!",
    "🚀 Here's to reaching new heights this year!"
];

// ============================================================
// ===== INTERACTIVE QUESTIONS =====
// ============================================================
const QUESTIONS = [
    {
        emoji: '💭',
        text: 'Do you miss me?',
        yesText: 'Yes, I do! 🥺',
        noText: 'No 🙃',
        yesResponse: 'Awwww! I miss you too! 🥰💕',
        noResponse: 'Whaaaat?! That\'s not possible! 😤 Try again!',
        forceYes: true
    },
    {
        emoji: '❤️',
        text: 'Do you love me?',
        yesText: 'Yes, obviously! ❤️',
        noText: 'Hmm... no? 💔',
        yesResponse: 'I knew it! I love you more! 💖💖💖',
        noResponse: 'Ouch! That hurts! 🥲 Are you sure? Try again!',
        forceYes: true
    },
    {
        emoji: '🥰',
        text: 'Am I your favorite person?',
        yesText: 'Absolutely! 🥇',
        noText: 'Not really 🤷',
        yesResponse: 'Yaaay! You\'re my favorite too! 🌟',
        noResponse: 'How dare you! 😤 I thought we were besties! Try again!',
        forceYes: true
    },
    {
        emoji: '🍰',
        text: 'Will you share your birthday cake with me?',
        yesText: 'Of course! 🍰',
        noText: 'No, it\'s all mine! 😈',
        yesResponse: 'Yayyy! Cake party time! 🎉🍰',
        noResponse: 'Fine... I didn\'t want any anyway! 😢 Try again!',
        forceYes: true
    },
    {
        emoji: '🎁',
        text: 'Am I the best gift you ever got?',
        yesText: 'Yes, absolutely! 🎁✨',
        noText: 'Nah, I got better ones 🤪',
        yesResponse: 'I knew it! You\'re my best gift too! 💝',
        noResponse: 'Okay wow! 💔 Break my heart why don\'t you! Try again!',
        forceYes: true
    }
];

// ============================================================
// ===== STATE =====
// ============================================================
let popCount = 0;
let currentQuestionIndex = 0;
let audioInitialized = false;

// ============================================================
// ===== DOM REFS =====
const passwordScreen = document.getElementById('passwordScreen');
const balloonScreen = document.getElementById('balloonScreen');
const questionScreen = document.getElementById('questionScreen');
const birthdayScreen = document.getElementById('birthdayScreen');
const letterScreen = document.getElementById('letterScreen');
const passwordInput = document.getElementById('passwordInput');
const passwordBtn = document.getElementById('passwordBtn');
const passwordError = document.getElementById('passwordError');
const balloonContainer = document.getElementById('balloonContainer');
const popCountEl = document.getElementById('popCount');
const totalBalloonsEl = document.getElementById('totalBalloons');
const progressBar = document.getElementById('progressBar');
const confettiContainer = document.getElementById('confettiContainer');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const showWishBtn = document.getElementById('showWishBtn');
const backToCelebration = document.getElementById('backToCelebration');
const replayBtn = document.getElementById('replayBtn');
const starsBg = document.getElementById('starsBg');
const birthdayNameEl = document.getElementById('birthdayName');
const recipientNameEl = document.getElementById('recipientName');
const questionNumber = document.getElementById('questionNumber');
const totalQuestions = document.getElementById('totalQuestions');
const questionEmoji = document.getElementById('questionEmoji');
const questionText = document.getElementById('questionText');
const questionButtons = document.getElementById('questionButtons');
const questionFeedback = document.getElementById('questionFeedback');

// ============================================================
// ===== CREATE STARS BACKGROUND =====
// ============================================================
function createStars() {
    if (!starsBg) return;
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.width = (1 + Math.random() * 3) + 'px';
        star.style.height = star.style.width;
        starsBg.appendChild(star);
    }
}

// ============================================================
// ===== FLOATING HEARTS BACKGROUND =====
// ============================================================
function createFloatingHearts() {
    const container = document.createElement('div');
    container.className = 'question-hearts-bg';
    const hearts = ['❤️', '💖', '💕', '💗', '💓', '💝', '💘'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('span');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = (Math.random() * 8) + 's';
        heart.style.fontSize = (20 + Math.random() * 30) + 'px';
        container.appendChild(heart);
    }
    return container;
}

// ============================================================
// ===== PASSWORD CHECK =====
// ============================================================
function checkPassword() {
    const input = passwordInput.value.trim();
    
    if (input === CONFIG.password) {
        passwordError.textContent = '';
        passwordInput.style.borderColor = '#4ADE80';
        
        setTimeout(() => {
            passwordScreen.classList.remove('active');
            balloonScreen.classList.add('active');
            initBalloonGame();
            tryPlayMusic();
        }, 500);
    } else {
        passwordError.textContent = '❌ Wrong code! Hint: DDMM format';
        passwordInput.style.borderColor = '#ff4d6d';
        passwordInput.value = '';
        
        passwordInput.parentElement.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            passwordInput.parentElement.style.animation = '';
        }, 500);
    }
}

// ============================================================
// ===== BALLOON GAME =====
// ============================================================
function initBalloonGame() {
    balloonContainer.innerHTML = '';
    popCount = 0;
    popCountEl.textContent = '0';
    totalBalloonsEl.textContent = CONFIG.totalBalloons;
    progressBar.style.width = '0%';
    
    const shuffledMessages = [...BALLOON_MESSAGES].sort(() => Math.random() - 0.5);
    const positions = getRandomPositions(CONFIG.totalBalloons);
    
    positions.forEach((pos, index) => {
        createBalloon(pos.x, pos.y, index, shuffledMessages[index]);
    });
}

function getRandomPositions(count) {
    const positions = [];
    const cols = 5;
    
    for (let i = 0; i < count; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        
        const x = (col * 18 + 5) + (Math.random() * 8 - 4);
        const y = (row * 18 + 22) + (Math.random() * 6 - 3);
        
        positions.push({ x, y });
    }
    
    return positions;
}

function createBalloon(x, y, index, message) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon ' + CONFIG.colors[index % CONFIG.colors.length];
    balloon.style.left = x + '%';
    balloon.style.top = y + '%';
    balloon.style.animationDelay = (Math.random() * 2) + 's';
    balloon.dataset.message = message;
    
    balloon.addEventListener('click', function() {
        popBalloon(this);
    });
    
    balloonContainer.appendChild(balloon);
}

function popBalloon(balloon) {
    if (balloon.classList.contains('popped')) return;
    
    balloon.classList.add('popped');
    popCount++;
    popCountEl.textContent = popCount;
    
    const progress = (popCount / CONFIG.totalBalloons) * 100;
    progressBar.style.width = progress + '%';
    
    const message = balloon.dataset.message;
    showFloatingMessage(message, balloon);
    createPopEffect(balloon);
    
    if (popCount >= CONFIG.totalBalloons) {
        setTimeout(() => {
            balloonScreen.classList.remove('active');
            questionScreen.classList.add('active');
            
            // Add floating hearts background
            if (!document.querySelector('.question-hearts-bg')) {
                document.body.appendChild(createFloatingHearts());
            }
            
            startQuestions();
        }, 800);
    }
}

function createPopEffect(balloon) {
    const rect = balloon.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            width: ${6 + Math.random() * 6}px;
            height: ${6 + Math.random() * 6}px;
            border-radius: 50%;
            background: ${getRandomColor()};
            pointer-events: none;
            z-index: 999;
        `;
        
        const angle = (i / 15) * Math.PI * 2;
        const distance = 80 + Math.random() * 80;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${dx}px, ${dy}px) scale(0)`, opacity: 0 }
        ], {
            duration: 800 + Math.random() * 400,
            easing: 'cubic-bezier(0, 0.5, 0.5, 1)'
        });
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1200);
    }
}

function getRandomColor() {
    const colors = ['#FF6B9D', '#FFD93D', '#9D4EDD', '#FF5E9C', '#00D4FF', '#4ADE80', '#FF9A3C'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showFloatingMessage(message, element) {
    const rect = element.getBoundingClientRect();
    const msg = document.createElement('div');
    msg.textContent = message;
    msg.style.cssText = `
        position: fixed;
        left: ${rect.left + rect.width / 2}px;
        top: ${rect.top}px;
        transform: translate(-50%, -50%);
        background: rgba(26, 10, 46, 0.95);
        backdrop-filter: blur(20px);
        color: white;
        padding: 14px 28px;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
        z-index: 9999;
        pointer-events: none;
        border: 2px solid rgba(255, 107, 157, 0.6);
        box-shadow: 0 10px 40px rgba(255, 107, 157, 0.5);
        max-width: 90vw;
    `;
    
    document.body.appendChild(msg);
    
    msg.animate([
        { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 0 },
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1, offset: 0.3 },
        { transform: 'translate(-50%, -150%) scale(1)', opacity: 0 }
    ], {
        duration: 2200,
        easing: 'ease-out'
    });
    
    setTimeout(() => msg.remove(), 2200);
}

// ============================================================
// ===== INTERACTIVE QUESTIONS =====
// ============================================================
function startQuestions() {
    currentQuestionIndex = 0;
    totalQuestions.textContent = QUESTIONS.length;
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= QUESTIONS.length) {
        // All questions done - go to birthday screen
        setTimeout(() => {
            questionScreen.classList.remove('active');
            birthdayScreen.classList.add('active');
            startConfetti();
            startFireworks();
        }, 1000);
        return;
    }
    
    const q = QUESTIONS[currentQuestionIndex];
    questionNumber.textContent = currentQuestionIndex + 1;
    questionEmoji.textContent = q.emoji;
    questionText.textContent = q.text;
    questionFeedback.textContent = '';
    
    // Build buttons
    questionButtons.innerHTML = `
        <button class="question-btn yes-btn" id="yesBtn">
            ${q.yesText}
        </button>
        <button class="question-btn no-btn" id="noBtn">
            ${q.noText}
        </button>
    `;
    
    // Add animation
    const card = document.getElementById('questionCard');
    card.style.animation = 'none';
    setTimeout(() => {
        card.style.animation = 'cardPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    }, 10);
    
    // Setup button handlers
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    yesBtn.addEventListener('click', () => handleYesAnswer(q));
    
    if (q.forceYes) {
        // Funny "No" button that runs away on hover
        noBtn.addEventListener('mouseenter', () => {
            const x = Math.random() * (window.innerWidth - 150);
            const y = Math.random() * (window.innerHeight - 100);
            noBtn.style.position = 'fixed';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
            noBtn.style.zIndex = '9999';
        });
        
        noBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Even if clicked, show the funny response then make it run again
            showFeedback(q.noResponse, 'error');
            setTimeout(() => {
                const x = Math.random() * (window.innerWidth - 150);
                const y = Math.random() * (window.innerHeight - 100);
                noBtn.style.position = 'fixed';
                noBtn.style.left = x + 'px';
                noBtn.style.top = y + 'px';
            }, 100);
        });
    } else {
        noBtn.addEventListener('click', () => handleNoAnswer(q));
    }
}

function handleYesAnswer(q) {
    // Show positive response
    showFeedback(q.yesResponse, 'success');
    
    // Create heart burst
    createHeartBurst();
    
    // Play a happy sound (optional - visual feedback)
    showSpecialPopup(q.yesResponse, 'success');
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 1800);
}

function handleNoAnswer(q) {
    showFeedback(q.noResponse, 'error');
    
    // Shake the card
    const card = document.getElementById('questionCard');
    card.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
        card.style.animation = 'cardPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    }, 500);
}

function showFeedback(message, type) {
    questionFeedback.textContent = message;
    questionFeedback.style.color = type === 'success' ? '#4ADE80' : '#FF6B9D';
    
    questionFeedback.style.animation = 'none';
    setTimeout(() => {
        questionFeedback.style.animation = 'feedbackPop 0.5s ease';
    }, 10);
}

function createHeartBurst() {
    const hearts = ['❤️', '💖', '💕', '💗', '💓', '💝', '💘', '💞'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-burst';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = (window.innerWidth / 2) + (Math.random() * 300 - 150) + 'px';
        heart.style.top = (window.innerHeight / 2) + 'px';
        heart.style.animationDelay = (Math.random() * 0.5) + 's';
        heart.style.fontSize = (20 + Math.random() * 30) + 'px';
        
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2500);
    }
}

function showSpecialPopup(message, type) {
    const popup = document.createElement('div');
    popup.className = 'special-popup';
    
    let emoji = '💖';
    let title = 'Yayyy!';
    
    if (message.toLowerCase().includes('love')) {
        emoji = '💕';
        title = 'I Love You Too!';
    } else if (message.toLowerCase().includes('miss')) {
        emoji = '🥰';
        title = 'I Miss You More!';
    } else if (message.toLowerCase().includes('favorite')) {
        emoji = '⭐';
        title = 'Best Friends Forever!';
    } else if (message.toLowerCase().includes('cake')) {
        emoji = '🍰';
        title = 'Cake Party!';
    } else if (message.toLowerCase().includes('gift')) {
        emoji = '🎁';
        title = 'You\'re My Best Gift!';
    }
    
    popup.innerHTML = `
        <div class="popup-emoji">${emoji}</div>
        <h3>${title}</h3>
        <p>${message}</p>
    `;
    
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.classList.add('hide');
        setTimeout(() => popup.remove(), 400);
    }, 1500);
}

// ============================================================
// ===== CONFETTI =====
// ============================================================
function startConfetti() {
    confettiContainer.innerHTML = '';
    const colors = ['#FF6B9D', '#FFD93D', '#9D4EDD', '#FF5E9C', '#00D4FF', '#4ADE80', '#FF9A3C'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            createConfetti(colors);
        }, i * 30);
    }
    
    setInterval(() => {
        if (birthdayScreen.classList.contains('active')) {
            createConfetti(colors);
        }
    }, 400);
}

function createConfetti(colors) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shapes = ['50%', '0', '50% 0 50% 0'];
    
    confetti.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: -20px;
        width: ${8 + Math.random() * 8}px;
        height: ${8 + Math.random() * 8}px;
        background: ${color};
        border-radius: ${shapes[Math.floor(Math.random() * shapes.length)]};
        transform: rotate(${Math.random() * 360}deg);
        animation: confettiFall ${3 + Math.random() * 3}s linear forwards;
    `;
    
    confettiContainer.appendChild(confetti);
    setTimeout(() => confetti.remove(), 6000);
}

// ============================================================
// ===== FIREWORKS =====
// ============================================================
function startFireworks() {
    const fireworksContainer = document.getElementById('fireworksContainer');
    
    setInterval(() => {
        if (!birthdayScreen.classList.contains('active')) return;
        
        const x = Math.random() * 80 + 10;
        const y = Math.random() * 40 + 20;
        createFirework(x, y, fireworksContainer);
    }, 800);
}

function createFirework(x, y, container) {
    const colors = ['#FF6B9D', '#FFD93D', '#9D4EDD', '#FF5E9C', '#00D4FF', '#4ADE80'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: ${color};
            pointer-events: none;
            box-shadow: 0 0 10px ${color};
        `;
        
        const angle = (i / 20) * Math.PI * 2;
        const distance = 60 + Math.random() * 60;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${dx}px, ${dy}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'cubic-bezier(0, 0.5, 0.5, 1)'
        });
        
        container.appendChild(particle);
        setTimeout(() => particle.remove(), 1500);
    }
}

// ============================================================
// ===== MUSIC =====
// ============================================================
function tryPlayMusic() {
    if (!audioInitialized) {
        bgMusic.volume = 0.3;
        bgMusic.play().then(() => {
            audioInitialized = true;
            musicToggle.classList.remove('muted');
        }).catch(err => {
            console.log('Autoplay blocked:', err);
            musicToggle.classList.add('muted');
            musicToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        });
    }
}

musicToggle.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play().catch(() => {});
        this.classList.remove('muted');
        this.innerHTML = '<i class="fa-solid fa-music"></i>';
    } else {
        bgMusic.pause();
        this.classList.add('muted');
        this.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
});

// ============================================================
// ===== LETTER SCREEN =====
// ============================================================
showWishBtn.addEventListener('click', function() {
    birthdayScreen.classList.remove('active');
    letterScreen.classList.add('active');
});

backToCelebration.addEventListener('click', function() {
    letterScreen.classList.remove('active');
    birthdayScreen.classList.add('active');
});

// ============================================================
// ===== REPLAY =====
// ============================================================
replayBtn.addEventListener('click', function() {
    // Remove floating hearts
    document.querySelector('.question-hearts-bg')?.remove();
    
    birthdayScreen.classList.remove('active');
    questionScreen.classList.remove('active');
    passwordScreen.classList.add('active');
    passwordInput.value = '';
    passwordInput.style.borderColor = '';
    passwordError.textContent = '';
    passwordInput.focus();
});

// ============================================================
// ===== EVENT LISTENERS =====
// ============================================================
passwordBtn.addEventListener('click', checkPassword);
passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') checkPassword();
});
passwordInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// ============================================================
// ===== INITIALIZATION =====
// ============================================================
createStars();
birthdayNameEl.textContent = CONFIG.recipientName;
recipientNameEl.textContent = CONFIG.recipientName;
passwordInput.focus();

// Shake animation style
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(shakeStyle);

console.log('%c🎂 Birthday Wishes for Google!', 'color:#FF6B9D;font-size:24px;font-weight:bold;');
console.log('%c💝 Made with love', 'color:#FFD93D;font-size:14px;');
console.log('%c💕 Romantic & Funny Edition', 'color:#9D4EDD;font-size:14px;');