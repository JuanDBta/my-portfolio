const projectsContainer = document.querySelector('.projects-container');

const projects = [
  {
    name: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'Images SVG/Projects1.svg',
    tech: ['HTML/CSS', 'Ruby On Rails', 'JavaScript'],
    liveLink: 'https://juandbta.github.io/Portfolio-project/',
    sourceLink: 'https://github.com/JuanDBta/Porfolio-project',
  },

  {
    name: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'Images SVG/Projects2.svg',
    tech: ['HTML/CSS', 'Ruby On Rails', 'JavaScript'],
    liveLink: 'https://juandbta.github.io/Portfolio-project/',
    sourceLink: 'https://github.com/JuanDBta/Porfolio-project',
  },

  {
    name: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'Images SVG/Projects3.svg',
    tech: ['HTML/CSS', 'Ruby On Rails', 'JavaScript'],
    liveLink: 'https://juandbta.github.io/Portfolio-project/',
    sourceLink: 'https://github.com/JuanDBta/Porfolio-project',
  },
  {
    name: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'Images SVG/Projects4.svg',
    tech: ['HTML/CSS', 'Ruby On Rails', 'JavaScript'],
    liveLink: 'https://juandbta.github.io/Portfolio-project/',
    sourceLink: 'https://github.com/JuanDBta/Porfolio-project',
  },

  {
    name: 'Project 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'Images SVG/Project5.svg',
    tech: ['HTML/CSS', 'Ruby On Rails', 'JavaScript'],
    liveLink: 'https://juandbta.github.io/Portfolio-project/',
    sourceLink: 'https://github.com/JuanDBta/Porfolio-project',
  },

  {
    name: 'Project 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'Images SVG/Project6.svg',
    tech: ['HTML/CSS', 'Ruby On Rails', 'JavaScript'],
    liveLink: 'https://juandbta.github.io/Portfolio-project/',
    sourceLink: 'https://github.com/JuanDBta/Porfolio-project',
  },
];

for (let i = 0; i < projects.length; i++) {
  const project = projects[i];

  const menuProjects = document.createElement('div');
  menuProjects.classList.add('menu-projects');

  const backgroundProjects = document.createElement('div');
  backgroundProjects.classList.add('background-projects');
  const image = document.createElement('img');
  image.setAttribute('src', project.image);
  backgroundProjects.appendChild(image);

  const goesHereSection = document.createElement('div');
  goesHereSection.classList.add('goes-here-section');

  const title = document.createElement('h3');
  title.classList.add('projects-title');
  title.innerText = project.name;
  goesHereSection.appendChild(title);

  const techList = document.createElement('ul');
  techList.classList.add('menu-languages');
  for (let j = 0; j < project.tech.length; j++) {
    const techItem = document.createElement('li');
    techItem.classList.add('language-button');
    techItem.innerText = project.tech[j];
    techList.appendChild(techItem);
  }
  goesHereSection.appendChild(techList);

  const projectButton = document.createElement('button');
  projectButton.classList.add('project-button');
  projectButton.setAttribute('type', 'button');
  projectButton.innerText = 'See this project';

  const arrowImg = document.createElement('img');
  arrowImg.setAttribute('src', 'Images SVG/ic_arrow_right.svg');
  projectButton.appendChild(arrowImg);

  goesHereSection.appendChild(projectButton);

  menuProjects.appendChild(backgroundProjects);
  menuProjects.appendChild(goesHereSection);

  projectsContainer.appendChild(menuProjects);
}

projects.forEach((project) => {
  const menuProjectsMain = document.createElement('div');
  menuProjectsMain.classList.add('menu-projects-main');

  const backgroundProjects = document.createElement('div');
  backgroundProjects.classList.add('background-projects');
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

  projectsContainer.appendChild(menuProjectsMain);
});
