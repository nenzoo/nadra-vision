document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    
    mobileMenu.addEventListener('click', function() {
        // Toggle the active class on both menu icon and navbar
        mobileMenu.classList.toggle('active');
        navbar.classList.toggle('active');
    });
    
    // Close menu when clicking on a navigation link
    const navLinks = document.querySelectorAll('#navbar li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navbar.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !navbar.contains(event.target)) {
            mobileMenu.classList.remove('active');
            navbar.classList.remove('active');
        }
    });
});

 // Slide in the WhatsApp button after 5 seconds
        window.addEventListener('load', function() {
            setTimeout(function() {
                const whatsappFloat = document.getElementById('whatsappFloat');
                whatsappFloat.classList.add('slide-in');
            }, 1000);
        });

        // Optional: Add click tracking
        document.querySelector('.whatsapp-button').addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('WhatsApp button clicked');
        });

        // Optional: Smooth slide-out animation when page unloads
        window.addEventListener('beforeunload', function() {
            const whatsappFloat = document.getElementById('whatsappFloat');
            whatsappFloat.classList.remove('slide-in');
            whatsappFloat.classList.add('slide-out');
        });