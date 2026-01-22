class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: #000;
          border-bottom: 4px solid #ED1C24;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 2rem;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: none;
          background: #ED1C24;
          padding: 0.5rem 1rem;
        }
        
        .desktop-nav {
          display: flex;
          gap: 2rem;
        }
        
        .desktop-nav a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          font-size: 0.9rem;
        }
        
        .hamburger {
          display: none;
          background: #ED1C24;
          border: 2px solid #fff;
          padding: 0.75rem;
          cursor: pointer;
          position: relative;
          z-index: 1001;
        }
        
        .hamburger span {
          display: block;
          width: 25px;
          height: 3px;
          background: #fff;
          margin: 5px 0;
          transition: 0.3s;
        }
        
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }
        
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }
        
        .mobile-nav {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #000;
          z-index: 1000;
          padding: 100px 2rem 2rem;
        }
        
        .mobile-nav.active {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .mobile-nav a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.5rem;
          padding: 1rem;
          border: 3px solid #ED1C24;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          
          .hamburger {
            display: block;
          }
        }
      </style>
      
      <nav>
        <div class="container">
          <a href="/" class="logo">AISEOTX</a>
          
          <div class="desktop-nav">
            <a href="/#capsules">CAPSULES</a>
            <a href="/#proof">PROOF</a>
            <a href="/#aiseo">WHAT IS AISEO</a>
            <a href="/old-school-tyler">OLD SCHOOL TYLER</a>
            <a href="https://baileszindler.com/contact">CONTACT</a>
          </div>
          
          <button class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <div class="mobile-nav">
          <a href="/#capsules">CAPSULES</a>
          <a href="/#proof">PROOF</a>
          <a href="/#aiseo">WHAT IS AISEO</a>
          <a href="/old-school-tyler">OLD SCHOOL TYLER</a>
          <a href="https://baileszindler.com/contact">CONTACT</a>
        </div>
      </nav>
    `;

    const hamburger = this.shadowRoot.querySelector('.hamburger');
    const mobileNav = this.shadowRoot.querySelector('.mobile-nav');
    const mobileLinks = this.shadowRoot.querySelectorAll('.mobile-nav a');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);