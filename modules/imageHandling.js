export const handleImageError = (img) => {
    const container = img.closest('.portfolio-item');
    if (container) {
        container.classList.add('image-fallback');
        const placeholder = document.createElement('img');
        placeholder.src = 'assets/placeholder.jpg';
        placeholder.alt = 'Placeholder Image';
        img.replaceWith(placeholder); // Replace the broken image with the placeholder
        const span = document.createElement('span');
        span.textContent = 'Bild konnte nicht geladen werden.';
        container.appendChild(span); // Add the error message below the placeholder
    }
};

