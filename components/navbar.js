class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar {
          background: #000000;
          border-bottom: 4px solid #ED1C24;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          font-family: 'AISEOGrotesk', system-ui, sans-serif;
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .nav-logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .nav-logo-svg {
          display: block;
          height: 42px;
          width: auto;
        }

        @media (min-width: 1024px) {
          .nav-logo-svg {
            height: 50px;
          }
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .nav-links {
          display: flex;
          gap: 1.75rem;
          align-items: center;
        }
        
        .nav-link {
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          transition: all 0.25s ease;
        }
        
        .nav-link:hover {
          color: #ED1C24;
          transform: translateY(-2px);
        }

        .nav-cta {
          border: 2px solid #FFFFFF;
          padding: 0.4rem 1rem;
          background: #ED1C24;
          color: #000000;
        }

        .nav-cta:hover {
          background: #000000;
          color: #ED1C24;
          border-color: #ED1C24;
        }
        
        .status-badge {
          background: #ED1C24;
          color: #ffffff;
          padding: 0.25rem 0.75rem;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        
        .mobile-menu-toggle {
          display: none;
          background: #ED1C24;
          border: 2px solid #FFFFFF;
          color: #ffffff;
          cursor: pointer;
          padding: 0.6rem 0.8rem;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }

        .mobile-menu-toggle:active {
          background: #FFFFFF;
        }

        .mobile-menu-toggle:active svg {
          stroke: #ED1C24;
        }

        .mobile-menu-toggle svg,
        .mobile-menu-toggle i {
          width: 24px;
          height: 24px;
          stroke: #FFFFFF;
          display: block;
        }
        
        .mobile-menu {
          display: none;
          position: fixed;
          top: 74px;
          left: 0;
          right: 0;
          bottom: 0;
          background: #000000;
          border-top: 4px solid #ED1C24;
          padding: 2rem;
          overflow-y: auto;
          z-index: 999;
        }
        
        .mobile-menu.active {
          display: block;
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-link {
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          padding: 1rem;
          border: 3px solid #ED1C24;
          text-align: center;
          background: #000000;
          transition: all 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }

        .mobile-link:active {
          background: #ED1C24;
          color: #000000;
        }

        .mobile-link-cta {
          background: #ED1C24;
          color: #000000;
          border-color: #FFFFFF;
          margin-top: 1rem;
        }

        .mobile-link-cta:active {
          background: #000000;
          color: #ED1C24;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: block;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      </style>
      
      <nav class="navbar">
        <div class="nav-container">
          <a href="/" class="nav-logo" aria-label="AISEOTX home">
            <svg
              class="nav-logo-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 872.05 257.46"
              role="img"
            >
              <title>AISEOTX</title>
              <defs>
                <style>
                  .cls-1 { fill: #fff; }
                  .cls-2 { fill: #ed1c24; }
                </style>
              </defs>
              <path class="cls-2" d="M.16.15c.96-.08,1.93-.13,2.89-.15,289.66.1,579.31-.06,868.96.08.09,85.74.02,171.58.04,257.32-164.08.14-328.84,0-493,.04-126.33-.05-252.67.13-379-.13V12.03C.09,8.08-.14,4.09.16.15H.16Z"/>
              <g>
                <path class="cls-1" d="M143.07,60.32c5-1.19,11.88-1.2,16.03,2.28,5.47,4.66,6.14,13,2.03,18.77-5.56,7.7-16.73,8.94-24.33,3.56-4.53-3.45-5.12-9.34-3.97-14.54,1.44-4.88,5.5-8.47,10.24-10.07h0Z"/>
                <path class="cls-1" d="M421.18,81.39c8.08-.42,16.27-.19,24.37-.08-1.12,9.83-3.37,19.53-4.55,29.36,4.53-.12,9.05-.2,13.58-.05-.68,5.99-1.57,11.96-2.63,17.9-4.51.3-9.04-.11-13.53.24-1.39.93-1.06,3.81-1.48,5.33-3.1,20-6.63,39.92-9.36,59.99-8.28.6-16.66.29-24.96.16,2.84-16.26,5.45-32.56,8.12-48.85.84-5.67,1.99-11.28,2.51-16.99-4.24.25-8.47.36-12.71.29.34-5.93,1.66-12.05,2.41-17.93,4.53-.47,8.98-.07,13.52-.27.68-6.58,1.95-13.06,2.89-19.6.55-3.27.75-6.34,1.84-9.49h0Z"/>
                <path class="cls-1" d="M61.15,108.93c7.29-.58,15.08-.99,21.8,2.33,4.66,2.08,7.48,6.04,10.56,9.9.52-3.36,1.12-6.72,1.6-10.09,7.19-1.18,14.78-.59,22.05-.41-1.21,11.62-3.7,23.14-5.28,34.72-2.29,16.25-5.33,32.4-7.48,48.67-7.61.68-15.37.48-22.99.29-.01-3.23.35-6.34.91-9.52-2.52,3.1-4.87,6.11-8.38,8.18-7.43,5.09-16.23,5.5-24.87,4.06-6.52-1.21-12.41-4.71-16.41-10.01-6.85-8.46-8.06-19.93-7.54-30.43.27-10.54,3.58-20.88,9.21-29.77,6.09-9.33,15.86-15.93,26.83-17.91h0Z"/>
                <path class="cls-1" d="M195.57,108.65c8.74-.28,17.67,1.03,24.2,7.35-2.81,4.86-6.11,9.34-9.23,14.01-3.1-1.5-6.49-3.46-9.92-3.97-3.62-.24-7.36-.54-10.45,1.69-1.38,1.09-2.91,2.56-2.82,4.47-.32,3.25,2.81,5.46,5.21,7.05,7.76,4.89,15.63,7.68,21.49,15.2,4.29,5.73,4.46,12.39,3.63,19.22-1.18,7.43-6.33,13.96-12.47,18.06-9.82,6.04-20.81,6.56-32.01,5.56-7.75-.86-15.03-3.74-20.78-9.08,3.05-5.45,6.87-10.54,10.77-15.41,3.78,2.36,6.79,5,11.29,5.98,4.22.87,9.36,1.48,13.43-.25,3.1-1.39,6.17-4.87,5.63-8.47-.74-3.97-4.45-5.9-7.53-7.91-6.75-4-15.33-8.2-19.51-15.13-3.27-4.91-2.84-11.1-2.25-16.69,1.28-5.51,4.25-11.13,8.85-14.56,6.45-4.83,14.42-7.43,22.49-7.11h0Z"/>
                <path class="cls-1" d="M268.96,108.68c5.76-.03,11.23-.32,16.77,1.63,9.45,2.8,17.2,10.54,19.59,20.16,2.14,8.12,2.18,17.6.04,25.71-.3,1.76-2.44,1.27-3.72,1.44-17.75.03-35.51-.02-53.26,0-.21,6.57.03,12.81,4.86,17.8,6.84,6.56,18.12,5.98,24.68-.66,1.62-1.33,3.09-4.07,5.37-3.84,7.19-.08,14.43-.07,21.61.11-4,10.83-12.98,20.31-24.01,24.01-9.62,3.44-20.57,3.47-30.52,1.57-10.28-1.97-18.84-9.29-22.91-18.84-3.38-8.66-4.23-18.2-2.33-27.3,2.22-14.43,9.79-27.9,22.34-35.73,6.41-3.79,14-6.15,21.48-6.05h0Z"/>
                <path class="cls-1" d="M355.6,108.74c6.16.03,12.53-.5,18.36,1.06,7.39,1.77,14.85,6.03,19.11,12.46,5.82,8.27,7.27,19.56,5.58,29.35-1.73,16.93-11.28,33.9-27.04,41.35-9.51,4.58-19.79,5.36-30.18,4.36-7.86-1-15.29-3.88-20.67-9.9-7.38-7.92-9.92-19.23-9.33-29.79.49-13.36,5.87-27.35,15.91-36.45,7.28-7.56,17.88-11.8,28.25-12.45h0Z"/>
                <path class="cls-1" d="M613.57,108.7c6.89-.24,14.34.62,19.9,5.09-1.53,6.45-1.87,13.36-4.12,19.58-2.51-1.63-4.85-3.25-7.74-4.18-6.85-2.3-15.55-.5-20.93,4.33-8.48,8.18-12.05,20.45-10.3,31.99,1.03,4.34,3.81,9.53,8.2,11.22,3.68,1.69,7.86,1.59,11.81,1.17,5.88-.99,9.35-4.61,14.43-7.23.08,4.74-1.09,9.16-1.71,13.81-.4,2.25-.46,4.78-1.37,6.89-.67,1.2-2.3,1.89-3.48,2.5-9.53,4.47-20.8,5.09-30.87,2.17-8.21-2.42-15.16-8.21-18.44-16.18-3.97-8.79-3.82-17.76-3.05-27.17,1.51-10.33,5.72-20.27,12.37-28.35,8.75-10.04,21.92-16.18,35.31-15.66h0Z"/>
                <path class="cls-1" d="M672.02,109.06c10.89-1.01,21.31-.65,30.95,5.09,8.82,5.18,13,14.46,14.36,24.27,1.6,16.54-3.25,35.48-15.82,47-7.7,7.69-19.04,11.86-29.81,12.24-8.88.38-17.36-.17-25.3-4.54-4.14-2.21-7.69-5.18-10.13-9.24-5.52-8.6-7.43-19.62-5.79-29.66,1.46-12.22,6.91-24.57,16.01-33.02,6.96-6.75,16.03-10.67,25.54-12.15h0Z"/>
                <path class="cls-1" d="M771.59,108.71c5.9-.29,11.5-.58,16.74,2.62,4.03,2.37,6.24,6.06,8.18,10.16,3.44-4.22,7.34-7.89,12.36-10.17,5.35-2.61,10.98-2.9,16.82-2.65,5.66,0,11.19,2.14,15.03,6.37,4.03,3.87,5.3,8.85,6.15,14.19.63,4.86-.49,9.11-1.1,13.9-2.63,17.04-5.46,34.06-8.23,51.09-8.05.44-16.17.21-24.22,0,1.93-13.15,4.41-26.24,6.5-39.38.89-5.7,2.34-11.9,2.06-17.65-.17-3.11-1.28-6.73-4.34-8.14-5.71-2.67-13.1-.22-16.74,4.76-2.97,3.72-3.44,9.55-4.2,14.11-2,14.14-4.73,28.15-6.79,42.28-.22,1.4-.56,2.77-.9,4.14-7.83.05-15.68.21-23.5-.1,2.66-16.67,5.25-33.37,8.06-50.01.31-3.81.98-8.64-.77-12.15-1.48-3.09-5.05-4.15-8.23-4.12-4.14-.18-8.24,1.29-11.03,4.38-2.58,2.89-3.56,6.34-4.21,10.07-2.92,17.26-5.47,34.58-8.47,51.82-7.97.29-16.03.32-24.01.09,3.64-22.45,7.7-44.81,11.08-67.29.93-5.63,1.53-11.03,2.98-16.53,7.78.03,15.61-.2,23.38.24-.42,2.78-.89,5.56-1.12,8.36,4.78-5.64,11.08-9.63,18.53-10.41h0Z"/>
                <path class="cls-1" d="M131.78,110.95c8.19-.72,16.61-.32,24.85-.3-5.24,27.77-9.39,55.77-14.28,83.59-8.09.24-16.25.41-24.34,0,4.33-27.74,9.04-55.59,13.77-83.29h0Z"/>
                <path class="cls-1" d="M456.43,110.73c9.11-.25,18.36-.24,27.48-.02,4.33,7.86,7.43,16.38,11.36,24.45,6.22-8.38,12.89-16.39,19.66-24.34,8.5-.29,17.12-.49,25.61,0-2.73,4.27-6.45,7.13-9.71,10.97-8.08,9.45-16.63,18.45-24.75,27.85,8.64,15.07,18.54,29.46,27.12,44.55-9.5.45-19.1.19-28.61.14-5.52-9.18-9.98-18.98-15.19-28.33-7.35,9.36-14.57,18.82-21.91,28.19-9.52.41-19.33.38-28.86.06,1.58-4.36,5.41-6.69,8.46-10.45,9.79-11.51,19.86-22.8,29.42-34.48-6.53-12.8-14.46-25.34-20.07-38.6h0Z"/>
                <path class="cls-2" d="M267.07,126.13c3.79-.36,8.2-.67,11.47,1.6,4.8,3.12,6.49,9.81,5.52,15.19-10.92.24-21.81-.11-32.72.42,1.71-7.62,7.7-15.7,15.73-17.21h0Z"/>
                <path class="cls-2" d="M68.61,128.52c6.62-1.38,13.89,1.56,16.57,8.02,1.94,5.15,2.86,10.98,1.8,16.43-1.04,6.93-3.09,14.26-8.25,19.32-3.31,3.54-7.65,5.94-12.6,5.86-3.87.12-7.52-.16-10.54-2.84-4.46-4-5.9-9.82-5.89-15.61-.29-7.31,2-14.78,5.5-21.15,2.69-5.08,7.72-9.03,13.42-10.03h0Z"/>
                <path class="cls-2" d="M356.11,128.49c5.53-1.33,12.67.88,15.37,6.2,3.18,5.71,2.95,13.12,2.18,19.42-1.05,7.55-4.41,14.47-10.16,19.54-5.63,4.54-13.71,6.15-20.22,2.52-4.88-3.16-7.3-9.81-7.23-15.42-.59-8.69,2.18-17.57,7.38-24.51,3.05-4.14,7.66-6.8,12.67-7.75h0Z"/>
                <path class="cls-2" d="M675.17,128.46c4.23-.89,9.25.12,12.63,2.87,2.99,2.75,4.53,7.24,5.18,11.15,1.11,10.2-1.37,21.36-8.25,29.2-5.09,5.81-13.91,8.15-21.11,5.25-4.91-2.41-7.84-7.86-8.4-13.16-1.2-9.94,1.54-20.25,7.71-28.16,3.04-3.85,7.4-6.37,12.24-7.16h0Z"/>
                <path class="cls-1" d="M542.7,168.37c5.23-1.53,12.64-1.63,16.61,2.77,2.84,2.66,3.54,6.19,3.32,9.95.25,6.23-4.39,11.66-10.29,13.15-2.51.59-5.21.89-7.77.54-5.87-.44-10.8-6.08-11.24-11.8-.51-6.29,3.64-12.3,9.37-14.62h0Z"/>
              </g>
            </svg>
            <span class="sr-only">AISEOTX</span>
          </a>
          
          <div class="nav-links">
            <a href="/#capsules" class="nav-link">Capsules</a>
            <a href="/#proof" class="nav-link">Proof</a>
            <a href="/#aiseo" class="nav-link">What is AISEO</a>
            <a href="/old-school-tyler" class="nav-link">Old School Tyler</a>      
            <span class="status-badge">System Active</span>
            <a href="https://baileszindler.com/contact" class="nav-link nav-cta" target="_blank" rel="noopener noreferrer">
              Access
            </a>
          </div>
          
          <button class="mobile-menu-toggle" aria-label="Toggle navigation" type="button">
            <i data-feather="menu"></i>
          </button>
        </div>
        
        <div class="mobile-menu">
          <div class="mobile-menu-links">
            <a href="/#capsules" class="mobile-link">Capsules</a>
            <a href="/#proof" class="mobile-link">Proof</a>
            <a href="/#aiseo" class="mobile-link">What is AISEO</a>
            <a href="/old-school-tyler" class="mobile-link">Old School Tyler</a>      
            <a href="https://baileszindler.com/contact" class="mobile-link mobile-link-cta" target="_blank" rel="noopener noreferrer">
              Access System
            </a>
          </div>
        </div>
      </nav>
    `;

    this.setupEventListeners();
  }

  setupEventListeners() {
    const toggle = this.shadowRoot.querySelector('.mobile-menu-toggle');
    const menu = this.shadowRoot.querySelector('.mobile-menu');
    const menuLinks = this.shadowRoot.querySelectorAll('.mobile-link');

    if (toggle && menu) {
      // Handle both click and touch events
      const toggleMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        menu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (menu.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
        
        // Change icon
        const icon = toggle.querySelector('i');
        if (icon) {
          if (menu.classList.contains('active')) {
            icon.setAttribute('data-feather', 'x');
          } else {
            icon.setAttribute('data-feather', 'menu');
          }
          if (window.feather) {
            window.feather.replace();
          }
        }
      };

      // Add both click and touchend listeners
      toggle.addEventListener('click', toggleMenu);
      toggle.addEventListener('touchend', (e) => {
        e.preventDefault();
        toggleMenu(e);
      });

      // Close menu when clicking a link
      menuLinks.forEach(link => {
        const closeMenu = () => {
          menu.classList.remove('active');
          document.body.style.overflow = '';
          const icon = toggle.querySelector('i');
          if (icon) {
            icon.setAttribute('data-feather', 'menu');
            if (window.feather) {
              window.feather.replace();
            }
          }
        };

        link.addEventListener('click', closeMenu);
        link.addEventListener('touchend', closeMenu);
      });

      // Close menu when tapping outside
      document.addEventListener('touchstart', (e) => {
        if (!this.contains(e.target) && menu.classList.contains('active')) {
          menu.classList.remove('active');
          document.body.style.overflow = '';
          const icon = toggle.querySelector('i');
          if (icon) {
            icon.setAttribute('data-feather', 'menu');
            if (window.feather) {
              window.feather.replace();
            }
          }
        }
      });
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);