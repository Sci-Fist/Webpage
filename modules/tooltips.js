export const handleTooltips = () => {
    const tooltipElements = document.querySelectorAll('[data-tooltip-content]');

    tooltipElements.forEach(element => {
        const tooltipText = element.getAttribute('data-tooltip-content');
        if (tooltipText) {
            element.setAttribute('title', tooltipText);
            element.removeAttribute('data-tooltip-content');
        }
    });
};
