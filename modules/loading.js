export const handleLoadingIndicator = () => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (!loadingIndicator) {
        console.error('Loading indicator element not found!');
        return;
    }

    try {
        loadingIndicator.style.display = 'none';
        const timeoutId = setTimeout(() => {
            loadingIndicator.remove();
            console.log('Loading indicator removed successfully.');
        }, 100);

        //Check if the timeout was successful
        if(timeoutId === undefined){
            console.error("Timeout function failed to execute");
        }

    } catch (error) {
        console.error('Error removing loading indicator:', error);
    }
};
