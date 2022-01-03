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
    title: ['Data Systems Administrator', 'US Marine Corps'],
    date: 'January 2017 - August 2021',
    lineItems: [
      'Mentored peers on fundamentals of HTML, CSS, and JavaScript and provided resources for assisted training via Marine Corps training app.',
      'Worked in Active Directory creating user accounts, email accounts and troubleshooting common user errors within a virtual environment.',
      'Served as ISSO for unit, a senior billet normally reserved for individuals 4 ranks higher than I was.',
    ],
    link: 'http://dj51234.github.io/CloudMe/',
  },
  2: {
    title: ['Front End Developer', 'Red Ventures'],
    date: 'August 2016 - January 2017',
    lineItems: [
      'Developed several versions of web pages with different functionality, components or advertisement text to leverage split testing.',
      'Developed functional prototypes for clients to ensure quality control before the project development  phase.',
      'Tested front-end code in multiple browsers to ensure cross-browser compatibility.',
    ],
    link: 'https://card.americanexpress.com/d/delta-reserve-credit-card/',
  },
  3: {
    title: ['Creative Developer', 'Investor Management Services'],
    date: 'December 2015 - August 2016',
    lineItems: [
      'Developed and managed website for a financial company using HTML5, CSS3, jQuery and Wordpress',
      'Oversaw all design and development phases of website development for client websites.',
      'Worked in an agile/waterfall/JIRA structure and created HTML email templates and newsletters for email marketing campaigns.',
    ],
    link: 'https://www.investormanagementservices.com/',
  },
  4: {
    title: ['Front End Developer', 'Linium'],
    date: 'September 2014 - December 2015',
    lineItems: [
      'Developed and designed client websites using Photoshop, HTML5 and CSS.',
      'Designed wireframes and functional web prototypes using front end development tools.',
      'Maintained the website by running tests, consistently updating features and fixing bugs.',
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
    thumb.children[0].textContent = portfolioContent[currentNum].title[0];
    thumb.children[0][0].textContent = portfolioContent[currentNum].title[1];
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
      experience[0].innerHTML = `<span>${experienceContent[currentNum].title[0]}</span> @ ${experienceContent[currentNum].title[1]}`;
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
