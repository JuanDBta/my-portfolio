const projects = [
  {
    name: 'Project 1',
    description: 'Description for Project 1.',
    image: 'Images SVG/Projects1.svg',
    tech: ['HTML/CSS', 'Ruby On Rails', 'JavaScript'],
    liveLink: 'https://juandbta.github.io/Portfolio-project/',
    sourceLink: 'https://github.com/JuanDBta/Porfolio-project',
  },
];

const menuProjects = document.createElement('div');
menuProjects.className = 'menu-projects';

const backgroundProjects = document.createElement('div');
backgroundProjects.className = 'background-projects';
const img = document.createElement('img');
img.id = 'projects2';
img.src = projects[0].image;
backgroundProjects.appendChild(img);
menuProjects.appendChild(backgroundProjects);

const title = document.createElement('h3');
title.className = 'projects-title';
title.textContent = projects[0].name;
menuProjects.appendChild(title);

const techList = document.createElement('ul');
techList.className = 'menu-languages';
for (const tech of projects[0].tech) {
  const techItem = document.createElement('li');
  techItem.className = 'language-button';
  techItem.textContent = tech;
  techList.appendChild(techItem);
}
menuProjects.appendChild(techList);

const button = document.createElement('button');
button.type = 'button';
button.className = 'project-button';
button.textContent = 'See this project';
const buttonIcon = document.createElement('img');
buttonIcon.src = 'Images SVG/ic_arrow_right.svg';
button.appendChild(buttonIcon);
menuProjects.appendChild(button);

const parentElement = document.querySelector('.parent-element');
parentElement.appendChild(menuProjects);
