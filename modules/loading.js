export const handleLoadingIndicator = (timeoutMs = 10000) => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (!loadingIndicator) {
        console.error('Loading indicator element not found! Check if you have an element with the id "loading-indicator" in your HTML.');
        return;
    }

    loadingIndicator.style.display = 'block';

    let resourcesToLoad = 0;
    let resourcesLoaded = 0;

    const trackResource = (resource, resourceType) => {
        resourcesToLoad++;
        resource.onload = () => {
            resourcesLoaded++;
            checkAllLoaded();
        };
        resource.onerror = () => {
            console.error(`Error loading ${resourceType}: ${resource.src || resource.href}`);
            resourcesLoaded++;
            checkAllLoaded();
        };
    };

    const images = document.querySelectorAll('img');
    images.forEach(img => trackResource(img, 'image'));

    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    styleSheets.forEach(link => trackResource(link, 'stylesheet'));

    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => trackResource(script, 'script'));

    const timeoutId = setTimeout(removeLoadingIndicator, timeoutMs);

    function checkAllLoaded() {
        if (resourcesLoaded >= resourcesToLoad) {
            clearTimeout(timeoutId);
            removeLoadingIndicator();
        }
    }

    function removeLoadingIndicator() {
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
            setTimeout(() => loadingIndicator.remove(), 500);
        }
    }
};
