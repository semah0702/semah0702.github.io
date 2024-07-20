document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission Example
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        console.log('Form Submitted');
        // Handle form data or other actions here
    });

    // Update "Updating..." message dynamically
    const logoElement = document.querySelector('.logo i');
    const messages = ["Updating...", "Loading Content...", "Please Wait..."];
    let currentIndex = 0;

    function updateMessage() {
        logoElement.nextElementSibling.textContent = messages[currentIndex];
        currentIndex = (currentIndex + 1) % messages.length;
    }

    setInterval(updateMessage, 3000); // Change message every 3 seconds

    // Contact Box Fade-In Effect
    const contactBox = document.querySelector('.contact-box');
    contactBox.style.opacity = 0;
    contactBox.style.transition = 'opacity 0.5s ease-in-out';

    setTimeout(() => {
        contactBox.style.opacity = 1;
    }, 1000); // Make the contact box visible after 1 second
});
