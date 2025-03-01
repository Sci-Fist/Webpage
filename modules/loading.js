export const handleLoadingIndicator = (timeoutMs = 10000) => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (!loadingIndicator) {
        console.error('Loading indicator element not found!  Check if you have an element with the id "loading-indicator" in your HTML.');
        return;
    }

    loadingIndicator.style.display = 'block';

    //Improved loading tracking
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

    //Track other resources (CSS, JS) -  This requires knowing how your CSS and JS are loaded.
    //Example:  If you load CSS via <link> tags, you could add event listeners to those links.
    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    styleSheets.forEach(link => trackResource(link));

    //Example: If you load JS via <script> tags, you could add event listeners to those scripts.
    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => trackResource(script));


    const timeoutId = setTimeout(removeLoadingIndicator, timeoutMs);

    function checkAllLoaded() {
        if (loadedResources === totalResources) {
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
