const errorEvent = new Event('applicationError');

export const handleError = (error, source) => {
    const errorMessage = `An error occurred in ${source}: ${error.message}`;
    const errorDetails = { message: errorMessage, source, error };
    window.dispatchEvent(errorEvent);
    console.error(errorDetails); // Log the error for debugging
};

export const displayError = (errorDetails) => {
    const errorContainer = document.getElementById('error-container');
    if (!errorContainer) {
        console.error('Error container element not found!');
        return;
    }
    errorContainer.innerHTML = `<p>${errorDetails.message}</p>`;
    errorContainer.style.display = 'block';
};

export const initErrorHandling = () => {
    window.addEventListener('applicationError', (event) => {
        displayError(event.detail);
    });
};
