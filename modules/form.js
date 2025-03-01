export const handleFormSubmission = () => {
    // ... (rest of the code remains the same)

                if (!response.ok) {
                    let errorMessage = 'Fehler beim Absenden des Formulars.';
                    if (response.status === 400) {
                        errorMessage = 'Ungültige Eingabe. Bitte überprüfen Sie Ihre Daten.';
                    } else if (response.status === 500) {
                        errorMessage = 'Ein interner Serverfehler ist aufgetreten.';
                    } else {
                        errorMessage = `HTTP-Fehler ${response.status}: ${response.statusText}. Bitte versuchen Sie es später noch einmal.`; //Improved error message
                    }
                    displayFormMessage(errorMessage, 'error');
                    throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`); //More detailed error message
                }

    // ... (rest of the code remains the same)
};
