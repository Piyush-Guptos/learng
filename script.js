// scripts.js

// Ripple effect function
document.querySelectorAll('.button, .button-secondary, .button-tertiary').forEach(button => {
    button.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// script.js for the hamburgar menu

    // script.js

    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const navIcons = document.querySelector('.navicons');
    
        // Toggle the menu visibility when the menu toggle is clicked
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    
        // Close the menu when a navigation link is clicked
        navLinks.addEventListener('click', function(event) {
            if (event.target.tagName === 'A') {
                navLinks.classList.remove('active');
            }
        });
    
        // Close the menu if clicking outside of the menu or menu toggle
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navIcons.contains(event.target)) {
                navLinks.classList.remove('active');
            }
        });
    });
// javascript for the ripple effect of the nrbuttons
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.nrbutton');
    
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Create the ripple element
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
    
                // Get button dimensions and click position
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
    
                // Set ripple styles
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
    
                // Append ripple to button
                button.appendChild(ripple);
    
                // Remove ripple after animation
                ripple.addEventListener('animationend', () => {
                    ripple.remove();
                });
            });
        });
    });
    
    

    


