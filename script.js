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

// Show/hide blog content on hover (updated with delay)
const showTooltip = (element, tooltipClass) => {
    let timeoutId;
    element.addEventListener('mouseover', function() {
        timeoutId = setTimeout(() => {
            this.querySelector(`.${tooltipClass}`).classList.add('show');
        }, 200); // 200ms delay
    });
    element.addEventListener('mouseout', function() {
        clearTimeout(timeoutId);
        this.querySelector(`.${tooltipClass}`).classList.remove('show');
    });
};

document.querySelectorAll('.blog-post').forEach(post => showTooltip(post, 'blog-content'));
document.querySelectorAll('.portfolio-item').forEach(item => showTooltip(item, 'portfolio-content'));

