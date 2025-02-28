// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
