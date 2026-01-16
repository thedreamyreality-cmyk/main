// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 110) {
      section.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Accordion (dropdown services)
const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
  btn.setAttribute("aria-expanded", "false");

  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    // close others for cleaner feel
    buttons.forEach(other => {
      if (other !== btn) {
        other.setAttribute("aria-expanded", "false");
        other.nextElementSibling.style.maxHeight = null;
      }
    });

    if (isOpen) {
      btn.setAttribute("aria-expanded", "false");
      panel.style.maxHeight = null;
    } else {
      btn.setAttribute("aria-expanded", "true");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
