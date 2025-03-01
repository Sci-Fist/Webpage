export const handleTooltips = () => {
    const createTooltip = (element) => {
        const tooltip = element.querySelector('[data-tooltip-content]');
        if (!tooltip || !element.parentElement) return; //Added null check

        element.addEventListener('click', () => {
            tooltip.classList.toggle('show');
            element.parentElement.classList.toggle('tooltip-active'); //Added visual feedback
        });
    };

    const tooltipElements = document.querySelectorAll('[data-tooltip-content]');
    tooltipElements.forEach(element => createTooltip(element.parentElement));
};
