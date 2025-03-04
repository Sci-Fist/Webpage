// Import all necessary modules
import { handleNavigation } from './modules/navigation.js';
import { handleBackToTop } from './modules/backToTop.js';
import { handleFormSubmission } from './modules/form.js';
import { handleAnimations } from './modules/animations.js';
import { handleImageError } from './modules/imageHandling.js';
import { handleLoadingIndicator } from './modules/loading.js';
import { handleTooltips } from './modules/tooltips.js';
import { handleError, initErrorHandling } from './errorHandling.js';

// Initialize the centralized error handling system
initErrorHandling();

// Helper function to initialize modules and handle potential errors
const initializeModule = (module, moduleName) => {
    try {
        module();
    } catch (error) {
        handleError(error, moduleName);
    }
};

// Initialize all modules EXCEPT handleLoadingIndicator
initializeModule(handleNavigation, 'handleNavigation');
initializeModule(handleBackToTop, 'handleBackToTop');
initializeModule(handleFormSubmission, 'handleFormSubmission');
initializeModule(handleAnimations, 'handleAnimations');
initializeModule(handleTooltips, 'handleTooltips');

// Add event listeners to all images to handle potential loading errors
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('error', () => handleImageError(img));
});

// Initialize handleLoadingIndicator LAST to ensure all resources are loaded
initializeModule(handleLoadingIndicator, 'handleLoadingIndicator');

