const parentElement = document.querySelector('.projects-container');

const pro = [
  {
    name: 'BookingBites',
    description: 'Built with Ruby on Rails on the backend and React & Redux on the frontend, our responsive web application offers a seamless dining reservation experience. Users can conveniently choose their preferred dining ambience, whether it is the cozy bar, the chic lounge, the scenic rooftop, the tranquil garden, or the vibrant live music area.',
    image: 'images/Projects1.webp',
    tech: ['Ruby On Rails', 'React/Redux', 'PostgreSQL'],
    liveLink: 'https://bookingbites-ve9h.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/booking-bites',
  },

  {
    name: 'My Finances',
    description: 'This app is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    image: 'images/Projects2.webp',
    tech: ['Ruby On Rails', 'PostgreSQL', 'RSpec'],
    liveLink: 'https://my-finances-h7t3.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/my-finances',
  },

  {
    name: 'Blog App',
    description: 'The Blog app is a classic example of a blog website. I created a fully functional website that will show the list of posts and empower readers to interact with them by adding comments and liking posts.',
    image: 'images/Projects3.webp',
    tech: ['Ruby On Rails', 'PostgreSQL', 'RSpec'],
    liveLink: 'https://blog-app-po5m.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/blog-app',
  },

  {
    name: 'MET Art App',
    description: 'This App connects the user with the Metropolitan Art Museum of New York API and display NINETEENTH CENTURY TOP ARTISTS. When you click an artists image you can access to all their paintings available in MET with main details like title, year of creation and medium.',
    image: 'images/met-art-desktop.webp',
    tech: ['React', 'Redux', 'Jest'],
    liveLink: 'https://met-app.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/met-art-app',
  },

  {
    name: 'Space Hub',
    description: 'In this website, we worked with the real live data from the SpaceX API. We built a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
    image: 'images/Projects5.webp',
    tech: ['React', 'Redux', 'Jest'],
    liveLink: 'https://spacex-4e71.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/spacex',
  },

  {
    name: 'Math Magicians',
    description: 'Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    image: 'images/Projects6.webp',
    tech: ['React', 'CSS3', 'Jest'],
    liveLink: 'https://math-magicians-project-4enh.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/math-magicians',
  },
];

pro.forEach((project) => {
  const menuProjectsMain = document.createElement('div');
  menuProjectsMain.classList.add('menu-projects-main');

  const backgroundProjects = document.createElement('div');
  backgroundProjects.classList.add('background-projects-main');
  const image = document.createElement('img');
  image.setAttribute('src', project.image);
  backgroundProjects.appendChild(image);
  menuProjectsMain.appendChild(backgroundProjects);

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

  const button = document.createElement('button');
  button.classList.add('project-button');
  button.setAttribute('type', 'button');
  button.textContent = 'See this project';
  const arrowImage = document.createElement('img');
  arrowImage.src = 'Images SVG/ic_arrow_right.svg';
  button.appendChild(arrowImage);
  goesHereSection.appendChild(button);

  menuProjectsMain.appendChild(goesHereSection);

  parentElement.appendChild(menuProjectsMain);
});