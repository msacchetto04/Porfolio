/**
 * footer.js — Footer reutilizable para todas las páginas de proyecto.
 * Uso: agregar <div id="site-footer"></div> en el HTML
 *      y <script src="assets/js/footer.js"></script> antes de </body>
 */
(function () {
    const footerHTML = `
    <footer>
        <div class="footer-logo">É<em>tiam,</em></div>
        <div class="footer-socials">
            <a class="social-link" href="https://www.behance.net/maitesacchetto1" target="_blank" rel="noopener">Behance</a>
            <a class="social-link" href="https://www.instagram.com/maisacchetto/" target="_blank" rel="noopener">Instagram</a>
            <a class="social-link" href="https://linktr.ee/maitesacchetto" target="_blank" rel="noopener">Contacto</a>
        </div>
        <span class="footer-copy">© 2025 Étiam</span>
    </footer>`;

    function injectFooter() {
        const placeholder = document.getElementById('site-footer');
        if (placeholder) {
            placeholder.outerHTML = footerHTML;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFooter);
    } else {
        injectFooter();
    }
})();
