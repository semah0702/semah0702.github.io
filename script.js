// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation (Optional)
// If needed, you can add custom validation logic here

// Example: Console log when the form is submitted
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    console.log('Form Submitted');
    // You can handle form data or do other actions here
});

// Example: Update "Updating..." message dynamically
const logoElement = document.querySelector('.logo i');
const messages = ["Updating...", "Loading Content...", "Please Wait..."];
let currentIndex = 0;

function updateMessage() {
    logoElement.nextElementSibling.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
}

setInterval(updateMessage, 3000); // Change message every 3 seconds

// Optional: Add event listeners for other dynamic features

document.addEventListener('DOMContentLoaded', function() {
    const contactBox = document.querySelector('.contact-box');

    contactBox.style.opacity = 0;
    contactBox.style.transition = 'opacity 0.5s ease-in-out';

    setTimeout(() => {
        contactBox.style.opacity = 1;
    }, 1000); // Sayfa yüklendiğinde kutunun görünmesini sağlar
});

