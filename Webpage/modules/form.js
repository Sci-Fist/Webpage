export const handleFormSubmission = () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    if (!contactForm || !formMessage) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (!nameInput || !emailInput || !messageInput) return; // Check if input elements exist

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        let isValid = true;

        // Input validation
        if (name === '') {
            displayFormMessage('Bitte geben Sie Ihren Namen ein.', 'error', nameInput);
            isValid = false;
        }
        if (email === '' || !isValidEmail(email)) {
            displayFormMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'error', emailInput);
            isValid = false;
        }
        if (message === '' || message.length < 10) {
            displayFormMessage('Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein.', 'error', messageInput);
            isValid = false;
        }
        if (message.length > 500) {
            displayFormMessage('Ihre Nachricht darf maximal 500 Zeichen lang sein.', 'error', messageInput);
            isValid = false;
        }

        if (isValid) {
            // **IMPORTANT: Replace '/submit' with your actual API endpoint**
            try {
                const response = await fetch('/submit', { // e.g., '/api/contact' or your serverless function URL
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, message }),
                });

                if (!response.ok) {
                    let errorMessage = 'Fehler beim Absenden des Formulars.';
                    if (response.status === 400) {
                        errorMessage = 'Ungültige Eingabe. Bitte überprüfen Sie Ihre Daten.';
                    } else if (response.status === 500) {
                        errorMessage = 'Ein interner Serverfehler ist aufgetreten.';
                    }
                    displayFormMessage(errorMessage, 'error');
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json(); // Assuming the server returns JSON
                displayFormMessage(data.message || 'Formular erfolgreich abgesendet!', 'success');

                // Optionally, clear the form after successful submission
                contactForm.reset();

            } catch (error) {
                console.error('Form submission error:', error);
                displayFormMessage('Fehler beim Absenden des Formulars. Bitte versuchen Sie es später noch einmal.', 'error');
            }
        }
    });

    const displayFormMessage = (message, type, inputField = null) => {
        formMessage.textContent = message;
        formMessage.classList.remove('success', 'error');
        formMessage.classList.add(type);

        if (inputField) {
            inputField.classList.add('error'); // Add error class to input field
            inputField.addEventListener('input', () => {
                inputField.classList.remove('error'); // Remove error class on input
                formMessage.textContent = ''; // Clear message
            });
        }
    };

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
};
