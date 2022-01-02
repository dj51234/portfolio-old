import '../stylesheets/style.scss';

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

// const portfolioContent = {
//   1: {
//     title: 'Investor Management Services',
//     description:
//       'For this project I was tasked with designing/rebranding a website using photoshop for design templates and implementing it into wordpress using a generic wordpress theme.  This was a fun project to be able to learn more about Wordpress and the different tools you can use to customize a website.',
//     tools: ['html5', 'css3', 'wordpress', 'javascript'],
//     link: 'https://www.investormanagementservices.com/',
//   },
//   2: {
//     title: 'AMEX Delta',
//     description:
//       "This project was a small redesign of one of American Express' more recent cards.  They wanted to take a more simple and elegant approach to this design to get straight to the point in terms of what the website was trying to portray.  Nothing too fancy or different from the other American Express sites although I really enjoyed working with the designer on this one and was very eager to get the designer's beautiful design actually running in a browser to see it in action.  We decided to use the multicard navigation when scrolling down the page as well to add a bit more oomph to the overall UX.",
//     tools: ['html5', 'css3', 'sass', 'javascript'],
//     link: 'https://card.americanexpress.com/d/delta-reserve-credit-card/',
//   },

//   3: {
//     title: 'CloudMe',
//     description:
//       'This is an older design I created for CloudMe.  I leveraged a lot of jQuery libraries to accomplish the desired outcomes and overall UI/UX of the website.  This was a good project to go a little more in depth with jQuery and learn some of the quirks and nuances that come with it.',
//     tools: ['html5', 'css3', 'javascript'],
//     link: 'http://dj51234.github.io/CloudMe/',
//   },
//   4: {
//     title: 'CloudMe',
//     description:
//       'This is an older design I created for CloudMe.  I leveraged a lot of jQuery libraries to accomplish the desired outcomes and overall UI/UX of the website.  This was a good project to go a little more in depth with jQuery and learn some of the quirks and nuances that come with it.',
//     tools: ['html5', 'css3', 'javascript'],
//     link: 'http://dj51234.github.io/CloudMe/',
//   },
// };

const experienceContent = {
  1: {
    title: 'Investor Management Services',
    date: 'IMS date',
    lineItems: [
      'IMS info 1 Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'IMS info 2 Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'IMS info 3 Write modern, performant, maintainable code for a diverse array of client and internal projects',
    ],
    link: 'https://www.investormanagementservices.com/',
  },
  2: {
    title: 'RV',
    date: 'RV date',
    lineItems: [
      'RV info 1 Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'RV info 2 Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'RV info 3 Write modern, performant, maintainable code for a diverse array of client and internal projects',
    ],
    link: 'https://card.americanexpress.com/d/delta-reserve-credit-card/',
  },

  3: {
    title: 'USMC',
    date: 'USMC date',
    lineItems: [
      'USMC info 1 Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'USMC info 2 Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'USMC info 3 Write modern, performant, maintainable code for a diverse array of client and internal projects',
    ],
    link: 'http://dj51234.github.io/CloudMe/',
  },
  4: {
    title: 'Linium',
    date: 'Linium date',
    lineItems: [
      'Linium info 1 Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Linium info 2 Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Linium info 3 Write modern, performant, maintainable code for a diverse array of client and internal projects',
    ],
    link: 'http://dj51234.github.io/CloudMe/',
  },
};

function loadPortfolioContent() {
  const thumbs = document.querySelectorAll('.thumb-overlay');

  thumbs.forEach((thumb) => {
    const currentNum = thumb.dataset.content;
    thumb.parentElement.style.background = `url('src/images/content_img_${currentNum}.jpg')`;
    thumb.parentElement.style.backgroundSize = 'contain';
    thumb.children[0].textContent = portfolioContent[currentNum].title;
    thumb.children[1].textContent = portfolioContent[currentNum].description;
    thumb.children[2].textContent = portfolioContent[currentNum].tools;
  });
}

function loadExperienceContent() {
  const experienceItems = document.querySelectorAll('.experience-list a');
  const experience = document.querySelector('.experience-content').children;
  const experienceParas = document.querySelectorAll('.experience-item');
  experienceItems.forEach((item) => {
    item.addEventListener('click', function (e) {
      clearExperienceNav();
      e.preventDefault();
      const currentNum = item.dataset.experience;
      let counter = 0;
      item.classList.contains('active')
        ? item.classList.remove('active')
        : item.classList.add('active');
      experience[0].textContent = experienceContent[currentNum].title;
      experience[1].textContent = experienceContent[currentNum].date;
      experienceParas.forEach((para) => {
        para.textContent = experienceContent[currentNum].lineItems[counter];
        counter++;
      });
    });
  });
}

function clearExperienceNav() {
  const experienceItems = document.querySelectorAll('.experience-list a');
  experienceItems.forEach((link) => {
    link.classList.remove('active');
  });
}

// loadPortfolioContent();
loadExperienceContent();
