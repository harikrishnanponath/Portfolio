document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  const reviewProjectBtn1 = document.querySelector("#review-movieq-btn");
  const reviewProjectBtn2 = document.querySelector("#review-newsing-btn");
  const reviewProjectBtn3 = document.querySelector("#review-booksify-btn");

  // Toggle menu on click
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // Open GitHub on Review Project button click
  reviewProjectBtn1.onclick = () => {
    window.open('https://github.com/harikrishnanponath/movieQ', '_blank');  
  };

  reviewProjectBtn2.onclick = () => {
    window.open('https://github.com/harikrishnanponath/newsing', '_blank');  
  };

  reviewProjectBtn3.onclick = () => {
    window.open('https://github.com/harikrishnanponath/booksify', '_blank');  
  };

  // Typing effect logic
  const textElement = document.getElementById("typing-effect");

  const phrases = ["I'm an Android Developer.", "I'm a Web Developer."];
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;

  function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    let textToDisplay = "I'm "; // Start with the fixed "I'm" part
    
    // Add the rest of the phrase (excluding "I'm")
    if (currentCharIndex < currentPhrase.length - 4) { // Subtract 4 to account for "I'm "
      // Wrap the changing text in a <span> with the gradient
      textToDisplay += `<span class="gradient-text">${currentPhrase.substring(4, currentCharIndex + 4)}</span>`;
      currentCharIndex++;
      textElement.innerHTML = textToDisplay; // Use innerHTML to render HTML tags
      setTimeout(type, 100); // Wait 100ms before typing the next character
    } else {
      // After typing the full phrase, wait before starting to delete
      setTimeout(deleteText, 1000);
    }
  }

  function deleteText() {
    const currentPhrase = phrases[currentPhraseIndex];
    let textToDisplay = "I'm "; // Start with the fixed "I'm" part
    
    // Remove one character from the rest of the phrase
    if (currentCharIndex > 0) {
      textToDisplay += `<span class="gradient-text">${currentPhrase.substring(4, currentCharIndex + 3)}</span>`; // Subtract 1 for "I'm"
      currentCharIndex--;
      textElement.innerHTML = textToDisplay; // Use innerHTML to render HTML tags
      setTimeout(deleteText, 50); // Wait 50ms before deleting the next character
    } else {
      // After deleting the full phrase, move to the next phrase
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(type, 500); // Wait 500ms before starting to type the next phrase
    }
  }

  // Start typing the first phrase
  type();
});

document.addEventListener('DOMContentLoaded', () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 120, density: { enable: true, value_area: 1000 } },
      color: { value: "#00f5d4" }, 
      shape: { type: "circle" },
      opacity: { value: 0.6, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 100, color: "#00f5d4", opacity: 0.6, width: 1 },
      move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" }, 
        onclick: { enable: true, mode: "repulse" }
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        repulse: { distance: 120, duration: 0.4 }
      }
    },
    retina_detect: true
  });
});


// document.addEventListener("DOMContentLoaded", () => {
//   const splashScreen = document.getElementById("splash-screen");
//   const mainContent = document.getElementById("main-content");
//   const android = document.getElementById("android-logo");

//   android.addEventListener("click", () => {
//     // 🔥 Scroll to the top before showing the main content
//     window.scrollTo({ top: 0, behavior: "instant" });

//     splashScreen.style.opacity = "0"; // Fade out
//     setTimeout(() => {
//       splashScreen.style.display = "none"; // Hide splash screen
//       mainContent.style.display = "block"; // Show main content
//     }, 1000); // Matches the CSS transition time
//   });
// });


document.addEventListener("DOMContentLoaded", () => {
  const enterText = document.getElementById("enter-text");

  // Check if the user is on a mobile device
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    enterText.textContent = "Touch Me"; // Change text for mobile
  } else {
    enterText.textContent = "Click Me"; // Keep text for desktop
  }
});
