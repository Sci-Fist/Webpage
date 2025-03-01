export const handleLoadingIndicator = () => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (!loadingIndicator) {
        console.error('Loading indicator element not found!');
        return; // Exit early if the element is missing
    }

    try {
        loadingIndicator.style.display = 'none';
        setTimeout(() => {
            loadingIndicator.remove();
            console.log('Loading indicator removed successfully.');
        }, 100);
    } catch (error) {
        console.error('Error removing loading indicator:', error);
    }
};
