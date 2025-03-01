/**
 * Handles the "back to top" button functionality. Shows/hides the button based on scroll position and scrolls to the top when clicked.
 */
export const handleBackToTop = () => {
    // Get the back to top button element
    const backToTopButton = document.getElementById('backToTop');
    // Check if the button element exists
    if (!backToTopButton) {
        handleError(new Error("Back to top button element not found!"), 'handleBackToTop');
        console.warn('Back to top button not found.  Ensure an element with id="backToTop" exists.');
        return;
    }

    // Add an event listener to handle scroll events
    window.addEventListener('scroll', () => {
        // Show the button if the page is scrolled past 300px
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            // Hide the button otherwise
            backToTopButton.style.display = 'none';
        }
    });

    // Add an event listener to handle button clicks
    backToTopButton.addEventListener('click', () => {
        // Scroll to the top of the page smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

