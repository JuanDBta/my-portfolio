const projectsContainerr = document.querySelector('.projects-container');

const projectdots = [
  {
    name: 'MET Art App',
    description: 'This App connects the user with the Metropolitan Art Museum of New York API and display NINETEENTH CENTURY TOP ARTISTS. When you click an artists image you can access to all their paintings available in MET with main details like title, year of creation and medium.',
    image: 'images/Projects4.jpg',
    tech: ['React', 'Redux', 'Jest'],
    liveLink: 'https://met-app.onrender.com/',
    sourceLink: 'https://github.com/JuanDBta/met-art-app',
  }
];

for (let i = 0; i < projectdots.length; i += 1) {
  const project = projectdots[i];

  const projectDots = document.createElement('div');
  projectDots.classList.add('menuprojectsmaindots');

  const infoDots = document.createElement('div');
  infoDots.setAttribute('id', 'dots');
  const title = document.createElement('h3');
  title.classList.add('projectstitledots');
  title.textContent = project.name;
  infoDots.appendChild(title);

  const techList = document.createElement('ul');
  techList.classList.add('menulanguagesdots');
  for (let j = 0; j < project.tech.length; j += 1) {
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
  const arrowImage = document.createElement('img');
  arrowImage.src = 'Images SVG/ic_arrow_right.svg';
  button.appendChild(arrowImage);
  infoDots.appendChild(button);

  projectDots.appendChild(infoDots);
  projectsContainerr.appendChild(projectDots);
}