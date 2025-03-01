export const handleLoadingIndicator = (timeoutMs = 10000) => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (!loadingIndicator) {
        console.error('Loading indicator element not found! Check if you have an element with the id "loading-indicator" in your HTML.');
        return;
    }

    loadingIndicator.style.display = 'block';

    let totalResources = 0;
    let loadedResources = 0;

    const trackResource = (resource) => {
        totalResources++;
        resource.onload = () => {
            loadedResources++;
            checkAllLoaded();
        };
        resource.onerror = () => {
            loadedResources++;
            checkAllLoaded();
        };
    };

    const images = document.querySelectorAll('img');
    images.forEach(img => trackResource(img));

    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    styleSheets.forEach(link => trackResource(link));

    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => trackResource(script));

    const timeoutId = setTimeout(removeLoadingIndicator, timeoutMs);

    function checkAllLoaded() {
        if (loadedResources >= totalResources) { //Use >= to handle cases where totalResources might be 0
            clearTimeout(timeoutId);
            removeLoadingIndicator();
        }
    }

    function removeLoadingIndicator() {
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
            setTimeout(() => {
                if (loadingIndicator) {
                    loadingIndicator.remove();
                }
            }, 500);
        }
    }
};
