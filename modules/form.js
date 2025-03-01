export const handleFormSubmission = () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const validateInput = (input, validationFn, errorMessage) => {
        const value = input.value.trim();
        if (!validationFn(value)) {
            displayFormMessage(errorMessage, 'error', input);
            return false;
        }
        return true;
    };

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        formMessage.textContent = '';
        formMessage.classList.remove('success', 'error');
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');
        messageInput.classList.remove('error');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        let isValid = true;

        isValid = validateInput(nameInput, (value) => value !== '', 'Bitte geben Sie Ihren Namen ein.') && isValid;
        isValid = validateInput(emailInput, (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), 'Bitte geben Sie eine gültige E-Mail-Adresse ein.') && isValid;
        isValid = validateInput(messageInput, (value) => value.length >= 10 && value.length <= 500, 'Bitte geben Sie eine Nachricht zwischen 10 und 500 Zeichen ein.') && isValid;

        if (isValid) {
            try {
                const response = await fetch('/submit', {
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
                contactForm.reset();
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
        formMessage.setAttribute('role', 'alert');

        if (inputField) {
            inputField.classList.add('error');
            inputField.focus();
            inputField.addEventListener('input', () => {
                inputField.classList.remove('error');
                formMessage.textContent = '';
            });
        }
    };
};
