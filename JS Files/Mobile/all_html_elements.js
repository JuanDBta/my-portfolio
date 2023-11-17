const projectsContainer = document.querySelector('.projects-container');

const projects = [
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

for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];

  const menuProjects = document.createElement('div');
  menuProjects.classList.add('menu-projects');

  const backgroundProjects = document.createElement('div');
  backgroundProjects.classList.add('background-projects');
  const image = document.createElement('img');
  image.setAttribute('src', project.image);
  backgroundProjects.appendChild(image);
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

  const projectButton = document.createElement('button');
  projectButton.classList.add('project-button-mobile');
  projectButton.setAttribute('type', 'button');
  projectButton.innerText = 'See this project';

  const arrowImg = document.createElement('img');
  arrowImg.setAttribute('src', 'Images SVG/ic_arrow_right.svg');
  projectButton.appendChild(arrowImg);

  menuProjects.appendChild(projectButton);

  projectsContainer.appendChild(menuProjects);
}
