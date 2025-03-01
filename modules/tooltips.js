export const handleTooltips = () => {
    const createTooltip = (element) => {
        const tooltip = element.querySelector('[data-tooltip-content]');
        if (!tooltip) return;

        element.addEventListener('click', () => {
            tooltip.classList.toggle('show');
        });
    };

    const tooltipElements = document.querySelectorAll('[data-tooltip-content]');
    tooltipElements.forEach(element => createTooltip(element.parentElement));
};
