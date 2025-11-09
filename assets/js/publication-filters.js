// Publication page filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.publication-filters .filter-btn');
    const publications = document.querySelectorAll('.publication');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            publications.forEach(pub => {
                if (filter === 'all') {
                    pub.style.display = 'block';
                } else if (filter === 'conference' && pub.dataset.type === 'conference') {
                    pub.style.display = 'block';
                } else if (filter === 'thesis' && pub.dataset.type === 'thesis') {
                    pub.style.display = 'block';
                } else {
                    pub.style.display = 'none';
                }
            });
        });
    });
});

