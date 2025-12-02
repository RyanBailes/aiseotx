class CustomFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer {
          background: #000000;
          border-top: 4px solid #ED1C24;
          padding: 3rem 2rem;
          font-family: 'AISEOGrotesk', system-ui, sans-serif;
          text-align: center;
        }
        
        .footer-label {
          max-width: 420px;
          margin: 0 auto;
          border: 2px solid #ffffff;
          padding: 2rem;
        }

        .footer-badge {
          font-family: 'AISEOCondBoldOblique', system-ui, sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.8rem;
          margin-bottom: 0.4rem;
          color: #ED1C24;
        }

        .footer-subbadge {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: #ffffff;
          opacity: 0.8;
          margin-bottom: 1.5rem;
        }
        
        .footer-text {
          font-size: 0.75rem;
          line-height: 1.6;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        
        .footer-line {
          margin-bottom: 0.5rem;
        }
        
        .footer-accent {
          color: #ED1C24;
          font-weight: 700;
        }
        
        .footer-meta {
          margin-top: 1.5rem;
          font-size: 0.7rem;
          color: #888888;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        .footer-link {
          color: #ffffff;
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
          padding-bottom: 2px;
        }

        .footer-link:hover {
          border-bottom-color: #ED1C24;
          color: #ED1C24;
        }
      </style>
      
      <footer class="footer">
        <div class="footer-label">
          <div class="footer-badge">
            AISEOTX.COM
          </div>
          <div class="footer-subbadge">
            MACHINE FIRST OPTIMIZATION
          </div>

          <div class="footer-text">
            <div class="footer-line">100% MACHINE OPTIMIZED</div>
            <div class="footer-line">MADE IN TEXAS</div>
            <div class="footer-line">STRUCTURE VERIFIED</div>
            <div class="footer-line">AI OVERVIEW READY</div>
          </div>
          
          <div class="footer-meta">
            © ${year} AISEOTX · SYSTEM BY 
            <a href="https://baileszindler.com" class="footer-link" target="_blank" rel="noopener noreferrer">
              BAILES + ZINDLER
            </a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
