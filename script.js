// navigation.js
import { handleNavigation } from './modules/navigation.js';

// backToTop.js
import { handleBackToTop } from './modules/backToTop.js';

// form.js
import { handleFormSubmission } from './modules/form.js';

// imageHandling.js
import { handleImageError } from './modules/imageHandling.js';

// tooltips.js
import { handleTooltips } from './modules/tooltips.js';

// animations.js
import { handleAnimations } from './modules/animations.js';

// loading.js
import { handleLoadingIndicator } from './modules/loading.js';

window.addEventListener('load', () => { // Changed to 'load' event
    handleNavigation();
    handleBackToTop();
    handleFormSubmission();
    handleTooltips();
    handleAnimations();
    handleLoadingIndicator(); // Moved here

    // Add event listeners to portfolio and blog images
    const portfolioImages = document.querySelectorAll('.portfolio-item img');
    const blogImages = document.querySelectorAll('.blog-post img');

    portfolioImages.forEach(img => {
        img.addEventListener('error', () => handleImageError(img));
    });
    blogImages.forEach(img => {
        img.addEventListener('error', () => handleImageError(img));
    });
});

