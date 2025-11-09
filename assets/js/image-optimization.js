// Image Optimization and Lazy Loading Enhancement
class ImageOptimization {
    constructor() {
        this.supportsWebP = null;
        this.init();
    }

    async init() {
        await this.checkWebPSupport();
        this.enhanceLazyLoading();
        this.addImageErrorHandling();
        this.optimizeImages();
    }

    async checkWebPSupport() {
        return new Promise((resolve) => {
            const webP = new Image();
            webP.onload = webP.onerror = () => {
                this.supportsWebP = (webP.height === 2);
                resolve();
            };
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        });
    }

    optimizeImages() {
        // Add WebP support detection and fallback
        document.querySelectorAll('img').forEach(img => {
            // Skip if already processed
            if (img.dataset.webpProcessed) return;
            
            const src = img.src || img.getAttribute('src');
            if (!src) return;
            
            // Only process local images (not external URLs)
            if (src.startsWith('http') && !src.includes(window.location.hostname)) {
                return;
            }
            
            // Add loading="lazy" if not present
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
            
            // Add decoding="async" for better performance
            if (!img.hasAttribute('decoding')) {
                img.setAttribute('decoding', 'async');
            }
            
            // Mark as processed
            img.dataset.webpProcessed = 'true';
        });
    }

    enhanceLazyLoading() {
        // Use Intersection Observer for better lazy loading
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                            img.removeAttribute('data-srcset');
                        }
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });

            // Observe all images with loading="lazy"
            document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    addImageErrorHandling() {
        // Add error handling for broken images
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('error', function() {
                this.style.display = 'none';
                // Optionally add a placeholder
                const placeholder = document.createElement('div');
                placeholder.className = 'image-placeholder';
                placeholder.innerHTML = '<span>Image not available</span>';
                placeholder.style.cssText = 'display: flex; align-items: center; justify-content: center; min-height: 200px; background: var(--bg-alt); color: var(--text-light); border-radius: 8px;';
                this.parentNode.insertBefore(placeholder, this);
            });
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ImageOptimization();
    });
} else {
    new ImageOptimization();
}

