// navigation.js
import { handleNavigation } from './modules/navigation.js';

// backToTop.js
import { handleBackToTop } from './modules/backToTop.js';

// form.js
import { handleFormSubmission } from './modules/form.js';


document.addEventListener('DOMContentLoaded', () => {
    // Hide loading indicator
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
        setTimeout(() => {
            loadingIndicator.remove();
        }, 500);
    }

    handleNavigation();
    handleBackToTop();
    handleFormSubmission();
});
