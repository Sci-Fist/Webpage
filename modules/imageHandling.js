export const handleImageError = (img) => {
    const container = img.closest('.portfolio-item') || img.closest('.blog-post');
    if (container) {
        container.classList.add('image-fallback');
        const placeholder = document.createElement('img');
        placeholder.src = 'assets/placeholder.jpg'; // Path to your placeholder image - UPDATED
        placeholder.alt = 'Placeholder Image';
        img.replaceWith(placeholder);
    }
};
