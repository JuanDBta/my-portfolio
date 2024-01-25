const projectsContainer = document.querySelector('.projects-container');

const projects = [
  {
    name: 'BookingBites',
    description: 'Full-stack responsive web application allowing users to make reservations for their preferred sections in a restaurant.',
    image: 'images/Projects1.svg',
    tech: ['Ruby On Rails', 'React/Redux', 'PostgreSQL'],
    liveLink: 'https://bookingbites-ve9h.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/booking-bites',
  },

  {
    name: 'My Finances',
    description: 'Web application that facilitates budget management and enables users to create transactions associated with specific categories.',
    image: 'images/Projects2.svg',
    tech: ['Ruby On Rails', 'PostgreSQL', 'RSpec'],
    liveLink: 'https://my-finances-h7t3.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/my-finances',
  },

  {
    name: 'Blog App',
    description: 'Interactive website that displays a list of posts, allowing users to engage by adding comments and likes, as well as creating their own posts.',
    image: 'images/Projects3.svg',
    tech: ['Ruby On Rails', 'PostgreSQL', 'RSpec'],
    liveLink: 'https://blog-app-ix14.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/blog-app',
  },

  {
    name: 'MET Art App',
    description: 'Responsive web app linking users to the NYC Metropolitan Museum API, showcasing paintings by selected artists.',
    image: 'images/Projects4.svg',
    tech: ['React', 'Redux', 'Jest'],
    liveLink: 'https://met-app.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/met-art-app',
  },

  {
    name: 'Search Box',
    description: 'Provides a sleek, responsive interface for users to search articles. Delivers real-time data visualization of search trends. Simple, fast, and user-centric. ',
    image: 'images/search_project.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://search-project.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/search-project-frontend-vanillajs',
  },

  {
    name: 'Math Magicians',
    description: 'Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    image: 'images/Projects6.svg',
    tech: ['React', 'CSS3', 'Jest'],
    liveLink: 'https://math-magicians-project-4enh.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/math-magicians',
  },

];

for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];

  const menuProjects = document.createElement('div');
  menuProjects.classList.add('menu-projects');

  const imageToPreload = new Image();
  imageToPreload.src = project.image;

  const imageLinkMobile = document.createElement('a');
  imageLinkMobile.setAttribute('href', project.liveLink);
  imageLinkMobile.setAttribute('target', '_blank');

  const backgroundProjects = document.createElement('div');
  backgroundProjects.classList.add('background-projects');
  const image = document.createElement('img');
  image.setAttribute('src', project.image);
  imageLinkMobile.appendChild(image)
  backgroundProjects.appendChild(imageLinkMobile);
  menuProjects.appendChild(backgroundProjects);

  const title = document.createElement('h3');
  title.classList.add('projects-title');
  title.innerText = project.name;
  menuProjects.appendChild(title);

  const techList = document.createElement('ul');
  techList.classList.add('menu-languages');

  for (let j = 0; j < project.tech.length; j += 1) {
    const techItem = document.createElement('li');
    techItem.classList.add('language-button');
    techItem.innerText = project.tech[j];
    techList.appendChild(techItem);
  }
  menuProjects.appendChild(techList);

  const shortDescriptionMobile = document.createElement('p');
  shortDescriptionMobile.classList.add('short-description-mobile');
  shortDescriptionMobile.textContent = project.description;
  menuProjects.appendChild(shortDescriptionMobile);


  const projectButton = document.createElement('button');
  projectButton.classList.add('project-button-mobile');
  projectButton.setAttribute('type', 'button');
  projectButton.innerText = 'See this project';

  const arrowImg = document.createElement('img');
  arrowImg.setAttribute('src', 'Images SVG/ic_arrow_right.svg');
  projectButton.appendChild(arrowImg);

  projectButton.addEventListener('click', () => {
    currentProject = i;
    updateProjectMobileInfo();
    popupDisplayMobile.classList.add('active');
    if (window.innerWidth <= 768) {
      popupDisplayMobile.style.display = 'block';
      projectContainerMobileVersion.style.display = 'none';
    }
  });

  menuProjects.appendChild(projectButton);

  projectsContainer.appendChild(menuProjects);
}
