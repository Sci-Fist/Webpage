export const handleLoadingIndicator = () => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
        setTimeout(() => loadingIndicator.remove(), 100);
    }
};
