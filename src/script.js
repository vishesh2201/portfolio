// scripts.js

// Function to toggle the menu open and close
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Typing effect variables
const dynamicText = document.getElementById("dynamic-text");
const roles = ["Android Developer", "UI/UX Designer", "Frontend Developer", "Video Editor"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 50; // Speed for typing each character
const deletingSpeed = 25; // Speed for deleting each character
const delayBetweenRoles = 1000; // Delay before starting to delete the role

// Function to handle the typing effect
function type() {
    const currentRole = roles[roleIndex];
    let textToShow;

    // Update the text content and wrap the caret with a span for blinking
    if (isDeleting) {
        textToShow = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textToShow = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    // Update the dynamicText with the current text and add the blinking caret
    dynamicText.innerHTML = textToShow + '<span class="blinking-caret">|</span>';

    // When the role is fully typed, start deleting after a delay
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenRoles);
    }
    // When the role is fully deleted, move to the next role
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, typingSpeed);
    } else {
        // Continue typing or deleting at the appropriate speed
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Start the typing effect on window load
window.onload = () => {
    type();
};

// Event listener for toggling the menu
const hamburgerIcon = document.querySelector(".hamburger-icon");
hamburgerIcon.addEventListener("click", toggleMenu);
