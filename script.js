/* =========================
   NAVIGATION + TITLE SYSTEM
   ========================= */

function navigate(page) {
  // hide all sections
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  // show target section
  const target = document.getElementById(page);
  if (target) target.classList.add("active");

  // update title
  const titleMap = {
    home: "Home",
    about: "About",
    skills: "Skills",
    motivation: "Motivation",
    contact: "Contact"
  };

  document.title = `Andikadwif.id | ${titleMap[page] || "Portfolio"}`;

  // update URL hash (biar keliatan profesional)
  history.pushState(null, "", `#${page}`);

  // auto close mobile menu
  document.getElementById("nav-menu").classList.remove("active");
}

/* ===== HANDLE REFRESH / BACK BUTTON ===== */
window.addEventListener("load", () => {
  const hash = window.location.hash.replace("#", "") || "home";
  navigate(hash);
});


/* =========================
   MOBILE MENU
   ========================= */
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}


/* =========================
   TYPING EFFECT - HOME
   ========================= */
const typingText = document.getElementById("typing-text");
const messages = [
  "Web Developer 💻",
  "Tech Enthusiast ⚡",
  "Always Learning 📚"
];

let msgIndex = 0;
let charIndex = 0;
const typingSpeed = 100;

function typeEffect() {
  if (charIndex < messages[msgIndex].length) {
    typingText.textContent += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = messages[msgIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    msgIndex = (msgIndex + 1) % messages.length;
    setTimeout(typeEffect, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);


/* =========================
   TYPING EFFECT - CONTACT
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  const text = "Contact Me";
  let i = 0;
  const speed = 120;
  const typingTarget = document.getElementById("typing-text-contact");

  function typeWriter() {
    if (typingTarget && i < text.length) {
      typingTarget.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
