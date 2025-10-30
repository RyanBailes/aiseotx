class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(18, 18, 18, 0.9);
          padding: 3rem 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-family: 'Druk Wide', sans-serif;
          font-size: 1.5rem;
          font-weight: bold;
          color: #D6251E;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .footer-links h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #00FF87;
        }
        .footer-links ul {
          list-style: none;
          padding: 0;
        }
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer-links a {
          color: white;
          text-decoration: none;
          opacity: 0.8;
          transition: opacity 0.3s;
        }
        .footer-links a:hover {
          opacity: 1;
        }
        .copyright {
          text-align: center;
          margin-top: 3rem;
          opacity: 0.6;
          font-size: 0.9rem;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div>
            <div class="footer-logo">AISEOTX</div>
            <p>The signal has arrived. Texas-born AI SEO optimization.</p>
          </div>
          <div class="footer-links">
            <h3>Navigation</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/what-is-ai-seo.html">About AI SEO</a></li>
              <li><a href="/the-proof.html">The Proof</a></li>
              <li><a href="/contact.html">Contact</a></li>
            </ul>
</div>
          <div class="footer-links">
            <h3>Connect</h3>
            <ul>
              <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
              <li><a href="mailto:ryan@baileszindler.com">Email</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Bailes Zindler. All rights reserved.
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
