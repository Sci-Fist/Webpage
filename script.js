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
        const blogPost = this.parentElement.parentElement;
        const blogContent = blogPost.querySelector('.blog-content');
        if (blogContent) {
            blogContent.classList.toggle('show');
        }
    });
});

// Add event listeners for read more buttons in previews
document.querySelectorAll('.blog-post').forEach(post => {
    const readMoreButton = post.querySelector('.read-more-button');
    if (readMoreButton) {
        readMoreButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the link from triggering
            const blogContent = post.nextElementSibling;
            blogContent.classList.add('show');
        });
    }
});

