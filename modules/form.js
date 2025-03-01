export const handleFormSubmission = async () => {
    const form = document.getElementById('contact-form');
    if (!form) {
        console.error('Contact form element not found!');
        return;
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        displayFormMessage('Senden...', 'info');

        const formData = new FormData(form);
        try {
            const response = await fetch('/submit', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                let errorMessage = 'Fehler beim Absenden des Formulars.';
                if (response.status === 400) {
                    errorMessage = 'Ungültige Eingabe. Bitte überprüfen Sie Ihre Daten.';
                } else if (response.status === 500) {
                    errorMessage = 'Ein interner Serverfehler ist aufgetreten.';
                } else {
                    const errorData = await response.json();
                    errorMessage = errorData.message || `HTTP-Fehler ${response.status}: ${response.statusText}. Bitte versuchen Sie es später noch einmal.`;
                }
                displayFormMessage(errorMessage, 'error');
                throw new Error(errorMessage);
            }

            const data = await response.json();
            displayFormMessage(data.message || 'Vielen Dank für Ihre Nachricht!', 'success');
            form.reset();
        } catch (error) {
            handleError(error, 'handleFormSubmission');
        }
    });
};

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
