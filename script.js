import { handleNavigation } from './modules/navigation.js';
import { handleBackToTop } from './modules/backToTop.js';
import { handleFormSubmission } from './modules/form.js';
import { handleAnimations } from './modules/animations.js';
import { handleImageError } from './modules/imageHandling.js';
import { handleLoadingIndicator } from './modules/loading.js';
import { handleTooltips } from './modules/tooltips.js';
import { handleError, initErrorHandling } from './errorHandling.js';

initErrorHandling();

const initializeModule = (module, moduleName) => {
    try {
        module();
    } catch (error) {
        handleError(error, moduleName);
    }
};

initializeModule(handleLoadingIndicator, 'handleLoadingIndicator');
initializeModule(handleNavigation, 'handleNavigation');
initializeModule(handleBackToTop, 'handleBackToTop');
initializeModule(handleFormSubmission, 'handleFormSubmission');
initializeModule(handleAnimations, 'handleAnimations');
initializeModule(handleTooltips, 'handleTooltips');

const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('error', () => handleImageError(img));
});

