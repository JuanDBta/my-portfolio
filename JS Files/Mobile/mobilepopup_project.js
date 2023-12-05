const buttonMobileVersion = document.querySelectorAll('.project-button-mobile');
const popupDisplayMobile = document.querySelector('.popup-mobile');
const closeCardButtonMobileVersion = document.querySelector('.desktoppopxmobile');
const projectContainerMobileVersion = document.querySelector('.projects-container');

const mainproject = [
  {
    name: 'BookingBites',
    description: 'Built with Ruby on Rails on the backend and React & Redux on the frontend, our responsive web application offers a seamless dining reservation experience. Users can conveniently choose their preferred dining ambience, whether it is the cozy bar, the chic lounge, the scenic rooftop, the tranquil garden, or the vibrant live music area.',
    image: 'images/Projects6.svg',
    tech: ['Ruby On Rails', 'React/Redux', 'PostgreSQL'],
    liveLink: 'https://bookingbites-ve9h.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/booking-bites',
  },
  {
    name: 'My Finances',
    description: 'This app is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    image: 'images/Projects2.svg',
    tech: ['Ruby On Rails', 'PostgreSQL', 'RSpec'],
    liveLink: 'https://my-finances-h7t3.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/my-finances',
  },

  {
    name: 'Blog App',
    description: 'The Blog app is a classic example of a blog website. I created a fully functional website that will show the list of posts and empower readers to interact with them by adding comments and liking posts.',
    image: 'images/Projects3.svg',
    tech: ['Ruby On Rails', 'PostgreSQL', 'RSpec'],
    liveLink: 'https://blog-app-po5m.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/blog-app',
  },

  {
    name: 'MET Art App',
    description: 'This App connects the user with the Metropolitan Art Museum of New York API and display NINETEENTH CENTURY TOP ARTISTS. When you click an artists image you can access to all their paintings available in MET with main details like title, year of creation and medium.',
    image: 'images/MET-art.svg',
    tech: ['React', 'Redux', 'Jest'],
    liveLink: 'https://met-app.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/met-art-app',
  },

  {
    name: 'Space Hub',
    description: 'In this website, we worked with the real live data from the SpaceX API. We built a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
    image: 'images/Projects5.svg',
    tech: ['React', 'Redux', 'Jest'],
    liveLink: 'https://spacex-4e71.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/spacex',
  },

  {
    name: 'Math Magicians',
    description: 'Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    image: 'images/Projects6.svg',
    tech: ['React', 'CSS3', 'Jest'],
    liveLink: 'https://math-magicians-project-4enh.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/math-magicians',
  },
];

let currentProject = 0;
const projectImage = popupDisplayMobile.querySelector('.background-projects-description img');
const projectTitle = popupDisplayMobile.querySelector('.projectdesktoptitlepopup');
const projectLanguages = popupDisplayMobile.querySelectorAll('.popdesktop');
const projectLiveMobile = popupDisplayMobile.querySelector('.live-mobile');
const projectSourceMobile = popupDisplayMobile.querySelector('.source-mobile');
const projectInfoMobileVersion = popupDisplayMobile.querySelector('.description-intro');

function updateProjectMobileInfo() {
  projectTitle.textContent = mainproject[currentProject].name;
  projectInfoMobileVersion.textContent = mainproject[currentProject].description;
  projectImage.src = mainproject[currentProject].image;
  for (let i = 0; i < projectLanguages.length; i += 1) {
    projectLanguages[i].textContent = mainproject[currentProject].tech[i];
  }
  projectLiveMobile.href = mainproject[currentProject].liveLink;
  projectSourceMobile.href = mainproject[currentProject].sourceLink;
}

for (let i = 0; i < buttonMobileVersion.length; i += 1) {
  buttonMobileVersion[i].addEventListener('click', () => {
    popupDisplayMobile.classList.add('active');
    updateProjectMobileInfo();
    if (window.innerWidth <= 768) {
      popupDisplayMobile.style.display = 'block';
      projectContainerMobileVersion.style.display = 'none';
    }
  });
}

closeCardButtonMobileVersion.addEventListener('click', () => {
  popupDisplayMobile.classList.remove('active');
  if (window.innerWidth <= 768) {
    popupDisplayMobile.style.display = 'none';
    projectContainerMobileVersion.style.display = 'flex';
  } else {
    projectContainerMobileVersion.style.display = 'grid';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    projectContainerMobileVersion.style.display = 'grid';
  } else {
    projectContainerMobileVersion.style.display = 'flex';
  }
});

const previousButton = popupDisplayMobile.querySelector('#previous-button');
const nextButton = popupDisplayMobile.querySelector('#next-button');

previousButton.addEventListener('click', () => {
  currentProject += 1;
  if (currentProject < 0) {
    currentProject = mainproject.length - 1;
  }
  updateProjectMobileInfo();
});

nextButton.addEventListener('click', () => {
  currentProject += 1;
  if (currentProject >= mainproject.length) {
    currentProject = 0;
  }
  updateProjectMobileInfo();
});

projectLiveMobile.addEventListener('click', () => {
  window.open(mainproject[currentProject].liveLink, '_blank');
});

projectSourceMobile.addEventListener('click', () => {
  window.open(mainproject[currentProject].sourceLink, '_blank');
});