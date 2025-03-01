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
        removeLoadingIndicator();
        return;
    }

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
            removeLoadingIndicator();
        }
    }

    function removeLoadingIndicator() {
        loadingIndicator.style.display = 'none';
        setTimeout(() => loadingIndicator.remove(), 500);
    }
};
