export const handleFormSubmission = () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        let isValid = true;

        // Input validation with more specific error messages
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
            try {
                const response = await fetch('/submit', { // **REPLACE /submit WITH YOUR ACTUAL ENDPOINT**
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
                    } else {
                        errorMessage = `HTTP-Fehler ${response.status}. Bitte versuchen Sie es später noch einmal.`;
                    }
                    displayFormMessage(errorMessage, 'error');
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                displayFormMessage(data.message || 'Formular erfolgreich abgesendet!', 'success');
            } catch (error) {
                displayFormMessage('Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später noch einmal.', 'error');
                console.error('Error:', error);
            }
        }
    });

    const displayFormMessage = (message, type, inputField = null) => {
        formMessage.textContent = message;
        formMessage.classList.remove('success', 'error');
        formMessage.classList.add(type);
        formMessage.setAttribute('role', 'alert'); // ARIA attribute for accessibility
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
