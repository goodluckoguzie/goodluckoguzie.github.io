// Portfolio Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    const portfolioGrids = document.querySelectorAll('.portfolio-grid');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    if (filterButtons.length === 0 || portfolioCards.length === 0) {
        return; // Exit if elements don't exist
    }
    
    // Initialize: ensure all cards are visible on page load
    portfolioCards.forEach(card => {
        card.style.display = '';
        card.classList.remove('filtered-out');
    });
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Filter all portfolio cards across all grids
            portfolioCards.forEach(card => {
                const categories = card.dataset.category || '';
                const categoryArray = categories.split(' ').filter(cat => cat.length > 0);
                
                if (filter === 'all') {
                    // Show all cards - reset to default display
                    card.style.display = '';
                    card.classList.remove('filtered-out');
                } else if (categoryArray.includes(filter)) {
                    // Show card if it matches the filter (check each category separately)
                    card.style.display = '';
                    card.classList.remove('filtered-out');
                } else {
                    // Hide card if it doesn't match
                    card.style.display = 'none';
                    card.classList.add('filtered-out');
                }
            });
            
            // Update grid visibility - show/hide section headings if needed
            portfolioGrids.forEach(grid => {
                // Check if grid has any visible cards
                const hasVisibleCards = Array.from(grid.querySelectorAll('.portfolio-card')).some(card => 
                    !card.classList.contains('filtered-out') && card.style.display !== 'none'
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
        });
    });
});

