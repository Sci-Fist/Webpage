export const handleTooltips = () => {
    const tooltipElements = document.querySelectorAll('[data-tooltip-content]');
    if (!tooltipElements.length) {
        console.warn('No elements with data-tooltip-content attribute found.'); //Added warning
        return; //Added return to prevent further execution if elements are not found
    }

    tooltipElements.forEach(element => {
        const tooltipText = element.dataset.tooltipContent;
        if (tooltipText) {
            element.title = tooltipText;
            element.removeAttribute('data-tooltip-content');
        }
    });
};
