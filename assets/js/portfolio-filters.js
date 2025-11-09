// Portfolio Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    const portfolioGrids = document.querySelectorAll('.portfolio-grid');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    if (filterButtons.length === 0 || portfolioCards.length === 0) {
        return; // Exit if elements don't exist
    }
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Filter all portfolio cards across all grids
            portfolioCards.forEach(card => {
                const categories = card.dataset.category;
                
                if (filter === 'all') {
                    // Show all cards - reset to default display
                    card.style.display = '';
                } else if (categories && categories.includes(filter)) {
                    // Show card if it matches the filter
                    card.style.display = '';
                } else {
                    // Hide card if it doesn't match
                    card.style.display = 'none';
                }
            });
            
            // Update grid visibility
            portfolioGrids.forEach(grid => {
                const visibleCards = Array.from(grid.querySelectorAll('.portfolio-card')).filter(card => 
                    card.style.display !== 'none'
                );
                
                if (visibleCards.length === 0 && filter !== 'all') {
                    // Hide empty grids (optional - you can remove this if you want grids to always show)
                    // grid.style.display = 'none';
                } else {
                    grid.style.display = 'grid';
                }
            });
        });
    });
});

