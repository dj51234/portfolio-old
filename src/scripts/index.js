import '../stylesheets/style.scss';

console.log('Hello!');

const mobileToggle = document.querySelector('.mobile-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const belt = document.querySelector('.main-belt');
const navItems = document.querySelectorAll('.nav-item');
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
const beltSections = document.querySelectorAll('.belt-section');

function toggle() {
  mobileToggle.classList.contains('toggled')
    ? mobileToggle.classList.remove('toggled')
    : mobileToggle.classList.add('toggled');

  mobileNav.classList.contains('toggled')
    ? mobileNav.classList.remove('toggled')
    : mobileNav.classList.add('toggled');
}

mobileToggle.addEventListener('click', function (e) {
  toggle();
});

navItems.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const currentSection = e.target.dataset.belt;
    belt.style.transform = `translate(-${currentSection}00vw)`;
    beltSections.forEach((section) => {
      section.dataset.belt === currentSection
        ? section.classList.add('focused')
        : section.classList.remove('focused');
    });
  });
});

mobileNavItems.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    toggle();
    const currentSection = e.target.dataset.belt;
    belt.style.transform = `translate(-${currentSection}00vw)`;
    beltSections.forEach((section) => {
      section.dataset.belt === currentSection
        ? section.classList.add('focused')
        : section.classList.remove('focused');
    });
  });
});
