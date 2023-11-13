const parentElement = document.querySelector('.projects-container');

const pro = [
  {
    name: 'BookingBites',
    description: 'Built with Ruby on Rails on the backend and React & Redux on the frontend, our responsive web application offers a seamless dining reservation experience. Users can conveniently choose their preferred dining ambience, whether it is the cozy bar, the chic lounge, the scenic rooftop, the tranquil garden, or the vibrant live music area.',
    image: 'images/Projects1.png',
    tech: ['Ruby On Rails', 'React/Redux', 'PostgreSQL'],
    liveLink: 'https://bookingbites-ve9h.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/booking-bites',
  },
];

pro.forEach((project) => {
  const menuProjectsMain = document.createElement('div');
  menuProjectsMain.classList.add('menu-projects-main');

  const backgroundProjects = document.createElement('div');
  backgroundProjects.classList.add('background-projects');
  const imageLink = document.createElement('a');
  imageLink.href = "https://github.com/JuanDBta/booking-bites";
  imageLink.target = "_blank";
  const image = document.createElement('img');
  image.src = project.image;
  backgroundProjects.appendChild(image);

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
  button.textContent = 'See this project';
  const arrowImage = document.createElement('img');
  arrowImage.src = 'Images SVG/ic_arrow_right.svg';
  button.appendChild(arrowImage);
  goesHereSection.appendChild(button);

  menuProjectsMain.appendChild(goesHereSection);

  parentElement.appendChild(menuProjectsMain);
});

document.getElementById('cvButton').addEventListener('click', function() {
  window.location.href = 'https://docs.google.com/document/d/19hBPTPqCY66v-x-8j0TS23LPBFJDHq1zRRBjqxHEs-E/edit?usp=sharing';
});