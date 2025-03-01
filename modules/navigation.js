export const handleNavigation = () => {
    const navLinks = document.querySelectorAll(".nav a");
    if (!navLinks.length) {
        handleError(new Error("No navigation links found!"), 'handleNavigation');
        console.warn('Navigation links not found. Ensure elements with class ".nav a" exist.'); //Added warning
        return; //Added return to prevent further execution if elements are not found
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.warn(`Target element with ID "${targetId}" not found.`); //Added warning
            }
        });
    });

    // Add active class to current page link
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.href.endsWith(currentPath)) {
            link.classList.add('active');
        }
    });
};
