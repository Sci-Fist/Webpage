import { handleNavigation } from './modules/navigation.js';
import { handleBackToTop } from './modules/backToTop.js';
import { handleFormSubmission } from './modules/form.js';
import { handleImageError } from './modules/imageHandling.js';
import { handleTooltips } from './modules/tooltips.js';
import { handleAnimations } from './modules/animations.js';

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
    handleTooltips();
    handleAnimations();

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
