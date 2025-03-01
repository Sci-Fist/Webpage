export const handleBackToTop = () => {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) {
        handleError(new Error("Back to top button element not found!"), 'handleBackToTop');
        console.warn('Back to top button not found.  Ensure an element with id="backToTop" exists.'); //Added warning
        return; //Added return to prevent further execution if element is not found
    }

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

