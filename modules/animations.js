export const handleAnimations = () => {
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
