/**
 * Handles form submission. Sends form data to the server and displays messages to the user.
 */
export const handleFormSubmission = async () => {
    // Get the contact form element
    const form = document.getElementById('contact-form');
    // Check if the form element exists
    if (!form) {
        console.error('Contact form element not found!');
        return;
    }

    // Add an event listener to handle form submissions
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        displayFormMessage('Senden...', 'info'); // Display a loading message

        // Create a FormData object from the form data
        const formData = new FormData(form);
        try {
            // Send the form data to the server using fetch
            const response = await fetch('/submit', {
                method: 'POST',
                body: formData,
            });

            // Check the HTTP status code for a more robust error handling
            if (!response.ok) {
                let errorMessage;
                if (response.status === 400) {
                    errorMessage = 'Ungültige Eingabe. Bitte überprüfen Sie Ihre Daten.';
                } else if (response.status === 500) {
                    errorMessage = 'Ein interner Serverfehler ist aufgetreten.';
                } else {
                    const errorData = await response.json();
                    errorMessage = errorData.message || `HTTP-Fehler ${response.status}: ${response.statusText}. Bitte versuchen Sie es später noch einmal.`;
                }
                displayFormMessage(errorMessage, 'error'); // Display the error message
                throw new Error(errorMessage); // Re-throw the error to be handled by the centralized error handler
            }

            // Parse the successful response as JSON
            const data = await response.json();
            // Display a success message
            displayFormMessage(data.message || 'Vielen Dank für Ihre Nachricht!', 'success');
            form.reset(); // Reset the form
        } catch (error) {
            // Handle any errors that occurred during the fetch request
            handleError(error, 'handleFormSubmission');
        }
    });
};

/**
 * Displays a message to the user above the form.
 * @param {string} message - The message to display.
 * @param {string} type - The type of message ('success', 'error', or 'info').
 */
const displayFormMessage = (message, type) => {
    const messageElement = document.getElementById('form-message');
    if (!messageElement) {
        console.error('Form message element not found!');
        return;
    }
    messageElement.textContent = message;
    messageElement.classList.remove('success', 'error', 'info');
    messageElement.classList.add(type);
    messageElement.style.display = 'block';
};

