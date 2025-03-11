// Smooth scroll function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Trigger section animation on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 150) {
      section.classList.add('active');
    }
  });
});
