export const handleBackToTop = () => {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) {
        handleError(new Error("Back to top button element not found!"), 'handleBackToTop'); //Use centralized error handling
        return;
    }
    // ... (rest of the code remains the same)
};
