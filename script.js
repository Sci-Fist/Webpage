// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        if (targetId) {
            document.querySelector(`#${targetId}`).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animations on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.5
});

const animatedElements = document.querySelectorAll('.animated-element');
animatedElements.forEach(element => observer.observe(element));

// Show/hide blog content
document.querySelectorAll('.blog-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelectorAll('.blog-content').forEach(content => content.classList.remove('show'));
        document.getElementById(targetId).classList.add('show');
    });
});
