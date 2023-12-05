const parentElement = document.querySelector('.projects-container');

const pro = [
  {
    name: 'My Finances',
    description: 'This app is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    image: 'images/Projects2.svg',
    tech: ['Ruby On Rails', 'PostgreSQL', 'RSpec'],
    liveLink: 'https://my-finances-h7t3.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/my-finances',
  },
];

pro.forEach((project) => {
  const menuProjectsMain = document.createElement('div');
  menuProjectsMain.classList.add('menu-projects-main');

  const backgroundProjects = document.createElement('div');
  backgroundProjects.classList.add('background-projects');
  const imageLink = document.createElement('a');
  imageLink.href = 'https://github.com/JuanDBta/booking-bites';
  imageLink.target = '_blank';
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
  button.setAttribute('type', 'button');
  button.textContent = 'See this project';
  const arrowImage = document.createElement('img');
  arrowImage.src = 'Images SVG/ic_arrow_right.svg';
  button.appendChild(arrowImage);
  goesHereSection.appendChild(button);

  menuProjectsMain.appendChild(goesHereSection);

  parentElement.appendChild(menuProjectsMain);
});