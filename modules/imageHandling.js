export const handleImageError = (img) => {
    const container = img.closest('.portfolio-item') || img.closest('.blog-post');
    if (container) {
        container.classList.add('image-fallback');
        const placeholder = document.createElement('img');
        placeholder.src = 'assets/placeholder.jpg';
        placeholder.alt = 'Placeholder Image';
        img.replaceWith(placeholder);
        const span = document.createElement('span');
        span.textContent = 'Bild konnte nicht geladen werden.';
        container.appendChild(span);
    }
};
