export const handleLoadingIndicator = () => {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (!loadingIndicator) {
        console.error('Loading indicator element not found!');
        return;
    }

    const images = document.querySelectorAll('img');
    let visibleImages = 0;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                visibleImages++;
                if (visibleImages === images.length) {
                    removeLoadingIndicator();
                }
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    images.forEach(img => observer.observe(img));

    function removeLoadingIndicator() {
        loadingIndicator.style.display = 'none';
        setTimeout(() => loadingIndicator.remove(), 500);
    }
};
