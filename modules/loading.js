export const handleLoadingIndicator = () => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (!loadingIndicator) {
        console.error('Loading indicator element not found!');
        return;
    }

    // Initially hide the loading indicator
    loadingIndicator.style.display = 'none';


    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
        return; // No images, nothing to wait for
    }

    const timeoutId = setTimeout(removeLoadingIndicator, 3000); // Fallback timeout after 3 seconds

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
            clearTimeout(timeoutId); // Clear timeout if all images loaded
            removeLoadingIndicator();
        }
    }

    function removeLoadingIndicator() {
        loadingIndicator.style.display = 'none';
        setTimeout(() => loadingIndicator.remove(), 500);
    }
};
