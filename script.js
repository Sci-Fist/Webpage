import { handleNavigation } from './modules/navigation.js';
import { handleBackToTop } from './modules/backToTop.js';
import { handleFormSubmission } from './modules/form.js';
import { handleAnimations } from './modules/animations.js';
import { handleImageError } from './modules/imageHandling.js';
import { handleLoadingIndicator } from './modules/loading.js';

try {
    handleLoadingIndicator(); // Call loading indicator first
    handleNavigation();
    handleBackToTop();
    handleFormSubmission();
    handleAnimations();

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', () => handleImageError(img));
    });
} catch (error) {
    console.error('Error during initialization:', error);
}

