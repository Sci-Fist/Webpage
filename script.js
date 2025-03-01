// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
        setTimeout(() => {
            loadingIndicator.remove(); // Remove after a short delay
        }, 500); // Adjust delay as needed
    }

    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const createTooltip = (element) => {
        const tooltip = element.querySelector('[data-tooltip-content]');
        if (!tooltip) return;

        let timeoutId;

        element.addEventListener('mouseover', () => {
            timeoutId = setTimeout(() => tooltip.classList.add('show'), 200);
        });

        element.addEventListener('mouseout', () => {
            clearTimeout(timeoutId);
            tooltip.classList.remove('show');
        });
    };

    const tooltipElements = document.querySelectorAll('[data-tooltip-content]');
    tooltipElements.forEach(element => createTooltip(element.parentElement));


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.5 });

    const animatedElements = document.querySelectorAll('.animated-element');
    animatedElements.forEach(element => observer.observe(element));

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        let isValid = true;

        if (name.trim() === '') {
            alert('Bitte geben Sie Ihren Namen ein.');
            isValid = false;
        }
        if (email.trim() === '' || !isValidEmail(email)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            isValid = false;
        }
        if (message.trim() === '') {
            alert('Bitte geben Sie eine Nachricht ein.');
            isValid = false;
        }

        if (isValid) {
            // Submit the form (replace with your actual submission logic)
            alert('Formular erfolgreich abgesendet!');
        }
    });

    function isValidEmail(email) {
        // Basic email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
