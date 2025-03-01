/**
 * Handles the loading indicator. Shows a loading indicator while resources are loading and hides it when all resources are loaded.
 * @param {number} timeoutMs - Timeout in milliseconds after which the loading indicator is removed regardless of loading status. Defaults to 10000ms (10 seconds).
 */
export const handleLoadingIndicator = (timeoutMs = 10000) => {
    // Get the loading indicator element
    const loadingIndicator = document.getElementById('loading-indicator');
    // Check if the loading indicator element exists
    if (!loadingIndicator) {
        console.error('Loading indicator element not found! Check if you have an element with the id "loading-indicator" in your HTML.');
        return;
    }

    // Show the loading indicator
    loadingIndicator.style.display = 'block';

    // Initialize counters for resources
    let resourcesToLoad = 0;
    let resourcesLoaded = 0;

    // Function to track the loading status of a resource
    const trackResource = (resource, resourceType) => {
        resourcesToLoad++; // Increment the total number of resources to load
        resource.onload = () => {
            resourcesLoaded++; // Increment the number of loaded resources
            checkAllLoaded(); // Check if all resources have loaded
        };
        resource.onerror = () => {
            console.error(`Error loading ${resourceType}: ${resource.src || resource.href}`); // Log an error if a resource fails to load
            resourcesLoaded++; // Increment the number of loaded resources even if there was an error
            checkAllLoaded(); // Check if all resources have loaded
        };
    };

    // Track loading status of images
    const images = document.querySelectorAll('img');
    images.forEach(img => trackResource(img, 'image'));

    // Track loading status of stylesheets
    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    styleSheets.forEach(link => trackResource(link, 'stylesheet'));

    // Track loading status of scripts
    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => trackResource(script, 'script'));

    // Set a timeout to hide the loading indicator after a certain time, even if not all resources have loaded
    const timeoutId = setTimeout(removeLoadingIndicator, timeoutMs);

    // Function to check if all resources have loaded
    function checkAllLoaded() {
        if (resourcesLoaded >= resourcesToLoad) {
            clearTimeout(timeoutId); // Clear the timeout if all resources have loaded
            removeLoadingIndicator(); // Hide the loading indicator
        }
    }

    // Function to hide the loading indicator
    function removeLoadingIndicator() {
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
            setTimeout(() => loadingIndicator.remove(), 500); // Remove the loading indicator element after a short delay
        }
    }
};

