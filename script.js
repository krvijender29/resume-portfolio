const typingText = document.getElementById("typing");
const phrases = [
  "Frontend Developer",
  "UI Designer",
  "Creative Problem Solver",
  "Portfolio Builder"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  typingText.textContent = currentPhrase.substring(0, charIndex);

  if (!isDeleting) {
    charIndex++;
    if (charIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach((el) => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});