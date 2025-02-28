const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Check if dark mode was enabled before
const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
if (darkModeEnabled) {
  body.classList.add('dark-mode');
}
