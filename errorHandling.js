// Create a custom event for application-wide error handling
const errorEvent = new Event('applicationError');

/**
 * Handles application errors.  Dispatches a custom event and logs the error.
 * @param {Error} error - The error object.
 * @param {string} source - The source of the error (e.g., module name).
 */
export const handleError = (error, source) => {
    const errorMessage = `An error occurred in ${source}: ${error.message}`;
    const errorDetails = { message: errorMessage, source, error };
    window.dispatchEvent(errorEvent); // Dispatch the custom event
    console.error(errorDetails); // Log the error details for debugging
};

/**
 * Displays an error message to the user.
 * @param {object} errorDetails - An object containing error details.
 */
export const displayError = (errorDetails) => {
    const errorContainer = document.getElementById('error-container');
    if (!errorContainer) {
        console.error('Error container element not found!');
        return;
    }
    errorContainer.innerHTML = `<p>${errorDetails.message}</p>`;
    errorContainer.style.display = 'block';
};

/**
 * Initializes the error handling system by adding an event listener for the custom event.
 */
export const initErrorHandling = () => {
    window.addEventListener('applicationError', (event) => {
        displayError(event.detail);
    });
};

