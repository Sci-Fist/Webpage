/**
 * Handles tooltips. Adds title attributes to elements with data-tooltip-content attributes.
 */
export const handleTooltips = () => {
    // Select all elements with the data-tooltip-content attribute
    const tooltipElements = document.querySelectorAll('[data-tooltip-content]');
    // Check if any elements with the attribute were found
    if (!tooltipElements.length) {
        console.warn('No elements with data-tooltip-content attribute found.');
        return;
    }

    // Add title attributes to each element
    tooltipElements.forEach(element => {
        const tooltipText = element.dataset.tooltipContent;
        if (tooltipText) {
            element.title = tooltipText; // Set the title attribute to the tooltip text
            element.removeAttribute('data-tooltip-content'); // Remove the data attribute after processing
        }
    });
};

