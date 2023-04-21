const projectButtonsDesktop = document.querySelectorAll('.project-button');
const projectDisplayDesktop = document.querySelector('.popup-desktop');
const closeCardButtonDesktop = document.querySelector('.desktoppopx');
const projectContainerDesktop = document.querySelector('.projects-container');
const projectInfoDesktop = document.querySelector('.description-intro');

const mainprojectdesktop = [
  {
    name: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'Images SVG/Projects1.svg',
    tech: ['HTML/CSS', 'Ruby On Rails', 'JavaScript'],
    liveLink: 'https://juandbta.github.io/Portfolio-project/',
    sourceLink: 'https://github.com/JuanDBta/Porfolio-project',
  },
];

let currentDesktopProject = 0;
const projectImageD = projectDisplayDesktop.querySelector('.background-projects-description img');
const projectTitleD = projectDisplayDesktop.querySelector('.projectdesktoptitlepopup');
const projectLanguagesD = projectDisplayDesktop.querySelectorAll('.popdesktop');
const projectLiveButtonD = projectDisplayDesktop.querySelector('.live');
const projectSourceButtonD = projectDisplayDesktop.querySelector('.source');

function updateProjectInfo() {
  projectTitleD.textContent = mainprojectdesktop[currentDesktopProject].name;
  projectInfoDesktop.textContent = mainprojectdesktop[currentDesktopProject].description;
  projectImageD.src = mainprojectdesktop[currentDesktopProject].image;
  for (let i = 0; i < projectLanguagesD.length; i += 1) {
    projectLanguagesD[i].textContent = mainprojectdesktop[currentDesktopProject].tech[i];
  }
  projectLiveButtonD.href = mainprojectdesktop[currentDesktopProject].liveLink;
  projectSourceButtonD.href = mainprojectdesktop[currentDesktopProject].sourceLink;
}

for (let i = 0; i < projectButtonsDesktop.length; i += 1) {
  projectButtonsDesktop[i].addEventListener('click', () => {
    projectDisplayDesktop.classList.add('active');
    updateProjectInfo();
    if (window.innerWidth >= 768) {
      projectDisplayDesktop.style.display = 'block';
      projectContainerDesktop.style.display = 'none';
    }
  });
}

closeCardButtonDesktop.addEventListener('click', () => {
  projectDisplayDesktop.classList.remove('active');
  if (window.innerWidth >= 768) {
    projectDisplayDesktop.style.display = 'none';
    projectContainerDesktop.style.display = 'grid';
  } else {
    projectContainerDesktop.style.display = 'flex';
  }
});

const previousButtonD = projectDisplayDesktop.querySelector('#previous-button');
const nextButtonD = projectDisplayDesktop.querySelector('#next-button');

previousButtonD.addEventListener('click', () => {
  currentDesktopProject -= 1;
  if (currentDesktopProject < 0) {
    currentDesktopProject = mainprojectdesktop.length - 1;
  }
  updateProjectInfo();
});

nextButtonD.addEventListener('click', () => {
  currentDesktopProject += 1;
  if (currentDesktopProject >= mainprojectdesktop.length) {
    currentDesktopProject = 0;
  }
  updateProjectInfo();
});
