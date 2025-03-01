export const handleBackToTop = () => {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return; //Handle case where button isn't in the DOM.
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};
