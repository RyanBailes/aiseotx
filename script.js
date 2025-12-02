// Global script for AI SEO DROPZONE TX

document.addEventListener('DOMContentLoaded', function() {
    // Initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Add streetwear-style intersection observer animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('street-visible');
            }
        });
    }, observerOptions);

    // Observe all capsules and sections
    document.querySelectorAll('.group, section').forEach(section => {
        observer.observe(section);
    });

    // Add machine camo pattern to random elements
    function addMachineCamo() {
        const elements = document.querySelectorAll('.border-4');
        elements.forEach(el => {
            if (Math.random() > 0.7) {
                el.classList.add('machine-camo-pattern');
            }
        });
    }

    // Initialize machine camo
    addMachineCamo();

    // Add hypebeast cursor effect
    document.addEventListener('mousemove', function(e) {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    // Streetwear-style scroll indicator
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        
        if (scrollDirection === 'down' && scrollTop > 100) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
        lastScrollTop = scrollTop;
    });

    // Add streetwear text effects
    function addStreetTextEffects() {
        const headlines = document.querySelectorAll('h1, h2, h3');
        headlines.forEach(headline => {
            if (!headline.classList.contains('no-effect')) {
                headline.style.textShadow = '2px 2px 0px #FF003C';
            }
        });
    }

    addStreetTextEffects();

    // Mobile menu toggle for navbar component
    document.addEventListener('click', function(e) {
        if (e.target.closest('.mobile-menu-toggle')) {
            const navbar = e.target.closest('custom-navbar');
            if (navbar) {
                navbar.shadowRoot.querySelector('.mobile-menu').classList.toggle('hidden');
        }
    });

    console.log('🤖 AI SEO DROPZONE TX - SYSTEM ACTIVE');
});