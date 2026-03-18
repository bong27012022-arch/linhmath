document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const animateElements = document.querySelectorAll('.animate-up, .animate-left, .animate-right');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(el => revealObserver.observe(el));

    // Update Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Smooth header appearance
    const header = document.querySelector('.glass-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.7rem 0';
            header.style.background = 'rgba(255, 255, 255, 0.9)';
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
        } else {
            header.style.padding = '1rem 0';
            header.style.background = 'rgba(255, 255, 255, 0.7)';
            header.style.boxShadow = 'none';
        }
    });

    // Add CSS for visible state if not present
    const style = document.createElement('style');
    style.textContent = `
        .animate-up, .animate-left, .animate-right {
            opacity: 0;
            transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .animate-up { transform: translateY(50px); }
        .animate-left { transform: translateX(-50px); }
        .animate-right { transform: translateX(50px); }
        
        .animate-up.visible, .animate-left.visible, .animate-right.visible {
            opacity: 1;
            transform: translate(0, 0);
        }
    `;
    document.head.appendChild(style);
});
