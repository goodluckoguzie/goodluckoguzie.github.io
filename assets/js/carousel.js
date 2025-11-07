/**
 * Generic Carousel Class
 * Handles all carousel functionality with error handling and accessibility
 */
class Carousel {
    constructor(config) {
        // Configuration with defaults
        this.carouselId = config.carouselId;
        this.wrapperSelector = config.wrapperSelector || `.${config.carouselId.replace('-carousel', '')}-carousel-wrapper`;
        this.totalSlides = config.totalSlides || 1;
        this.autoPlayDelay = config.autoPlayDelay || 7000;
        this.ariaLabel = config.ariaLabel || 'Carousel';
        
        // State
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        this.isDragging = false;
        this.startX = 0;
        
        // DOM elements (will be set in init)
        this.carousel = null;
        this.wrapper = null;
        this.slides = [];
        this.dots = [];
        
        // Bind methods
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    
    /**
     * Initialize the carousel
     */
    init() {
        try {
            // Get carousel element
            this.carousel = document.getElementById(this.carouselId);
            if (!this.carousel) {
                console.warn(`Carousel element not found: ${this.carouselId}`);
                return false;
            }
            
            // Get wrapper
            this.wrapper = this.carousel.closest(this.wrapperSelector) || 
                          document.querySelector(this.wrapperSelector);
            if (!this.wrapper) {
                console.warn(`Carousel wrapper not found for: ${this.carouselId}`);
            }
            
            // Get slides
            this.slides = Array.from(this.carousel.querySelectorAll('.carousel-slide'));
            if (this.slides.length === 0) {
                console.warn(`No slides found in carousel: ${this.carouselId}`);
                return false;
            }
            
            // Update total slides if not set
            if (!this.totalSlides || this.totalSlides > this.slides.length) {
                this.totalSlides = this.slides.length;
            }
            
            // Get dots
            if (this.wrapper) {
                this.dots = Array.from(this.wrapper.querySelectorAll('.carousel-indicators .carousel-dot'));
            }
            
            // Setup accessibility
            this.setupAccessibility();
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Initialize display
            this.updateSlide();
            
            // Start autoplay if multiple slides
            if (this.totalSlides > 1) {
                this.startAutoPlay();
            }
            
            return true;
        } catch (error) {
            console.error(`Error initializing carousel ${this.carouselId}:`, error);
            return false;
        }
    }
    
    /**
     * Setup accessibility attributes
     */
    setupAccessibility() {
        if (!this.carousel) return;
        
        try {
            this.carousel.setAttribute('tabindex', '0');
            this.carousel.setAttribute('role', 'region');
            this.carousel.setAttribute('aria-label', this.ariaLabel);
            
            // Setup ARIA labels for dots
            this.dots.forEach((dot, index) => {
                if (!dot.hasAttribute('aria-label')) {
                    dot.setAttribute('aria-label', `Go to ${this.ariaLabel.toLowerCase()} slide ${index + 1}`);
                }
                dot.setAttribute('tabindex', '0');
            });
        } catch (error) {
            console.error(`Error setting up accessibility for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Setup event listeners
     */
    setupEventListeners() {
        if (!this.carousel) return;
        
        try {
            // Keyboard navigation
            this.carousel.addEventListener('keydown', this.handleKeyDown);
            
            // Touch/swipe support
            this.carousel.addEventListener('touchstart', this.handleTouchStart, { passive: false });
            this.carousel.addEventListener('touchmove', this.handleTouchMove, { passive: false });
            this.carousel.addEventListener('touchend', this.handleTouchEnd);
            
            // Mouse drag support
            this.carousel.addEventListener('mousedown', this.handleMouseDown);
            this.carousel.addEventListener('mousemove', this.handleMouseMove);
            this.carousel.addEventListener('mouseup', this.handleMouseUp);
            this.carousel.addEventListener('mouseleave', this.handleMouseLeave);
        } catch (error) {
            console.error(`Error setting up event listeners for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Handle keyboard navigation
     */
    handleKeyDown(e) {
        if (!this.carousel) return;
        
        try {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.prev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.next();
            }
        } catch (error) {
            console.error(`Error handling keyboard navigation for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Handle touch start
     */
    handleTouchStart(e) {
        if (!this.carousel || !e.touches || e.touches.length === 0) return;
        
        try {
            this.startX = e.touches[0].clientX;
            this.isDragging = true;
            this.stopAutoPlay();
        } catch (error) {
            console.error(`Error handling touch start for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Handle touch move
     */
    handleTouchMove(e) {
        if (!this.isDragging) return;
        try {
            e.preventDefault();
        } catch (error) {
            // Ignore preventDefault errors
        }
    }
    
    /**
     * Handle touch end
     */
    handleTouchEnd(e) {
        if (!this.isDragging || !e.changedTouches || e.changedTouches.length === 0) return;
        
        try {
            this.isDragging = false;
            const endX = e.changedTouches[0].clientX;
            const diff = this.startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
            
            if (this.totalSlides > 1) {
                this.startAutoPlay();
            }
        } catch (error) {
            console.error(`Error handling touch end for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Handle mouse down
     */
    handleMouseDown(e) {
        if (!this.carousel) return;
        
        try {
            this.startX = e.clientX;
            this.isDragging = true;
            this.stopAutoPlay();
            this.carousel.style.cursor = 'grabbing';
        } catch (error) {
            console.error(`Error handling mouse down for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Handle mouse move
     */
    handleMouseMove(e) {
        if (!this.isDragging) return;
        
        try {
            e.preventDefault();
        } catch (error) {
            // Ignore preventDefault errors
        }
    }
    
    /**
     * Handle mouse up
     */
    handleMouseUp(e) {
        if (!this.isDragging) return;
        
        try {
            this.isDragging = false;
            if (this.carousel) {
                this.carousel.style.cursor = 'default';
            }
            
            const mouseEndX = e.clientX;
            const mouseDiff = this.startX - mouseEndX;
            
            if (Math.abs(mouseDiff) > 50) {
                if (mouseDiff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
            
            if (this.totalSlides > 1) {
                this.startAutoPlay();
            }
        } catch (error) {
            console.error(`Error handling mouse up for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Handle mouse leave
     */
    handleMouseLeave() {
        try {
            this.isDragging = false;
            if (this.carousel) {
                this.carousel.style.cursor = 'default';
            }
            if (this.totalSlides > 1) {
                this.startAutoPlay();
            }
        } catch (error) {
            console.error(`Error handling mouse leave for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Update slide display
     */
    updateSlide() {
        try {
            // Update slides
            this.slides.forEach((slide, index) => {
                if (!slide) return;
                
                slide.classList.remove('active');
                if (index === this.currentSlide) {
                    slide.classList.add('active');
                    slide.setAttribute('aria-hidden', 'false');
                } else {
                    slide.setAttribute('aria-hidden', 'true');
                }
            });
            
            // Update dots
            this.dots.forEach((dot, index) => {
                if (!dot) return;
                
                dot.classList.remove('active');
                if (index === this.currentSlide) {
                    dot.classList.add('active');
                    dot.setAttribute('aria-current', 'true');
                } else {
                    dot.removeAttribute('aria-current');
                }
            });
        } catch (error) {
            console.error(`Error updating slide for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Go to next slide
     */
    next() {
        try {
            this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
            this.updateSlide();
            if (this.totalSlides > 1) {
                this.restartAutoPlay();
            }
        } catch (error) {
            console.error(`Error going to next slide for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Go to previous slide
     */
    prev() {
        try {
            this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
            this.updateSlide();
            if (this.totalSlides > 1) {
                this.restartAutoPlay();
            }
        } catch (error) {
            console.error(`Error going to previous slide for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Go to specific slide
     */
    goTo(index) {
        try {
            if (index >= 0 && index < this.totalSlides) {
                this.currentSlide = index;
                this.updateSlide();
                if (this.totalSlides > 1) {
                    this.restartAutoPlay();
                }
            }
        } catch (error) {
            console.error(`Error going to slide ${index} for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Start autoplay
     */
    startAutoPlay() {
        try {
            this.stopAutoPlay();
            if (this.totalSlides > 1) {
                this.autoPlayInterval = setInterval(() => {
                    this.next();
                }, this.autoPlayDelay);
            }
        } catch (error) {
            console.error(`Error starting autoplay for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Stop autoplay
     */
    stopAutoPlay() {
        try {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        } catch (error) {
            console.error(`Error stopping autoplay for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Restart autoplay
     */
    restartAutoPlay() {
        try {
            this.stopAutoPlay();
            this.startAutoPlay();
        } catch (error) {
            console.error(`Error restarting autoplay for ${this.carouselId}:`, error);
        }
    }
    
    /**
     * Cleanup (for when carousel is removed)
     */
    destroy() {
        try {
            this.stopAutoPlay();
            
            if (this.carousel) {
                this.carousel.removeEventListener('keydown', this.handleKeyDown);
                this.carousel.removeEventListener('touchstart', this.handleTouchStart);
                this.carousel.removeEventListener('touchmove', this.handleTouchMove);
                this.carousel.removeEventListener('touchend', this.handleTouchEnd);
                this.carousel.removeEventListener('mousedown', this.handleMouseDown);
                this.carousel.removeEventListener('mousemove', this.handleMouseMove);
                this.carousel.removeEventListener('mouseup', this.handleMouseUp);
                this.carousel.removeEventListener('mouseleave', this.handleMouseLeave);
            }
        } catch (error) {
            console.error(`Error destroying carousel ${this.carouselId}:`, error);
        }
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Carousel;
}

