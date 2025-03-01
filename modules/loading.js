export const handleLoadingIndicator = (timeoutMs = 10000) => { // Increased timeout to 10 seconds
    const loadingIndicator = document.getElementById('loading-indicator');
    if (!loadingIndicator) {
        console.error('Loading indicator element not found!');
        return;
    }

    // Initially hide the loading indicator (CSS)
    loadingIndicator.style.display = 'none';

    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
        return; // No images, nothing to wait for
    }

    const timeoutId = setTimeout(removeLoadingIndicator, timeoutMs); // Configurable timeout

    images.forEach(img => {
        img.onload = () => {
            loadedImages++;
            checkAllLoaded();
        };
        img.onerror = () => {
            loadedImages++;
            checkAllLoaded();
        };
    });

    function checkAllLoaded() {
        if (loadedImages === totalImages) {
            clearTimeout(timeoutId);
            removeLoadingIndicator();
        }
    }

    function removeLoadingIndicator() {
        loadingIndicator.style.display = 'none';
        setTimeout(() => loadingIndicator.remove(), 500);
    }
};
