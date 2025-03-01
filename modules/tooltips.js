export const handleTooltips = () => {
    const tooltipElements = document.querySelectorAll('[data-tooltip-content]');

    tooltipElements.forEach(element => {
        const tooltipText = element.dataset.tooltipContent;
        if (tooltipText) {
            element.title = tooltipText;
            element.removeAttribute('data-tooltip-content');
        }
    });
};
