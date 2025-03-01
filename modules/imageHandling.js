/**
 * Handles image loading errors.  Replaces broken images with a placeholder.
 * @param {HTMLImageElement} brokenImage - The image element that failed to load.
 */
export const handleImageError = (brokenImage) => {
    const container = brokenImage.closest('.portfolio-item'); // Find the closest container element
    if (!container) {
        console.error('Could not find container for broken image.');
        return;
    }
    const placeholder = document.createElement('img'); // Create a placeholder image element
    placeholder.src = '/images/placeholder.jpg'; // Set the source of the placeholder image
    placeholder.alt = 'Placeholder image for a broken image.'; // Set alt text for accessibility
    placeholder.classList.add('placeholder'); // Add a class for styling
    container.replaceChild(placeholder, brokenImage); // Replace the broken image with the placeholder
};

