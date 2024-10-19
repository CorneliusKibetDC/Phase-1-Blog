// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll to navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Offset to account for header height
                behavior: 'smooth' // Smooth scrolling
            });
        });
    });
});
