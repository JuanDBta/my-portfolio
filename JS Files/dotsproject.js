const projectsContainerr = document.querySelector('.projects-container');

const projectdots = [
  {
    name: 'Project 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'Images SVG/Project6.svg',
    tech: ['HTML/CSS', 'Ruby On Rails', 'JavaScript'],
    liveLink: 'https://juandbta.github.io/Portfolio-project/',
    sourceLink: 'https://github.com/JuanDBta/Porfolio-project',
  },
];

for (let i = 0; i < projectdots.length; i++) {
  const project = projectdots[i];

  const projectDots = document.createElement('div');
  projectDots.classList.add('menuprojectsmaindots');

  const imageDots = document.createElement('div');
  imageDots.classList.add('backgroundprojectsdots');
  const image = document.createElement('img');
  image.setAttribute('src', project.image);
  imageDots.appendChild(image);
  projectDots.appendChild(imageDots);

  const infoDots = document.createElement('div');
  infoDots.setAttribute('id', 'dots');
  const title = document.createElement('h3');
  title.classList.add('projectstitledots');
  title.textContent = project.name;
  infoDots.appendChild(title);

  const techList = document.createElement('ul');
  techList.classList.add('menulanguagesdots');
  for (let j = 0; j < project.tech.length; j++) {
    const tech = project.tech[j];
    const techItem = document.createElement('li');
    techItem.classList.add('languagebuttondots');
    techItem.textContent = tech;
    techList.appendChild(techItem);
  }
  infoDots.appendChild(techList);

  const button = document.createElement('button');
  button.classList.add('projectbuttondots');
  button.setAttribute('type', 'button');
  button.textContent = 'See this project';
  const icon = document.createElement('img');
  icon.setAttribute('src', 'Images SVG/ic_arrow_right.svg');
  button.appendChild(icon);
  infoDots.appendChild(button);

  projectDots.appendChild(infoDots);
  projectsContainerr.appendChild(projectDots);
}