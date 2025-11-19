class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: white;
                    border-bottom: 1px solid #e5e7eb;
                }
                .header-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 1.5rem;
                    max-width: 1280px;
                    margin: 0 auto;
                }
                .logo {
                    display: inline-flex;
                    align-items: center;
                    text-decoration: none;
                }
                .logo-img {
                    display: block;
                    height: 32px;
                    width: auto;
                }
                .nav-desktop {
                    display: none;
                }
                .nav-mobile {
                    display: block;
                }
                .nav-link {
                    color: #1a1a1a;
                    text-decoration: none;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    transition: all 0.2s ease;
                    text-transform: lowercase;
                    font-weight: 500;
                }
                .nav-link:hover {
                    background: #f3f4f6;
                }
                .menu-button {
                    background: none;
                    border: none;
                    color: #1a1a1a;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 0.375rem;
                }
                .mobile-menu {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 280px;
                    background: white;
                    box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
                    transform: translateX(100%);
                    transition: transform 0.3s ease-out;
                    z-index: 1001;
                    padding: 2rem;
                }
                .mobile-menu.open {
                    transform: translateX(0);
                }
                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 1000;
                    display: none;
                }
                .overlay.open {
                    display: block;
                }
                @media (min-width: 768px) {
                    .nav-desktop {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                    }
                    .nav-mobile {
                        display: none;
                    }
                }
            </style>
            <div class="header-container">
                <a href="/" class="logo">
                    <img src="/images/logo/aiseotx-logo.svg" alt="AISEOTX" class="logo-img" />
                </a>
                
                <nav class="nav-desktop">
                    <a href="https://baileszindler.com/contact" class="btn-primary">contact</a>
                </nav>
                
                <div class="nav-mobile">
                    <button class="menu-button" id="menuToggle">
                        <i data-feather="menu"></i>
                    </button>
                </div>
                
                <div class="overlay" id="overlay"></div>
                <div class="mobile-menu" id="mobileMenu">
                    <div class="flex justify-between items-center mb-8">
                        <a href="/" class="logo">
                            <img src="/images/logo/aiseotx-logo.svg" alt="AISEOTX" class="logo-img" />
                        </a>
                        <button class="menu-button" id="menuClose">
                            <i data-feather="x"></i>
                        </button>
                    </div>
                    <nav class="flex flex-col space-y-4">
                        <a href="https://baileszindler.com/contact" class="btn-primary mt-4">contact</a>
                    </nav>
                </div>
            </div>
        `;

        // Mobile menu functionality
        const menuToggle = this.shadowRoot.getElementById('menuToggle');
        const menuClose = this.shadowRoot.getElementById('menuClose');
        const mobileMenu = this.shadowRoot.getElementById('mobileMenu');
        const overlay = this.shadowRoot.getElementById('overlay');

        const openMenu = () => {
            mobileMenu.classList.add('open');
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
            
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        };

        const closeMenu = () => {
            mobileMenu.classList.remove('open');
            overlay.classList.remove('open');
            document.body.style.overflow = '';
            
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        };

        menuToggle.addEventListener('click', openMenu);
        menuClose.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMenu();
            }
        });
    }
}

customElements.define('custom-header', CustomHeader);
