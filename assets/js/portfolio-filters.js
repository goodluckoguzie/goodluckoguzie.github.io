// Portfolio Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    const portfolioGrids = document.querySelectorAll('.portfolio-grid');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    // Debug logging
    console.log('Portfolio Filter Init:', {
        buttons: filterButtons.length,
        grids: portfolioGrids.length,
        cards: portfolioCards.length
    });
    
    if (filterButtons.length === 0 || portfolioCards.length === 0) {
        console.warn('Portfolio filter: Missing elements', {
            buttons: filterButtons.length,
            cards: portfolioCards.length
        });
        return; // Exit if elements don't exist
    }
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            console.log('Filter clicked:', filter);
            
            // Filter all portfolio cards across all grids
            portfolioCards.forEach(card => {
                const categories = card.dataset.category || '';
                
                if (filter === 'all') {
                    // Show all cards - reset to default display
                    card.style.display = '';
                } else if (categories && categories.split(' ').includes(filter)) {
                    // Show card if it matches the filter (check each category separately)
                    card.style.display = '';
                } else {
                    // Hide card if it doesn't match
                    card.style.display = 'none';
                }
            });
            
            // Update grid visibility - show/hide section headings if needed
            portfolioGrids.forEach(grid => {
                const visibleCards = Array.from(grid.querySelectorAll('.portfolio-card')).filter(card => 
                    card.style.display !== 'none' && card.style.display !== ''
                );
                
                // Check if grid has any visible cards
                const hasVisibleCards = Array.from(grid.querySelectorAll('.portfolio-card')).some(card => 
                    card.style.display !== 'none'
                );
                
                // Show/hide the grid's parent section heading if it exists
                let sectionHeading = grid.previousElementSibling;
                while (sectionHeading && sectionHeading.tagName !== 'H2') {
                    sectionHeading = sectionHeading.previousElementSibling;
                }
                
                if (sectionHeading && sectionHeading.tagName === 'H2') {
                    if (hasVisibleCards || filter === 'all') {
                        sectionHeading.style.display = '';
                    } else {
                        sectionHeading.style.display = 'none';
                    }
                }
                
                // Always show grid (it will be empty if no cards)
                grid.style.display = 'grid';
            });
            
            console.log('Filter applied:', filter, 'Visible cards:', document.querySelectorAll('.portfolio-card[style*="display: none"]').length);
        });
    });
});

