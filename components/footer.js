class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: #1a1a1a;
                    color: white;
                }
                .footer-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 3rem 1.5rem;
                }
                .footer-content {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
                .footer-logo {
                    background: #e11d1d;
                    color: white;
                    padding: 0.5rem 0.75rem;
                    border-radius: 0.5rem;
                    font-family: 'Bebas Neue', Impact, sans-serif;
                    font-size: 1.25rem;
                    font-style: italic;
                    text-decoration: none;
                    display: inline-block;
                    margin-bottom: 1rem;
                }
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .footer-link {
                    color: #9ca3af;
                    text-decoration: none;
                    transition: color 0.2s ease;
                    text-transform: lowercase;
                }
                .footer-link:hover {
                    color: white;
                }
                .footer-bottom {
                    border-top: 1px solid #374151;
                    padding-top: 2rem;
                    margin-top: 2rem;
                    text-align: center;
                    color: #9ca3af;
                }
                @media (min-width: 768px) {
                    .footer-content {
                        grid-template-columns: 2fr 1fr;
                    }
                    .footer-links {
                        flex-direction: row;
                        justify-content: flex-end;
                    }
                }
            </style>
            <div class="footer-container">
                <div class="footer-content">
                    <div>
                        <a href="/" class="footer-logo">aiseotx</a>
                        <p class="text-cool-gray text-sm">
                            Texas-built AI SEO. Making your business machine-readable for the next generation of search.
                        </p>
                    </div>
                    <div class="footer-links">
                        <a href="/playbook.html" class="footer-link">playbook</a>
                        <a href="/case-studies.html" class="footer-link">case studies</a>
                        <a href="/what-is-ai-seo.html" class="footer-link">what ai seo is</a>
                        <a href="/contact.html" class="footer-link">contact</a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p class="text-sm">
                        &copy; <span id="current-year">2025</span> aiseotx.com • Built in Texas by Bailes Zindler
                    </p>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);