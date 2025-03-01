import { handleNavigation } from './modules/navigation.js';
import { handleBackToTop } from './modules/backToTop.js';
import { handleFormSubmission } from './modules/form.js';
import { handleTooltips } from './modules/tooltips.js';
import { handleAnimations } from './modules/animations.js';
import { handleLoadingIndicator } from './modules/loading.js';
import { handleImageError } from './modules/imageHandling.js';

window.addEventListener('load', () => {
    console.log('Window loaded!');
    try {
        handleNavigation();
        handleBackToTop();
        handleFormSubmission();
        handleTooltips();
        handleAnimations();
        handleLoadingIndicator();

        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', () => handleImageError(img));
        });
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

