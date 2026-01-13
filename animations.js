// Simple page loader and light animations
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 300);
    }
    
    // Light fade-in for cards
    document.querySelectorAll('.service-card, .stat-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, i * 50);
    });
});

// Page transition on navigation
document.addEventListener('DOMContentLoaded', () => {
    // Add page enter animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 10);
    
    // Handle link clicks for smooth transitions
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.href && 
            !link.href.includes('#') && 
            !link.href.includes('mailto:') && 
            !link.href.includes('tel:') && 
            !link.target &&
            link.href.startsWith(window.location.origin)) {
            
            e.preventDefault();
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = link.href;
            }, 300);
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Handle back/forward button
    window.addEventListener('pageshow', (e) => {
        if (e.persisted) {
            document.body.style.opacity = '1';
        }
    });
});