export const handleLoadingIndicator = () => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (!loadingIndicator) {
        console.error('Loading indicator element not found!');
        return;
    }

    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
        // Handle case with no images
        removeLoadingIndicator();
        return;
    }

    images.forEach(img => {
        img.onload = () => checkIfAllImagesLoaded();
        img.onerror = () => checkIfAllImagesLoaded();
    });

    function checkIfAllImagesLoaded() {
        loadedImages++;
        if (loadedImages >= totalImages) {
            removeLoadingIndicator();
        }
    }

    function removeLoadingIndicator() {
        loadingIndicator.style.display = 'none';
        setTimeout(() => loadingIndicator.remove(), 500);
    }
};
