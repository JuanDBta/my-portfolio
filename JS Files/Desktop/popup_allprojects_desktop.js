const projectButtonsDesktop = document.querySelectorAll('.project-button');
const projectDisplayDesktop = document.querySelector('.popup-desktop');
const closeCardButtonDesktop = document.querySelector('.desktoppopx');
const projectContainerDesktop = document.querySelector('.projects-container');
const projectInfoDesktop = document.querySelector('.description-intro');

const mainprojectdesktop = [
  {
    name: 'BookingBites',
    description: 'Built with Ruby on Rails on the backend and React & Redux on the frontend, our responsive web application offers a seamless dining reservation experience. Users can conveniently choose their preferred dining ambience, whether it is the cozy bar, the chic lounge, the scenic rooftop, the tranquil garden, or the vibrant live music area.',
    image: 'images/Projects1.png',
    tech: ['Ruby On Rails', 'React/Redux', 'PostgreSQL'],
    liveLink: 'https://bookingbites-ve9h.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/booking-bites',
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

projectLiveButtonD.addEventListener('click', function() {
  window.location.href = mainprojectdesktop[currentDesktopProject].liveLink;
});

projectSourceButtonD.addEventListener('click', function() {
  window.location.href = mainprojectdesktop[currentDesktopProject].sourceLink;
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
