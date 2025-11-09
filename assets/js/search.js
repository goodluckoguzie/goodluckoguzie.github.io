// Site-wide Search Functionality
class SiteSearch {
    constructor() {
        this.searchIndex = [];
        this.searchInput = null;
        this.searchResults = null;
        this.searchContainer = null;
        this.init();
    }

    async init() {
        try {
            await this.buildSearchIndex();
            this.createSearchUI();
            this.attachEventListeners();
        } catch (error) {
            console.error('Error initializing site search:', error);
        }
    }

    async buildSearchIndex() {
        try {
            // Build search index from page content
            const pages = [
            { url: '/', title: 'Home', content: 'Dr. Goodluck Oguzie, Reinforcement Learning, Social Robotics, Neural Networks' },
            { url: '/about', title: 'About', content: 'About Dr. Goodluck Oguzie, PhD, MSc, BSc, Computer Science, Machine Learning, Robotics' },
            { url: '/portfolio', title: 'Research Portfolio', content: 'Research Environments, FallingBallEnv, LiteSocNavGym, SocNavGym, Predictive World Models, Cosine-Gated LSTM, Adaptive Prediction Horizons' },
            { url: '/publications', title: 'Publications', content: 'IEEE PRML 2024, UKCI 2023, Cosine-Gated LSTM, Predictive World Models, PhD Thesis' },
            { url: '/teaching', title: 'Teaching', content: 'Teaching, Courses, Modules, QA Ltd, Crimson Education, Solent University, Ulster University' },
            { url: '/collaborations', title: 'Collaborations', content: 'Research Collaborations, Joint Projects, Student Supervision, Industry Partnerships' },
            { url: '/cv', title: 'CV', content: 'Curriculum Vitae, Education, Experience, Skills, Publications' },
            { url: '/projects/cosine-gated-lstm', title: 'Cosine-Gated LSTM', content: 'CGLSTM, Sequential Learning, Neural Network Architecture, IEEE PRML 2024' },
            { url: '/projects/predictive-world-models', title: 'Predictive World Models', content: '2StepAhead, MASPM, Social Navigation, UKCI 2023' },
            { url: '/projects/adaptive-prediction-horizons', title: 'Adaptive Prediction Horizons', content: 'Reinforcement Learning, Entropy-driven, Adaptive Systems' },
            { url: '/projects/fallingballenv', title: 'FallingBallEnv', content: 'Custom OpenAI Gym Environment, Ball Physics, Prediction Challenge' },
            { url: '/projects/litesocnavgym', title: 'LiteSocNavGym', content: 'Lightweight Social Navigation Environment, Fast Simulations' },
            { url: '/projects/socnavgym', title: 'SocNavGym', content: 'Social Navigation Gymnasium, Team Project, Dr. Luis J. Manso' }
        ];

        // Add project pages dynamically if they exist
        const projectLinks = document.querySelectorAll('a[href*="/projects/"]');
        projectLinks.forEach(link => {
            const url = link.getAttribute('href');
            const title = link.textContent.trim();
            if (!pages.find(p => p.url === url)) {
                pages.push({ url, title, content: title });
            }
        });

        this.searchIndex = pages.map(page => ({
            ...page,
            searchableText: `${page.title} ${page.content}`.toLowerCase()
        }));
        } catch (error) {
            console.error('Error building search index:', error);
            this.searchIndex = [];
        }
    }

