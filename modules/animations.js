/**
 * Handles animations using Intersection Observer API.  Adds a 'show' class to elements when they enter the viewport.
 */
export const handleAnimations = () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Add the 'show' class to the target element when it intersects the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.5 }); // Observe elements when 50% of them are visible

    // Select all elements with the 'animated-element' class
    const animatedElements = document.querySelectorAll('.animated-element');
    // Observe each animated element
    animatedElements.forEach(element => observer.observe(element));
};

