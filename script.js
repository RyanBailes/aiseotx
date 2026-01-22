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

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log('🤖 AI SEO DROPZONE TX - SYSTEM ACTIVE');
});