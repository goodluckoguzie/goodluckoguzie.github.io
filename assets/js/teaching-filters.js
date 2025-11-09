// Teaching page filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.teaching-filters .filter-btn');
    const modules = document.querySelectorAll('.module');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            modules.forEach(module => {
                if (filter === 'all') {
                    module.style.display = 'block';
                } else if (filter === 'solent' && module.dataset.institution === 'solent') {
                    module.style.display = 'block';
                } else if (filter === 'ulster' && module.dataset.institution === 'ulster') {
                    module.style.display = 'block';
                } else if (filter === 'crimson' && module.dataset.institution === 'crimson') {
                    module.style.display = 'block';
                } else if (filter === 'foundation' && module.dataset.level === 'foundation') {
                    module.style.display = 'block';
                } else if (filter === 'undergraduate' && module.dataset.level === 'undergraduate') {
                    module.style.display = 'block';
                } else if (filter === 'postgraduate' && module.dataset.level === 'postgraduate') {
                    module.style.display = 'block';
                } else {
                    module.style.display = 'none';
                }
            });
        });
    });
});

