/**
 * Handles navigation functionality. Adds event listeners to navigation links and adds active class to current page link.
 */
export const handleNavigation = () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll(".nav a");
    // Check if any navigation links were found
    if (!navLinks.length) {
        handleError(new Error("No navigation links found!"), 'handleNavigation');
        console.warn('Navigation links not found. Ensure elements with class ".nav a" exist.');
        return;
    }

    // Add event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const targetId = link.getAttribute('href').substring(1); // Extract target ID from href attribute
            const targetElement = document.getElementById(targetId); // Get the target element

            // Check if the target element exists
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
            } else {
                console.warn(`Target element with ID "${targetId}" not found.`);
            }
        });
    });

    // Add 'active' class to the currently active navigation link
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.href.endsWith(currentPath)) {
            link.classList.add('active');
        }
    });
};

