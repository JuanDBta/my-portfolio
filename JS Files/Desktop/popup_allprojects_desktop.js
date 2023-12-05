const projectButtonsDesktop = document.querySelectorAll('.project-button');
const projectButtonsDots = document.querySelectorAll('.projectbuttondots');
const projectDisplayDesktop = document.querySelector('.popup-desktop');
const closeCardButtonDesktop = document.querySelector('.desktoppopx');
const projectContainerDesktop = document.querySelector('.projects-container');
const bar = document.querySelector('.nav-bar');
const headline = document.querySelector('.headline');
const about = document.querySelector('.about-skills');
const contact = document.querySelector('.contact');

const mainprojectdesktop = [
  {
    name: 'BookingBites',
    description: 'Built with Ruby on Rails on the backend and React & Redux on the frontend, our responsive web application offers a seamless dining reservation experience. Users can conveniently choose their preferred dining ambience, whether it is the cozy bar, the chic lounge, the scenic rooftop, the tranquil garden, or the vibrant live music area.',
    image: 'images/Projects1.png',
    tech: ['Ruby On Rails', 'React/Redux', 'PostgreSQL'],
    liveLink: 'https://bookingbites-ve9h.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/booking-bites',
  },

  {
    name: 'My Finances',
    description: 'This app is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    image: 'images/Projects2.png',
    tech: ['Ruby On Rails', 'PostgreSQL', 'RSpec'],
    liveLink: 'https://my-finances-h7t3.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/my-finances',
  },

  {
    name: 'Blog App',
    description: 'The Blog app is a classic example of a blog website. I created a fully functional website that will show the list of posts and empower readers to interact with them by adding comments and liking posts.',
    image: 'images/Projects3.png',
    tech: ['Ruby On Rails', 'PostgreSQL', 'RSpec'],
    liveLink: 'https://blog-app-po5m.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/blog-app',
  },

  {
    name: 'MET Art App',
    description: 'This App connects the user with the Metropolitan Art Museum of New York API and display NINETEENTH CENTURY TOP ARTISTS. When you click an artists image you can access to all their paintings available in MET with main details like title, year of creation and medium.',
    image: 'images/met-art-desktop.jpg',
    tech: ['React', 'Redux', 'Jest'],
    liveLink: 'https://met-app.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/met-art-app',
  },

  {
    name: 'Space Hub',
    description: 'In this website, we worked with the real live data from the SpaceX API. We built a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
    image: 'images/Projects5.png',
    tech: ['React', 'Redux', 'Jest'],
    liveLink: 'https://spacex-4e71.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/spacex',
  },

  {
    name: 'Math Magicians',
    description: 'Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    image: 'images/Projects6.png',
    tech: ['React', 'CSS3', 'Jest'],
    liveLink: 'https://math-magicians-project-4enh.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/math-magicians',
  },
];

function applyBlurEffect() {
  bar.classList.add('blurred');
  headline.classList.add('blurred');
  projectContainerDesktop.classList.add('blurred');
  about.classList.add('blurred');
  contact.classList.add('blurred');
}

function removeBlurEffect() {
  bar.classList.remove('blurred');
  headline.classList.remove('blurred');
  projectContainerDesktop.classList.remove('blurred');
  about.classList.remove('blurred');
  contact.classList.remove('blurred');
}

let currentDesktopProject = 0;
const projectImageD = projectDisplayDesktop.querySelector('.background-projects-description img');
const projectTitleD = projectDisplayDesktop.querySelector('.projectdesktoptitlepopup');
const projectInfoDesktop = projectDisplayDesktop.querySelector('.desktop-description');
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
    currentDesktopProject = 1;
    projectDisplayDesktop.classList.add('active');
    applyBlurEffect();
    updateProjectInfo();
    if (window.innerWidth >= 768) {
      projectDisplayDesktop.style.display = 'block';
      projectContainerDesktop.style.display = 'none';
    }
  });
}

for (let i = 0; i < projectButtonsDots.length; i += 1) {
  projectButtonsDots[i].addEventListener('click', () => {
    currentDesktopProject = 3;
    projectDisplayDesktop.classList.add('active');
    applyBlurEffect();
    updateProjectInfo();
    if (window.innerWidth >= 768) {
      projectDisplayDesktop.style.display = 'block';
      projectContainerDesktop.style.display = 'none';
    }
  });
}

closeCardButtonDesktop.addEventListener('click', () => {
  projectDisplayDesktop.classList.remove('active');
  removeBlurEffect();
  if (window.innerWidth >= 768) {
    projectDisplayDesktop.style.display = 'none';
    projectContainerDesktop.style.display = 'grid';
  } else {
    projectContainerDesktop.style.display = 'flex';
  }
});

projectLiveButtonD.addEventListener('click', () => {
  window.open(mainprojectdesktop[currentDesktopProject].liveLink, '_blank');
});

projectSourceButtonD.addEventListener('click', () => {
  window.open(mainprojectdesktop[currentDesktopProject].sourceLink, '_blank');
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
