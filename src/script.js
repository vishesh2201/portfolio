function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  const dynamicText = document.getElementById("dynamic-text");
  const roles = ["Android Developer", "UI/UX Designer", "Frontend Developer", "Video Editor"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 50;
  const deletingSpeed = 25;
  const delayBetweenRoles = 1000;
  
  function type() {
    const currentRole = roles[roleIndex];
  
    // Update the text content and wrap the caret with a span for blinking
    if (isDeleting) {
        dynamicText.innerHTML = currentRole.substring(0, charIndex - 1) + '<span class="blinking-caret">|</span>';
        charIndex--;
    } else {
        dynamicText.innerHTML = currentRole.substring(0, charIndex + 1) + '<span class="blinking-caret">|</span>';
        charIndex++;
    }
  
    // When the role is fully typed and waiting to be deleted
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenRoles);
    }
    // When the role is fully deleted and moving to the next
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
  }
  
  // Start the typing effect
  window.onload = () => {
    type();
  };
  