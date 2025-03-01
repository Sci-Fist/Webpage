// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
        setTimeout(() => {
            loadingIndicator.remove(); // Remove after a short delay
        }, 500); // Adjust delay as needed
    }

    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const createTooltip = (element, tooltipClass) => {
        const tooltip = element.querySelector(`.${tooltipClass}`);
        if (!tooltip) return;

        let timeoutId;

        element.addEventListener('mouseover', () => {
            timeoutId = setTimeout(() => tooltip.classList.add('show'), 200);
        });

        element.addEventListener('mouseout', () => {
            clearTimeout(timeoutId);
            tooltip.classList.remove('show');
        });
    };

    const blogPosts = document.querySelectorAll('.blog-post');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    blogPosts.forEach(post => createTooltip(post, 'blog-tooltip'));
    portfolioItems.forEach(item => createTooltip(item, 'portfolio-content'));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.5 });

    const animatedElements = document.querySelectorAll('.animated-element');
    animatedElements.forEach(element => observer.observe(element));
});

