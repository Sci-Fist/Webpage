// navigation.js
import { handleNavigation } from './modules/navigation.js';

// tooltips.js
import { handleTooltips } from './modules/tooltips.js';

// animations.js
import { handleAnimations } from './modules/animations.js';

// backToTop.js
import { handleBackToTop } from './modules/backToTop.js';

// form.js
import { handleFormSubmission } from './modules/form.js';

// imageHandling.js
import { handleImageError } from './modules/imageHandling.js';


document.addEventListener('DOMContentLoaded', () => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
        setTimeout(() => {
            loadingIndicator.remove();
        }, 1000);
    }

    handleNavigation();
    handleTooltips();
    handleAnimations();
    handleBackToTop();
    handleFormSubmission();

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

