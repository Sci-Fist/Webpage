export const handleTooltips = () => {
    const createTooltip = (element) => {
        const tooltipContent = element.getAttribute('data-tooltip-content');
        if (!tooltipContent) return; //Added null check for data-tooltip-content

        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip-content';
        tooltip.textContent = tooltipContent;
        element.appendChild(tooltip);

        element.addEventListener('mouseenter', () => {
            tooltip.classList.add('show');
        });

        element.addEventListener('mouseleave', () => {
            tooltip.classList.remove('show');
        });
    };

    const tooltipElements = document.querySelectorAll('[data-tooltip-content]');
    tooltipElements.forEach(createTooltip);
};
