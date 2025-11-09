// Image Optimization and Lazy Loading Enhancement
class ImageOptimization {
    constructor() {
        this.init();
    }

    init() {
        this.enhanceLazyLoading();
        this.addImageErrorHandling();
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

