// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelector(`#${targetId}`).scrollIntoView({ behavior: 'smooth' });
    });
});

// Animations on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.5 });

const animatedElements = document.querySelectorAll('.animated-element');
animatedElements.forEach(element => observer.observe(element));

//Improved Tooltip Function
const createTooltip = (element, tooltipClass) => {
    const tooltip = element.querySelector(`.${tooltipClass}`);
    let timeoutId;

    element.addEventListener('mouseover', () => {
        timeoutId = setTimeout(() => tooltip.classList.add('show'), 200);
    });

    element.addEventListener('mouseout', () => {
        clearTimeout(timeoutId);
        tooltip.classList.remove('show');
    });
};

// Attach tooltips
document.querySelectorAll('.blog-post').forEach(post => createTooltip(post, 'blog-content'));
document.querySelectorAll('.portfolio-item').forEach(item => createTooltip(item, 'portfolio-content'));

