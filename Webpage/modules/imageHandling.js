export const handleImageError = (img) => {
    // Check if the element exists
    if (!img) return;

    const container = img.closest('.portfolio-item') || img.closest('.blog-post'); //Added .blog-post to the selector
    if (container) {
        container.classList.add('image-fallback');
        const placeholder = document.createElement('img');
        placeholder.src = 'assets/placeholder.jpg'; //  Correct path to your placeholder image
        placeholder.alt = 'Placeholder Image';
        img.replaceWith(placeholder);
    }
};
