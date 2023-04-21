const projectButtonMobile = document.querySelector('.project-button');
const projectDisplayMobile = document.querySelector('.popup-mobile');
const closeCardButtonMobile = document.querySelector('.desktoppopxmobile');
const projectContainerMobile = document.querySelector('.projects-container');
const projectInfoMobile = document.querySelector('.myname-intro');

const mainproject = [
  {
    name: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'Images SVG/Projects1.svg',
    tech: ['HTML/CSS', 'Ruby On Rails', 'JavaScript'],
    liveLink: 'https://juandbta.github.io/Portfolio-project/',
    sourceLink: 'https://github.com/JuanDBta/Porfolio-project',
  },
];

let currentProject = 0;
const projectImage = projectDisplayMobile.querySelector('.background-projects-description img');
const projectTitle = projectDisplayMobile.querySelector('.projectdesktoptitlepopup');
const projectLanguages = projectDisplayMobile.querySelectorAll('.popdesktop');
const projectLiveButton = projectDisplayMobile.querySelector('.live');
const projectSourceButton = projectDisplayMobile.querySelector('.source');

function updateProjectInfo() {
  projectTitle.textContent = mainproject[currentProject].name;
  projectInfoMobile.textContent = mainproject[currentProject].description;
  projectImage.src = mainproject[currentProject].image;
  for (let i = 0; i < projectLanguages.length; i += 1) {
    projectLanguages[i].textContent = mainproject[currentProject].tech[i];
  }
  projectLiveButton.href = mainproject[currentProject].liveLink;
  projectSourceButton.href = mainproject[currentProject].sourceLink;
}

projectButtonMobile.addEventListener('click', () => {
  projectDisplayMobile.classList.add('active');
  updateProjectInfo();
  if (window.innerWidth <= 768) {
    projectDisplayMobile.style.display = 'block';
    projectContainerMobile.style.display = 'none';
  }
});

closeCardButtonMobile.addEventListener('click', () => {
  projectDisplayMobile.classList.remove('active');
  if (window.innerWidth <= 768) {
    projectDisplayMobile.style.display = 'none';
    projectContainerMobile.style.display = 'flex';
  } else {
    projectContainerMobile.style.display = 'grid';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    projectContainerMobile.style.display = 'grid';
  } else {
    projectContainerMobile.style.display = 'flex';
  }
});

const previousButton = projectDisplayMobile.querySelector('#previous-button');
const nextButton = projectDisplayMobile.querySelector('#next-button');

previousButton.addEventListener('click', () => {
  currentProject -= 1;
  if (currentProject < 0) {
    currentProject = mainproject.length - 1;
  }
  updateProjectInfo();
});

nextButton.addEventListener('click', () => {
  currentProject -= 1;
  if (currentProject >= mainproject.length) {
    currentProject = 0;
  }
  updateProjectInfo();
});
