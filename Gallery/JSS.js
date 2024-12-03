document.addEventListener('DOMContentLoaded', () => {
    // Select necessary elements
    const images = document.querySelectorAll('.image');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
  
   // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
    });
  });