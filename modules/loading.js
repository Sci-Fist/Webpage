export const handleLoadingIndicator = () => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.remove(); // Remove directly, no setTimeout needed
    }
};
