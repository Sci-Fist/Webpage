export const handleNavigation = () => {
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.warn(`Navigation link target not found: #${targetId}`);
                // Consider adding a fallback action here, e.g., alert or redirect
            }
            //Accessibility improvement: Add aria-label to links
            link.setAttribute('aria-label', `Navigate to ${link.textContent}`);
        });
    });

    // Add active class to current page
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === '#' && currentPath === '/') {
            link.classList.add('active'); // Assuming home page
        } else if (linkPath && currentPath.includes(linkPath.substring(1))) {
            link.classList.add('active');
        }
    });
};
