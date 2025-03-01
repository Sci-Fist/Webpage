export const handleNavigation = () => {
    const navLinks = document.querySelectorAll(".nav a");
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
            link.setAttribute("aria-label", `Navigate to ${link.textContent}`);
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
