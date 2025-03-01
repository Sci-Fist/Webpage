import { handleNavigation } from './modules/navigation.js';
import { handleBackToTop } from './modules/backToTop.js';
import { handleFormSubmission } from './modules/form.js';
import { handleAnimations } from './modules/animations.js';
import { handleLoadingIndicator } from './modules/loading.js';
import { handleImageError } from './modules/imageHandling.js';

window.addEventListener('load', () => {
    console.log('Window loaded!');
    try {
        handleNavigation();
        handleBackToTop();
        handleFormSubmission();
        handleAnimations();
        // Use a configurable timeout (e.g., 5 seconds)
        handleLoadingIndicator(5000);

        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', () => handleImageError(img));
        });
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

