export const handleFormSubmission = () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        let isValid = true;

        if (name.trim() === '') {
            displayFormMessage('Bitte geben Sie Ihren Namen ein.', 'error');
            isValid = false;
        }
        if (email.trim() === '' || !isValidEmail(email)) {
            displayFormMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'error');
            isValid = false;
        }
        if (message.trim() === '') {
            displayFormMessage('Bitte geben Sie eine Nachricht ein.', 'error');
            isValid = false;
        }

        if (isValid) {
            try {
                const response = await fetch('/submit', { // Replace '/submit' with your endpoint
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, message }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                displayFormMessage(data.message || 'Formular erfolgreich abgesendet!', 'success');
            } catch (error) {
                displayFormMessage('Fehler beim Absenden des Formulars. Bitte versuchen Sie es später noch einmal.', 'error');
                console.error('Error:', error);
            }
        }
    });

    const displayFormMessage = (message, type) => {
        formMessage.textContent = message;
        formMessage.classList.remove('success', 'error');
        formMessage.classList.add(type);
    };

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
};
