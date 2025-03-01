import { handleNavigation } from './modules/navigation.js';
import { handleBackToTop } from './modules/backToTop.js';
import { handleFormSubmission } from './modules/form.js';
import { handleAnimations } from './modules/animations.js';
import { handleImageError } from './modules/imageHandling.js';
import { handleLoadingIndicator } from './modules/loading.js';
import { handleTooltips } from './modules/tooltips.js';

const errorContainer = document.createElement('div');
errorContainer.id = 'error-container';
errorContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; z-index: 1001; color: white;';

const initializeModule = (module, moduleName) => {
    try {
        module();
    } catch (error) {
        console.error(`Error in ${moduleName}:`, error);
        const errorMessage = `An error occurred in ${moduleName}: ${error.message}`;
        errorContainer.innerHTML = `<p>${errorMessage}</p>`;
        document.body.appendChild(errorContainer);
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

