export const handleLoadingIndicator = () => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (!loadingIndicator) {
        console.error('Loading indicator element not found!');
        return;
    }

    try {
        //Remove the loading indicator only after all images have loaded
        const images = document.querySelectorAll('img');
        const imageLoadPromises = Array.from(images).map(img => new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        }));

        Promise.all(imageLoadPromises)
            .then(() => {
                loadingIndicator.style.display = 'none';
                setTimeout(() => {
                    loadingIndicator.remove();
                    console.log('Loading indicator removed successfully.');
                }, 500); // Increased timeout to 500ms
            })
            .catch(error => {
                console.error('Error loading images:', error);
                loadingIndicator.style.display = 'none';
                setTimeout(() => {
                    loadingIndicator.remove();
                    console.log('Loading indicator removed successfully, but with image loading errors.');
                }, 500); // Increased timeout to 500ms
            });

    } catch (error) {
        console.error('Error removing loading indicator:', error);
    }
};
