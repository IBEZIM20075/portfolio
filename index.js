



// ===== MOBILE MENU TOGGLE =====
const toggleBtn = document.getElementById('toggle');
const mobileMenu = document.getElementById('mobileMenu');

if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// ===== SMOOTH SCROLL FALLBACK (older browsers) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== NAVBAR SHADOW ON SCROLL =====
const navbar = document.querySelector('.nav-bar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.06)';
    }
});
    
