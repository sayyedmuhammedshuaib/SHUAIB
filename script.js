// Script.js - Main JavaScript file for the web project

// Example: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Example: Console log on page load
window.addEventListener('load', function() {
    console.log('Web project loaded successfully!');
});

// Example: Add click event listeners
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'SECTION') {
        console.log('Clicked section:', e.target.id);
    }
});