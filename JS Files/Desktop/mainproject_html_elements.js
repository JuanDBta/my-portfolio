const parentElement = document.querySelector('.projects-container');

const pro = [
  {
    name: 'BookingBites',
    description: 'Full-stack responsive web application allowing users to make reservations for their preferred sections in a restaurant.',
    image: 'images/Projects1.png',
    tech: ['Ruby On Rails', 'React/Redux', 'PostgreSQL'],
    liveLink: 'https://bookingbites-ve9h.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/booking-bites',
  },

  {
    name: 'My Finances',
    description: 'Web application that facilitates budget management and enables users to create transactions associated with specific categories.',
    image: 'images/Projects2.png',
    tech: ['Ruby On Rails', 'PostgreSQL', 'RSpec'],
    liveLink: 'https://my-finances-h7t3.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/my-finances',
  },

  {
    name: 'Blog App',
    description: 'Interactive website that displays a list of posts, allowing users to engage by adding comments and likes, as well as creating their own posts.',
    image: 'images/Projects3.png',
    tech: ['Ruby On Rails', 'PostgreSQL', 'RSpec'],
    liveLink: 'https://blog-app-ix14.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/blog-app',
  },

  {
    name: 'MET Art App',
    description: 'Responsive web app linking users to the NYC Metropolitan Museum API, showcasing paintings by selected artists.',
    image: 'images/Projects4.jpg',
    tech: ['React', 'Redux', 'Jest'],
    liveLink: 'https://met-app.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/met-art-app',
  },

  {
    name: 'Space Hub',
    description: 'Web app connects live SpaceX API, enabling users to book rockets and join space missions.',
    image: 'images/Projects5.png',
    tech: ['React', 'Redux', 'Jest'],
    liveLink: 'https://spacex-4e71.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/spacex',
  },

  {
    name: 'Math Magicians',
    description: 'Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    image: 'images/Projects6.png',
    tech: ['React', 'CSS3', 'Jest'],
    liveLink: 'https://math-magicians-project-4enh.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/math-magicians',
  },
];

for (let i = 0; i < pro.length; i += 1) {
  const project = pro[i];
  const menuProjectsMain = document.createElement('div');
  menuProjectsMain.classList.add('menu-projects-main');

  const imageLink = document.createElement('a');
  imageLink.setAttribute('href', project.liveLink);
  imageLink.setAttribute('target', '_blank');

  const backgroundProjects = document.createElement('div');
  backgroundProjects.classList.add('background-projects-main');
  const image = document.createElement('img');
  image.setAttribute('src', project.image);
  imageLink.appendChild(image);
  backgroundProjects.appendChild(imageLink);

  menuProjectsMain.appendChild(backgroundProjects);

  const goesHereSection = document.createElement('div');
  goesHereSection.classList.add('goes-here-section');

  const title = document.createElement('h3');
  title.classList.add('projects-title');
  title.textContent = project.name;
  goesHereSection.appendChild(title);

  const list = document.createElement('ul');
  list.classList.add('menu-languages');
  project.tech.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.classList.add('language-button');
    listItem.textContent = language;
    list.appendChild(listItem);
  });
  goesHereSection.appendChild(list);

  const shortDescription = document.createElement('p');
  shortDescription.classList.add('short-description-desktop');
  shortDescription.textContent = project.description;
  goesHereSection.appendChild(shortDescription);

  const button = document.createElement('button');
  button.classList.add('project-button');
  button.setAttribute('type', 'button');
  button.textContent = 'See this project';
  const arrowImage = document.createElement('img');
  arrowImage.src = 'Images SVG/ic_arrow_right.svg';
  button.appendChild(arrowImage);
  goesHereSection.appendChild(button);

  button.addEventListener('click', () => {
    currentDesktopProject = i;
    updateProjectInfo();
    projectDisplayDesktop.classList.add('active');
    if (window.innerWidth > 768) {
      projectDisplayDesktop.style.display = 'block';
      projectContainerDesktop.style.display = 'none';
    }
  });

  menuProjectsMain.appendChild(goesHereSection);

  parentElement.appendChild(menuProjectsMain);
}