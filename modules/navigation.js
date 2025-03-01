export const handleNavigation = () => {
    const navLinks = document.querySelectorAll(".nav a");
    if (!navLinks.length) {
        console.warn("No navigation links found!");
        return;
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            } else {
                console.warn(`Navigation link target not found: #${targetId}`);
            }
            //The aria-label is already set correctly in the HTML, no need to set it here again.
        });
    });

    const currentPath = window.location.pathname;
    navLinks.forEach((link) => {
        const linkPath = link.getAttribute("href");
        if (linkPath === "#" && currentPath === "/") {
            link.classList.add("active");
        } else if (linkPath && currentPath.includes(linkPath.substring(1))) {
            link.classList.add("active");
        }
    });
};
