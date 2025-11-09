// Reading Time Calculator
class ReadingTime {
    constructor() {
        this.wordsPerMinute = 200; // Average reading speed
        this.init();
    }

    init() {
        this.calculateReadingTimes();
    }

    calculateReadingTimes() {
        // Calculate for main content
        const mainContent = document.querySelector('main#main-content');
        if (mainContent) {
            const readingTime = this.getReadingTime(mainContent);
            this.displayReadingTime(mainContent, readingTime);
        }

        // Calculate for individual publications
        const publications = document.querySelectorAll('.publication');
        publications.forEach(pub => {
            const readingTime = this.getReadingTime(pub);
            this.displayReadingTime(pub, readingTime);
        });

        // Calculate for project pages
        const projectContent = document.querySelector('.project-header, .hero-section');
        if (projectContent && !mainContent.querySelector('.publication')) {
            const readingTime = this.getReadingTime(document.querySelector('main'));
            this.displayReadingTime(document.querySelector('main'), readingTime);
        }
    }

    getReadingTime(element) {
        const text = element.innerText || element.textContent || '';
        const words = text.trim().split(/\s+/).length;
        const minutes = Math.ceil(words / this.wordsPerMinute);
        return minutes;
    }

    displayReadingTime(element, minutes) {
        // Check if already added
        if (element.querySelector('.reading-time')) return;

        const readingTimeEl = document.createElement('div');
        readingTimeEl.className = 'reading-time';
        readingTimeEl.innerHTML = `
            <span class="reading-time-icon">⏱️</span>
            <span>${minutes} min read</span>
        `;

        // Insert after first heading or at the beginning
        const firstHeading = element.querySelector('h1, h2, h3');
        if (firstHeading) {
            firstHeading.insertAdjacentElement('afterend', readingTimeEl);
        } else {
            element.insertBefore(readingTimeEl, element.firstChild);
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ReadingTime();
    });
} else {
    new ReadingTime();
}

