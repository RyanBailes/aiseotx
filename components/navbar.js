class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(18, 18, 18, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logo {
          font-family: 'Druk Wide', sans-serif;
          font-size: 1.5rem;
          font-weight: bold;
          color: #D6251E;
          text-transform: uppercase;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        .nav-links a:hover {
          color: #00FF87;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #00FF87;
          transition: width 0.3s;
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">AISEOTX</a>
        <div class="nav-links">
          <a href="/">Home</a>
          <a href="/what-is-ai-seo.html">About AI SEO</a>
          <a href="/the-proof.html">The Proof</a>
          <a href="/contact.html">Contact</a>
        </div>
<button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);