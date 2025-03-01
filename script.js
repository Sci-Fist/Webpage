document.addEventListener('DOMContentLoaded', () => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
        setTimeout(() => {
            loadingIndicator.remove();
        }, 1000);
    }

    //Navigation
    const handleNavigation = () => {
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
    };

    //Tooltips
    const handleTooltips = () => {
        const createTooltip = (element) => {
            const tooltip = element.querySelector('[data-tooltip-content]');
            if (!tooltip) return;

            element.addEventListener('click', () => {
                tooltip.classList.toggle('show');
            });
        };

        const tooltipElements = document.querySelectorAll('[data-tooltip-content]');
        tooltipElements.forEach(element => createTooltip(element.parentElement));
    };

    //Animations
    const handleAnimations = () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.5 });

        const animatedElements = document.querySelectorAll('.animated-element');
        animatedElements.forEach(element => observer.observe(element));
    };

    //Back to Top
    const handleBackToTop = () => {
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
    };

    //Form Validation and Submission
    const handleFormSubmission = () => {
        const contactForm = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            let isValid = true;

            if (name.trim() === '') {
                displayFormMessage('Bitte geben Sie Ihren Namen ein.', 'error');
                isValid = false;
            }
            if (email.trim() === '' || !isValidEmail(email)) {
                displayFormMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'error');
                isValid = false;
            }
            if (message.trim() === '') {
                displayFormMessage('Bitte geben Sie eine Nachricht ein.', 'error');
                isValid = false;
            }

            if (isValid) {
                // Replace the following line with your actual submission logic
                // For example:
                // fetch('your_submission_endpoint', {
                //   method: 'POST',
                //   headers: {
                //     'Content-Type': 'application/json',
                //   },
                //   body: JSON.stringify({ name, email, message }),
                // })
                // .then(response => {
                //   if (!response.ok) {
                //     throw new Error(`HTTP error! status: ${response.status}`);
                //   }
                //   return response.json();
                // })
                // .then(data => {
                //   displayFormMessage(data.message || 'Formular erfolgreich abgesendet!', 'success');
                // })
                // .catch(error => {
                //   displayFormMessage('Fehler beim Absenden des Formulars. Bitte versuchen Sie es später noch einmal.', 'error');
                //   console.error('Error:', error);
                // });
                displayFormMessage('Formular erfolgreich abgesendet!', 'success'); // Simulate success
            }
        });

        const displayFormMessage = (message, type) => {
            formMessage.textContent = message;
            formMessage.classList.remove('success', 'error');
            formMessage.classList.add(type);
        };

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
    };

    // Function to handle image loading errors
    const handleImageError = (img) => {
        const container = img.closest('.portfolio-item') || img.closest('.blog-post');
        if (container) {
            container.classList.add('image-fallback');
            img.remove();
        }
    };

    // Add event listeners to portfolio and blog images
    const portfolioImages = document.querySelectorAll('.portfolio-item img');
    const blogImages = document.querySelectorAll('.blog-post img');

    portfolioImages.forEach(img => {
        img.addEventListener('error', () => handleImageError(img));
    });
    blogImages.forEach(img => {
        img.addEventListener('error', () => handleImageError(img));
    });

    handleNavigation();
    handleTooltips();
    handleAnimations();
    handleBackToTop();
    handleFormSubmission();
});
