// Social Sharing Functionality
class SocialSharing {
    constructor() {
        this.init();
    }

    init() {
        // Add share buttons to publications
        this.addShareButtons();
    }

    addShareButtons() {
        const publications = document.querySelectorAll('.publication');
        publications.forEach(pub => {
            const title = pub.querySelector('h3')?.textContent || '';
            const url = window.location.href;
            const shareContainer = this.createShareButtons(title, url);
            
            // Insert after publication links or at the end
            const links = pub.querySelector('.publication-links');
            if (links) {
                links.appendChild(shareContainer);
            } else {
                pub.appendChild(shareContainer);
            }
        });

        // Add share buttons to project pages
        const projectHeaders = document.querySelectorAll('.project-header, .hero-section');
        projectHeaders.forEach(header => {
            const title = document.querySelector('h1')?.textContent || '';
            const url = window.location.href;
            const shareContainer = this.createShareButtons(title, url);
            header.appendChild(shareContainer);
        });
    }

    createShareButtons(title, url) {
        const container = document.createElement('div');
        container.className = 'social-share';
        
        const encodedTitle = encodeURIComponent(title);
        const encodedUrl = encodeURIComponent(url);
        const encodedText = encodeURIComponent(`${title} - ${document.title}`);

        container.innerHTML = `
            <span style="font-size: 0.875rem; color: var(--text-light); margin-right: 0.5rem;">Share:</span>
            <a href="https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}" 
               target="_blank" 
               rel="noopener noreferrer"
               class="share-btn twitter"
               aria-label="Share on Twitter">
                <span>🐦</span> Twitter
            </a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}" 
               target="_blank" 
               rel="noopener noreferrer"
               class="share-btn linkedin"
               aria-label="Share on LinkedIn">
                <span>💼</span> LinkedIn
            </a>
            <a href="mailto:?subject=${encodedTitle}&body=${encodedText}%20${encodedUrl}" 
               class="share-btn email"
               aria-label="Share via Email">
                <span>✉️</span> Email
            </a>
            <button class="share-btn copy-link" 
                    onclick="navigator.clipboard.writeText('${url}'); this.textContent='✓ Copied!'; setTimeout(() => this.textContent='🔗 Copy Link', 2000);"
                    aria-label="Copy link to clipboard">
                <span>🔗</span> Copy Link
            </button>
        `;

        return container;
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new SocialSharing();
    });
} else {
    new SocialSharing();
}

