/**
 * Handles the loading indicator. Shows a loading indicator while resources are loading and hides it when all resources are loaded.
 * @param {number} timeoutMs - Timeout in milliseconds after which the loading indicator is removed regardless of loading status. Defaults to 10000ms (10 seconds).
 */
export const handleLoadingIndicator = (timeoutMs = 10000) => {
    // Get the loading indicator element
    const loadingIndicator = document.getElementById('loading-indicator');
    // Get the main content element
    const mainContent = document.getElementById('main-content');
    // Check if the loading indicator element exists
    if (!loadingIndicator) {
        console.error('Loading indicator element not found! Check if you have an element with the id "loading-indicator" in your HTML.');
        return;
    }
    // Check if the main content element exists
    if (!mainContent) {
        console.error('Main content element not found! Check if you have an element with the id "main-content" in your HTML.');
        return;
    }

    // Show the loading indicator
    loadingIndicator.style.display = 'block';

    //Resource tracking using Promises
    const promises = [];

    const trackResource = (resource, resourceType) => {
        return new Promise((resolve, reject) => {
            resource.onload = () => resolve();
            resource.onerror = () => reject(new Error(`Error loading ${resourceType}: ${resource.src || resource.href}`));
        });
    };

    const images = document.querySelectorAll('img');
    images.forEach(img => promises.push(trackResource(img, 'image')));

    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    styleSheets.forEach(link => promises.push(trackResource(link, 'stylesheet')));

    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => promises.push(trackResource(script, 'script')));


    Promise.allSettled(promises)
        .then(() => {
            console.log(`All resources loaded. resourcesLoaded: ${resourcesLoaded}, resourcesToLoad: ${resourcesToLoad}`); //Debugging statement
            removeLoadingIndicator();
        })
        .catch(error => {
            console.error("Error loading resources:", error);
            removeLoadingIndicator(); //Remove loading indicator even if there are errors
        });


    const timeoutId = setTimeout(removeLoadingIndicator, timeoutMs);

    function removeLoadingIndicator() {
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
            setTimeout(() => {
                loadingIndicator.remove();
                mainContent.style.display = 'block'; // Show main content
            }, 500); // Remove the loading indicator element after a short delay
        }
    }
};