    createSearchUI() {
        try {
            // Create search button in navbar
            const navbar = document.querySelector('.navbar .container');
            if (!navbar) return;

        const searchButton = document.createElement('button');
        searchButton.className = 'search-toggle';
        searchButton.setAttribute('aria-label', 'Open search');
        searchButton.innerHTML = '🔍';
        searchButton.setAttribute('title', 'Search (Ctrl+K)');
        
        // Insert before theme toggle
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.parentNode.insertBefore(searchButton, themeToggle);
        } else {
            navbar.appendChild(searchButton);
        }

        // Create search overlay
        const searchOverlay = document.createElement('div');
        searchOverlay.className = 'search-overlay';
        searchOverlay.innerHTML = `
            <div class="search-container">
                <div class="search-header">
                    <input 
                        type="text" 
                        class="search-input" 
                        placeholder="Search publications, projects, pages..."
                        aria-label="Search"
                        autocomplete="off"
                    >
                    <button class="search-close" aria-label="Close search">×</button>
                </div>
                <div class="search-results"></div>
            </div>
        `;
        document.body.appendChild(searchOverlay);

        this.searchInput = searchOverlay.querySelector('.search-input');
        this.searchResults = searchOverlay.querySelector('.search-results');
        this.searchContainer = searchOverlay;

        // Open search on button click
        searchButton.addEventListener('click', () => this.openSearch());

        // Close search on close button
        searchOverlay.querySelector('.search-close').addEventListener('click', () => this.closeSearch());

        // Close on overlay click
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                this.closeSearch();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl+K or Cmd+K to open search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.openSearch();
            }
            // Escape to close
            if (e.key === 'Escape' && this.searchContainer.classList.contains('active')) {
                this.closeSearch();
            }
        });
        } catch (error) {
            console.error('Error creating search UI:', error);
        }
    }

    openSearch() {
        try {
            this.searchContainer.classList.add('active');
            this.searchInput.focus();
        } catch (error) {
            console.error('Error opening search:', error);
        }
    }

    closeSearch() {
        try {
            this.searchContainer.classList.remove('active');
            this.searchInput.value = '';
            this.searchResults.innerHTML = '';
        } catch (error) {
            console.error('Error closing search:', error);
        }
    }

    attachEventListeners() {
        try {
            if (!this.searchInput) return;

            let searchTimeout;
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim().toLowerCase();
            
            if (query.length < 2) {
                this.searchResults.innerHTML = '<p class="search-hint">Type at least 2 characters to search...</p>';
                return;
            }

            searchTimeout = setTimeout(() => {
                this.performSearch(query);
            }, 150);
        });

        // Handle Enter key
        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const firstResult = this.searchResults.querySelector('.search-result-item');
                if (firstResult) {
                    firstResult.click();
                }
            }
        });
        } catch (error) {
            console.error('Error attaching event listeners:', error);
        }
    }

    performSearch(query) {
        try {
        const results = this.searchIndex
            .filter(item => item.searchableText.includes(query))
            .map(item => {
                const score = this.calculateRelevance(item, query);
                return { ...item, score };
            })
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);

        this.displayResults(results, query);
        } catch (error) {
            console.error('Error performing search:', error);
            this.searchResults.innerHTML = '<p class="search-error">An error occurred while searching. Please try again.</p>';
        }
    }

    calculateRelevance(item, query) {
        let score = 0;
        const titleLower = item.title.toLowerCase();
        const contentLower = item.content.toLowerCase();
        const queryLower = query.toLowerCase();

        // Title matches are more important
        if (titleLower.includes(queryLower)) {
            score += 10;
            if (titleLower.startsWith(queryLower)) {
                score += 5;
            }
        }

        // Content matches
        const contentMatches = (contentLower.match(new RegExp(queryLower, 'g')) || []).length;
        score += contentMatches;

        return score;
    }

    displayResults(results, query) {
        if (results.length === 0) {
            this.searchResults.innerHTML = `
                <div class="search-no-results">
                    <p>No results found for "<strong>${query}</strong>"</p>
                    <p class="search-suggestions">Try searching for: publications, research, teaching, projects</p>
                </div>
            `;
            return;
        }

        const resultsHTML = results.map(result => `
            <a href="${result.url}" class="search-result-item">
                <div class="search-result-title">${this.highlightMatch(result.title, query)}</div>
                <div class="search-result-url">${result.url}</div>
                ${result.content ? `<div class="search-result-snippet">${this.highlightMatch(result.content.substring(0, 100), query)}...</div>` : ''}
            </a>
        `).join('');

        this.searchResults.innerHTML = resultsHTML;

        // Add click handlers
        this.searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                this.closeSearch();
            });
        });
    }

    highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
}

// Initialize search when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new SiteSearch();
    });
} else {
    new SiteSearch();
}

