/**
 * Handles the loading indicator. Shows a loading indicator while resources are loading and hides it when all resources are loaded.
 * @param {number} timeoutMs - Timeout in milliseconds after which the loading indicator is removed regardless of loading status. Defaults to 10000ms (10 seconds).
 */
export const handleLoadingIndicator = (timeoutMs = 10000) => {
    const loadingIndicator = document.getElementById('loading-indicator');
    const mainContent = document.getElementById('main-content');

    if (!loadingIndicator) {
        console.error('Loading indicator element not found!');
        return;
    }
    if (!mainContent) {
        console.error('Main content element not found!');
        return;
    }

    loadingIndicator.style.display = 'block';

    let resourcesToLoad = 0;
    let resourcesLoaded = 0;
    const resourcePromises = [];

    const trackResource = (resource, resourceType) => {
        resourcesToLoad++;
        return new Promise((resolve, reject) => {
            const listener = () => {
                resourcesLoaded++;
                resource.removeEventListener('load', listener);
                resource.removeEventListener('error', listener);
                resolve();
            };
            resource.addEventListener('load', listener);
            resource.addEventListener('error', listener);
        });
    };

    //Track images
    const images = document.querySelectorAll('img');
    images.forEach(img => resourcePromises.push(trackResource(img, 'image')));

    //Track stylesheets
    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    styleSheets.forEach(link => resourcePromises.push(trackResource(link, 'stylesheet')));

    //Track scripts (this is crucial for async scripts)
    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => resourcePromises.push(trackResource(script, 'script')));


    Promise.allSettled(resourcePromises)
        .then(() => {
            console.log(`All resources loaded. resourcesLoaded: ${resourcesLoaded}, resourcesToLoad: ${resourcesToLoad}`);
            removeLoadingIndicator();
        })
        .catch(error => {
            console.error("Error loading resources:", error);
            removeLoadingIndicator();
        });

    const timeoutId = setTimeout(removeLoadingIndicator, timeoutMs);

    function removeLoadingIndicator() {
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
            setTimeout(() => {
                loadingIndicator.remove();
                mainContent.style.display = 'block';
            }, 500);
        }
    }
};

