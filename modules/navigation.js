export const handleNavigation = () => {
    const navLinks = document.querySelectorAll(".nav a");
    if (!navLinks.length) {
        handleError(new Error("No navigation links found!"), 'handleNavigation'); //Use centralized error handling
        return;
    }
    // ... (rest of the code remains the same)
};
