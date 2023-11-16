const projectButtonsMobile = document.querySelectorAll('.project-button');
const projectDisplayMobile = document.querySelector('.popup-mobile');
const closeCardButtonMobile = document.querySelector('.desktoppopxmobile');
const projectContainerMobile = document.querySelector('.projects-container');
const projectInfoMobile = document.querySelector('.description-intro');

const mainproject = [
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
    image: 'images/Projects4.jpg',
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

for (let i = 0; i < projectButtonsMobile.length; i += 1) {
  projectButtonsMobile[i].addEventListener('click', () => {
    projectDisplayMobile.classList.add('active');
    updateProjectInfo();
    if (window.innerWidth <= 768) {
      projectDisplayMobile.style.display = 'block';
      projectContainerMobile.style.display = 'none';
    }
  });
}

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
  currentProject += 1;
  if (currentProject < 0) {
    currentProject = mainproject.length - 1;
  }
  updateProjectInfo();
});

nextButton.addEventListener('click', () => {
  currentProject += 1;
  if (currentProject >= mainproject.length) {
    currentProject = 0;
  }
  updateProjectInfo();
});
