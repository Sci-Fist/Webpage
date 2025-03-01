// backToTop.js
// This module manages the "Back to Top" button functionality.  It shows the
// button when the user scrolls down the page and hides it when they scroll up
// past a certain point.
//
// Exported function: handleBackToTop()

export const handleBackToTop = () => {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return; // Handle case where button doesn't exist

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};
