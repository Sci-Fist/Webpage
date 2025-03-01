export const handleLoadingIndicator = (timeoutMs = 10000) => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (!loadingIndicator) {
        console.error('Loading indicator element not found!  Check if you have an element with the id "loading-indicator" in your HTML.');
        return;
    }

    loadingIndicator.style.display = 'block'; // Show the loading indicator initially

    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
        removeLoadingIndicator(); // No images, remove immediately
        return;
    }

    const timeoutId = setTimeout(removeLoadingIndicator, timeoutMs);

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
        if (loadingIndicator) { // Check if the element still exists
            loadingIndicator.style.display = 'none';
            setTimeout(() => {
                if (loadingIndicator) { // Check again before removing
                    loadingIndicator.remove();
                }
            }, 500);
        }
    }
};
